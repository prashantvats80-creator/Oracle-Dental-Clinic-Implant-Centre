import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { useSound } from './SoundManager';

interface InteractiveButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const InteractiveButton = ({ children, onClick, ...props }: InteractiveButtonProps) => {
  const { playClick } = useSound();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    playClick();
    if (onClick) {
      onClick(e as any);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
