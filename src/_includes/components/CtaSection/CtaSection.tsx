import React from 'react';
import Button from '../Button/index.ts';
import FormField from '../FormField/index.ts';
import BrandLogo from '../BrandLogo/index.ts';

interface Brand {
  src: string;
  alt: string;
}

interface CtaSectionProps {
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  brands: Brand[];
}

export default function CtaSection({ heading, description, ctaText, ctaHref, brands }: CtaSectionProps) {
  return (
    <section className="section-cta">
      <div className="bg-[#0000FF]">
        <div className="section-space">
          <div className="container-default">
            <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_minmax(0,_0.7fr)] xl:gap-20">
              <div className="text-white">
                <div className="jos" data-jos_animation="fade-left">
                  <div className="max-w-[789px]">
                    <div className="mb-5">
                      <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                        {heading}
                      </h2>
                    </div>
                    <p className="mb-0 max-w-[636px] text-lg leading-[1.33] -tracking-[0.5px] md:text-xl xl:text-2xl">
                      {description}
                    </p>

                    <div className="mt-8 lg:mt-[50px]">
                      <Button variant="outlineWhite" size="large" href={ctaHref}>
                        {ctaText}
                      </Button>
                    </div>

                    <p className="mb-8 mt-16 text-sm md:mt-20 lg:mb-[50px] lg:mt-[100px] xl:mt-[120px]">
                      We have collaborated with several esteemed organizations.
                    </p>
                    <div className="flex flex-wrap gap-x-[60px] gap-y-8">
                      {brands.map((brand, index) => (
                        <BrandLogo
                          key={index}
                          src={brand.src}
                          alt={brand.alt}
                          maxWidth="170px"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="jos rounded-[5px] bg-white dark:bg-dark-light p-10" data-jos_animation="fade-right">
                <form action="#" method="post" className="flex flex-col gap-y-6">
                  <FormField
                    type="text"
                    label="Your name"
                    id="cta-name"
                    placeholder="Enter your full name"
                    required
                  />
                  <FormField
                    type="email"
                    label="Email address"
                    id="cta-email"
                    placeholder="Enter your email"
                    required
                  />
                  <FormField
                    type="select"
                    label="Email address"
                    id="cta-service"
                    placeholder="Select a service"
                    required
                    options={[
                      { value: 'ui/ux design', label: 'ui/ux design' },
                      { value: 'web development', label: 'web development' },
                      { value: 'cloud hosting', label: 'cloud hosting' }
                    ]}
                  />
                  <FormField
                    type="textarea"
                    label="Write your message"
                    id="cta-message"
                    placeholder="Write us your question here..."
                    required
                  />

                  <button
                    type="submit"
                    className="btn is-large rounded-[3px] border-[#0000FF] bg-[#0000FF] text-white hover:bg-white hover:text-[#0000FF]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
