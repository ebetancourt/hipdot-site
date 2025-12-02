import React from 'react';
import TeamMemberCard from '../TeamMemberCard/index.ts';

interface TeamMember {
  imageSrc: string;
  name: string;
  title: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

export default function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="section-team">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  imageSrc={member.imageSrc}
                  name={member.name}
                  title={member.title}
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
