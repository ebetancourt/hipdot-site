import React from 'react';

interface BrandLogoProps {
  src: string;
  alt: string;
  maxWidth?: string;
}

export default function BrandLogo({ src, alt, maxWidth = '170px' }: BrandLogoProps) {
  return (
    <div className="h-auto" style={{ maxWidth }}>
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}
