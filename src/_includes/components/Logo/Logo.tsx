import React from 'react';

interface LogoProps {
  href?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ href = '/', variant = 'dark' }: LogoProps) {
  const logoSrc = `/assets/img/logo-${variant}.png`;

  return (
    <a href={href}>
      <img src={logoSrc} alt="HipDot Media" width="109" height="24" />
    </a>
  );
}
