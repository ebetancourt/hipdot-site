import React from 'react';
import ProcessStep from '../ProcessStep/index.ts';

interface ProcessStepData {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  steps: ProcessStepData[];
}

export default function ProcessSection({ title, steps }: ProcessSectionProps) {
  return (
    <section className="section-work-process">
      <div className="pt-20 section-space-bottom">
        <div className="container-default">
          <div className="jos mb-[60px]">
            <div className="mx-auto max-w-[843px]">
              <div className="mb-5">
                <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden h-[3px] w-full overflow-hidden rounded-[50px] bg-[#EAEDF0] lg:block"></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-[30px]">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
