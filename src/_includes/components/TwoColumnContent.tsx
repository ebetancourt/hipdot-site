import React from 'react';
import Button from './Button.tsx';
import IconBulletList from './IconBulletList.tsx';

interface Feature {
  title: string;
  description: string;
}

interface TwoColumnContentProps {
  heading: string;
  content: string | string[];
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  features?: Feature[] | null;
  ctaText?: string | null;
  ctaHref?: string;
}

export default function TwoColumnContent({
  heading,
  content,
  imageSrc,
  imagePosition = 'right',
  features = null,
  ctaText = null,
  ctaHref = '#'
}: TwoColumnContentProps) {
  const imageOrder = imagePosition === 'left' ? 'order-2 lg:order-1' : 'order-2';
  const contentOrder = imagePosition === 'left' ? 'order-1 lg:order-2' : 'order-1';

  return (
    <div className={`grid items-center gap-10 ${imagePosition === 'right' ? 'lg:grid-cols-[1fr_minmax(0,_0.75fr)]' : 'lg:grid-cols-[0.7fr_minmax(0,_1fr)]'} lg:gap-24 xl:gap-[110px]`}>
      <div className={`jos ${contentOrder}`} data-jos_animation="fade-right">
        <div>
          <div className="mb-6">
            <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
              {heading}
            </h2>
          </div>
        </div>

        {Array.isArray(content) ? (
          content.map((paragraph, idx) => (
            <p key={idx} className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
            {content}
          </p>
        )}

        {features && <IconBulletList items={features} />}

        {ctaText && (
          <Button variant="primary" size="large" href={ctaHref} className="mt-8">
            {ctaText}
          </Button>
        )}
      </div>

      <div className={`jos ${imageOrder}`} data-jos_animation="fade-left">
        <div className={`w-full overflow-hidden ${imagePosition === 'right' ? 'rounded-[10px]' : 'rounded-[5px]'} mx-auto lg:mx-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-full`}>
          <img src={imageSrc} alt={heading} width="526" height="550" className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
