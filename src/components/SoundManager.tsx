import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  startMusic: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a calming, premium piano background track appropriate for a dental clinic
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f694b.mp3?filename=calm-meditation-piano-music-11718.mp3');
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const startMusic = () => {
    if (hasStarted || !audioRef.current) return;
    
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setHasStarted(true);
      }).catch(error => {
        // Silent fail - user hasn't interacted yet
      });
    }
  };

  const toggleMute = () => {
    if (!hasStarted && audioRef.current) {
      startMusic();
    }
    setIsMuted(prev => !prev);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, startMusic }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
