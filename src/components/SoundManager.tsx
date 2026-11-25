import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  startMusic: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
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
      if (isMuted) {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const startMusic = async () => {
    if (hasStarted && audioRef.current) {
      try {
        audioRef.current.muted = false;
        await audioRef.current.play();
      } catch {
        // Ignore browser autoplay restrictions
      }
      return;
    }

    try {
      if (!audioRef.current) {
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
        audio.loop = true;
        audio.volume = 0.25;
        audio.muted = false;
        audioRef.current = audio;
      }

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        await playPromise;
        setHasStarted(true);
      }
    } catch {
      // Keep audio opt-in if playback is blocked
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const nextMuted = !prev;
      if (!nextMuted) {
        void startMusic();
      } else if (audioRef.current) {
        audioRef.current.muted = true;
        audioRef.current.pause();
      }
      return nextMuted;
    });
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
