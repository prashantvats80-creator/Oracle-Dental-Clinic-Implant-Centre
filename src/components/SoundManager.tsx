import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

// Using a reliable public URL for a soothing ambient track
const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
const CLICK_SOUND_URL = 'https://www.soundjay.com/buttons/button-1.mp3';

interface SoundContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isPlaying: false,
  toggleMusic: () => {},
  playClick: () => {},
});

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    musicRef.current = new Audio(MUSIC_URL);
    musicRef.current.loop = true;
    musicRef.current.volume = 0.3;

    clickSoundRef.current = new Audio(CLICK_SOUND_URL);
    clickSoundRef.current.volume = 0.5;
    clickSoundRef.current.onerror = (e) => console.error("Click sound error:", e);

    return () => {
      musicRef.current?.pause();
      musicRef.current = null;
      clickSoundRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (musicRef.current) {
      if (isPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play().catch(e => console.error("Autoplay prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(e => console.error("Click sound prevented:", e));
    }
  };

  return (
    <SoundContext.Provider value={{ isPlaying, toggleMusic, playClick }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
