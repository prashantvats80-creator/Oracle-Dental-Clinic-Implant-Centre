import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface InteractiveButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const InteractiveButton = ({ children, onClick, ...props }: InteractiveButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) onClick(e);
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
