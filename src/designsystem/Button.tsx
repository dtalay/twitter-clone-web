import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
}

export const Button = ({
  color = 'primary',
  size = 'large',
  children,
  ...rest
}: ButtonProps) => {
  const buttonClass = clsx(
    'w-full font-bold rounded-full disabled:opacity-50',
    {
      'bg-primary-btn text-white enabled:hover:bg-primary-btn-hover': color === 'primary',
      'bg-secondary-btn text-secondary-btn-label enabled:hover:bg-secondary-btn-hover': color === 'secondary',
      'py-2.5 px-4 text-base leading-5': size === 'medium',
      'py-4 px-7 text-lg leading-6': size === 'large',
    }
  );

  return (
    <button
      type="button"
      className={buttonClass}
      {...rest} 
    >
      {children}
    </button>
  );
};
