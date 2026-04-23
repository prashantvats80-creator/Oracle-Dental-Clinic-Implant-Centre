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
    // Using a reliable calming ambient background track
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
    audio.loop = true;
    audio.volume = 0.3;
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

  const startMusic = async () => {
    if (hasStarted || !audioRef.current) return;
    
    try {
      // Ensure the audio is loaded
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        await playPromise;
        setHasStarted(true);
        console.log("Music started successfully");
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      // If it fails, we keep hasStarted as false so it can try again on next interaction
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
