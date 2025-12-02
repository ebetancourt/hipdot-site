import React from 'react';
import ServiceCard from './ServiceCard.tsx';

interface Service {
  title: string;
  description: string;
  link: string;
}

interface ServicesSectionProps {
  title: string;
  services: Service[];
}

export default function ServicesSection({ title, services }: ServicesSectionProps) {
  return (
    <section className="section-service">
      <div className="bg-black">
        <div className="section-space">
          <div className="container-default">
            <div className="jos mb-[60px]">
              <div className="max-w-[789px]">
                <div className="mb-5">
                  <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
