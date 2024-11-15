
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white shadow-md rounded-lg p-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;