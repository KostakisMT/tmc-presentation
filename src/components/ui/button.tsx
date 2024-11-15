
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded transition-all';
  const variantStyles = {
    primary: 'bg-[#35F1AB] text-white hover:bg-[#2ad391]',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
    outline: 'border border-[#35F1AB] text-[#35F1AB] hover:bg-[#35F1AB]/10',
  };
  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;