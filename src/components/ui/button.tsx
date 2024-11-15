import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'outline' | 'solid';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'medium',
  onClick,
  disabled,
  className,
  children,
}) => {
  const baseStyles = 'px-4 py-2 rounded transition-all';
  const variantStyles = variant === 'outline' ? 'border border-gray-300' : 'bg-blue-500 text-white';
  const sizeStyles = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-md';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, variantStyles, sizeStyles, className)}
    >
      {children}
    </button>
  );
};

export default Button;