import React from 'react';

const prefix = process.env.PATH_PREFIX || "";

interface LogoProps {
  href?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ href = '/', variant = 'dark' }: LogoProps) {
  const logoSrc = `${prefix}/assets/img/hipdot-wordmark.png`;

  return (
    <a href={href}>
      <img src={logoSrc} alt="HipDot Media" width="120" height="32" />
    </a>
  );
}
