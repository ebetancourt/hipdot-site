import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'outlineWhite';
  size?: 'medium' | 'large';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  className = ''
}: ButtonProps) {
  const baseClasses = 'btn btn-animation inline-block rounded-[3px]';

  const variantClasses = {
    primary: 'is-blue is-transparent',
    outline: 'is-outline-black',
    outlineWhite: 'is-outline-white',
  };

  const sizeClasses = {
    medium: '',
    large: 'is-large',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      <span>{children}</span>
    </button>
  );
}
