import React from 'react';
import Button from '../Button/index.ts';

interface SimpleCTAProps {
  heading: string;
  buttonText: string;
  buttonHref: string;
  backgroundType?: 'gradient' | 'image' | 'solid';
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function SimpleCTA({
  heading,
  buttonText,
  buttonHref,
  backgroundType = 'gradient',
  backgroundImage,
  backgroundColor = '#3e32da',
  textColor = 'text-white',
}: SimpleCTAProps) {
  let backgroundClasses = '';
  let backgroundStyle: React.CSSProperties = {};

  if (backgroundType === 'gradient') {
    backgroundClasses = 'bg-gradient-to-r from-[#3e32da] to-[#5e4eda]';
  } else if (backgroundType === 'image' && backgroundImage) {
    backgroundClasses = 'bg-cover bg-center bg-no-repeat';
    backgroundStyle = { backgroundImage: `url(${backgroundImage})` };
  } else {
    backgroundStyle = { backgroundColor };
  }

  return (
    <section
      className={`relative py-20 lg:py-24 ${backgroundClasses}`}
      style={backgroundStyle}
    >
      {/* Overlay for image backgrounds */}
      {backgroundType === 'image' && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      <div className="container-default relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={`mb-8 font-Syne text-4xl font-medium leading-tight ${textColor} sm:text-5xl lg:text-[57px] lg:leading-[1.2]`}>
            {heading}
          </h2>

          <div className="flex justify-center">
            <a
              href={buttonHref}
              className="inline-block rounded-xl bg-white px-10 py-[18px] text-base font-semibold text-[#3e32da] transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
