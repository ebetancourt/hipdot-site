import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="jos">
      <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
        <div className="flex-1">
          <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">
            {title}
          </div>
          <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
            {description}
          </p>
        </div>
        <a
          href={link}
          className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden"
          aria-label={`Learn more about ${title}`}
        >
          <img
            src="/assets/img/icons/icon-white-top-right.svg"
            alt="icon-white-top-right"
            width="43"
            height="43"
            className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
          />
          <img
            src="/assets/img/icons/icon-blue-top-right.svg"
            alt="icon-blue-top-right"
            width="43"
            height="43"
            className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </a>
      </div>
    </div>
  );
}
