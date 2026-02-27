import React from 'react';
import StatCard from '../StatCard/index.ts';

interface Stat {
  number: number;
  suffix: string;
  description: string;
}

interface StatsSectionProps {
  title: string;
  stats: Stat[];
}

export default function StatsSection({ title, stats }: StatsSectionProps) {
  return (
    <section className="section-fan-fact">
      <div className="section-space">
        <div className="container-default">
          <div className="jos mb-[60px]">
            <div className="mx-auto max-w-[843px]">
              <div className="mb-5">
                <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                description={stat.description}
                delay={index * 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
