import React from 'react';
import Button from '../Button/index.ts';

interface CtaButton {
  text: string;
  href: string;
}

interface HeroProps {
  title: string;
  imageSrc: string;
  description: string;
  ctaPrimary?: CtaButton;
  ctaSecondary?: CtaButton;
}

export default function Hero({ title, imageSrc, description, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="section-hero">
      <div className="relative z-10 overflow-hidden">
        <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
          <div className="container-default">
            <div>
              <div className="jos mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-[1076px]">
                <h1 className="mb-6 font-Syne text-[40px] font-semibold uppercase leading-none -tracking-[2px] text-black sm:text-5xl lg:text-6xl xl:text-[90px]">
                  {title}
                </h1>
              </div>

              <div className="relative mx-auto my-[60px] max-w-[1296px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                <img
                  src={imageSrc}
                  alt="hero-img"
                  width="1296"
                  height="550"
                  data-jos_animation="zoom-in-down"
                  className="h-auto w-full"
                />
              </div>

              <div className="flex flex-col items-start justify-between gap-x-[200px] xl:flex-row xl:items-center">
                <p className="text-2xl font-semibold text-[#2C2C2C] xl:max-w-[665px]">
                  {description}
                </p>
                <div className="mb-3 flex flex-wrap gap-6">
                  {ctaPrimary && (
                    <Button variant="primary" size="large" href={ctaPrimary.href}>
                      {ctaPrimary.text}
                    </Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="outline" size="large" href={ctaSecondary.href}>
                      {ctaSecondary.text}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
