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

  const startMusic = async () => {
    if (hasStarted) return;
    
    try {
      // Lazy initialization of the Audio element on first call
      if (!audioRef.current) {
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
        audio.loop = true;
        audio.volume = 0.3;
        audio.muted = isMuted;
        audioRef.current = audio;
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        await playPromise;
        setHasStarted(true);
        console.log("Music started successfully");
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      // Keep hasStarted as false so it can retry
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
