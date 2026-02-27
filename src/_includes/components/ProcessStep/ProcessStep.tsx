import React from 'react';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({ stepNumber, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <div className="jos group relative lg:pt-[30px]" data-jos_delay={delay}>
      <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
        {stepNumber}. {title}
      </div>
      <p className="m-0 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
        {description}
      </p>
      <div className="absolute -top-[3px] left-0 hidden h-[3px] w-full scale-x-0 overflow-hidden rounded-[50px] bg-[#002D62] transition-all duration-300 group-hover:scale-x-100 lg:block"></div>
    </div>
  );
}
