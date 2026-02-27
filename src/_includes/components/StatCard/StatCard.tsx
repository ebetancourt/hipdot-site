import React from 'react';

interface StatCardProps {
  number: number;
  suffix: string;
  description: string;
  delay?: number;
}

export default function StatCard({ number, suffix, description, delay = 0 }: StatCardProps) {
  return (
    <div
      className="jos rounded-[10px] bg-white dark:bg-dark-light p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]"
      data-jos_delay={delay}
    >
      <div
        className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-[#00F] lg:text-7xl xl:text-[90px]"
        data-module="countup"
      >
        <span className="start-number text-black dark:text-white" data-countup-number={number}>
          {number}
        </span>
        {suffix}
      </div>
      <span className="text-lg text-black dark:text-white/80 lg:text-xl">{description}</span>
    </div>
  );
}
