import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  color?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  children?: React.ReactNode;
}

export const Button = ({
  isDisabled = false,
  color = 'primary',
  size = 'large',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`w-full font-bold rounded-full 
        ${isDisabled ? 'opacity-50' 
        : (!isDisabled && color === 'primary') ? 'hover:bg-primary-btn-hover' 
        : (!isDisabled && color === 'secondary') ? 'hover:bg-secondary-btn-hover' 
        : null}
        ${color === 'primary' ? 'bg-primary-btn text-white' 
        : color === 'secondary' ? 'bg-secondary-btn text-secondary-btn-label' 
        : null}
        ${size === 'medium' ? 'py-2.5 px-4 text-base leading-5' 
        : size === 'large' ? 'py-4 px-7 text-lg leading-6' 
        : null}
        `}
      {...rest} 
    >
      {children}
    </button>
  );
};
