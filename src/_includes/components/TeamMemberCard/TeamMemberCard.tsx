import React from 'react';

interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  title: string;
  delay?: number;
}

export default function TeamMemberCard({ imageSrc, name, title, delay = 0 }: TeamMemberCardProps) {
  return (
    <div
      className="jos rounded-[5px] bg-[#2C2C2C] p-5"
      data-jos_animation="flip-left"
      data-jos_delay={delay}
    >
      <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
        <img
          src={imageSrc}
          alt={name}
          width="376"
          height="320"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="">
        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">
          {name}
        </div>
        <span className="text-xl text-white">{title}</span>
      </div>
    </div>
  );
}
