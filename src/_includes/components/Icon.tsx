import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  return <i className={`fa-${name} ${className}`}></i>;
}
