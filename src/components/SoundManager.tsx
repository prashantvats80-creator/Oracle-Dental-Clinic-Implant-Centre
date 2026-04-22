import React, { createContext, useContext, useEffect, useRef } from 'react';

// Using higher quality, more premium background music
const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
// Better quality UI button click sound - Using a more reliable source
const CLICK_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';

interface SoundContextType {
  playClick: () => void;
  startMusic: () => void;
}

const SoundContext = createContext<SoundContextType>({
  playClick: () => {},
  startMusic: () => {},
});

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    musicRef.current = new Audio(MUSIC_URL);
    musicRef.current.loop = true;
    musicRef.current.volume = 0.2; // Premium background experience

    clickSoundRef.current = new Audio(CLICK_SOUND_URL);
    clickSoundRef.current.volume = 0.4; // Crisper click sound

    return () => {
      musicRef.current?.pause();
      musicRef.current = null;
      clickSoundRef.current = null;
    };
  }, []);

  const startMusic = () => {
    musicRef.current?.play().catch(e => console.error("Autoplay prevented:", e));
  };

  const playClick = () => {
    if (clickSoundRef.current) {
      // Check if sound is ready to play
      if (clickSoundRef.current.readyState >= 2) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(e => console.warn("Click sound prevented:", e));
      } else {
        // Retry when ready
        clickSoundRef.current.addEventListener('canplaythrough', () => {
            clickSoundRef.current?.play().catch(e => console.warn("Click sound prevented:", e));
        }, { once: true });
        clickSoundRef.current.load(); // Ensure it tries to load
      }
    }
  };

  return (
    <SoundContext.Provider value={{ startMusic, playClick }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
