import React from 'react';

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // Optional legacy motion props kept for seamless compatibility without bundling motion/react
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  whileTap?: unknown;
  whileHover?: unknown;
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  initial: _initial,
  animate: _animate,
  exit: _exit,
  transition: _transition,
  whileTap: _whileTap,
  whileHover: _whileHover,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`cursor-pointer active:scale-95 transition-transform duration-150 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
