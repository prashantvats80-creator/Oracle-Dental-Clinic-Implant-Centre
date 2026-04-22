import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface InteractiveButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const InteractiveButton = ({ children, onClick, ...props }: InteractiveButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
