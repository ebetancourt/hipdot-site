import React from 'react';
import Header from '../_includes/components/Header/index.ts';
import Footer from '../_includes/components/Footer/index.ts';
import Hero from '../_includes/components/Hero/index.ts';
import HorizontalLine from '../_includes/components/HorizontalLine/index.ts';
import StatsSection from '../_includes/components/StatsSection/index.ts';
import ServicesSection from '../_includes/components/ServicesSection/index.ts';
import TwoColumnContent from '../_includes/components/TwoColumnContent/index.ts';
import ProcessSection from '../_includes/components/ProcessSection/index.ts';
import TeamSection from '../_includes/components/TeamSection/index.ts';
import FaqSection from '../_includes/components/FaqSection/index.ts';
import CtaSection from '../_includes/components/CtaSection/index.ts';

interface HomePageData {
  homepage: any;
}

export default function Home({ homepage }: HomePageData) {
  return (
    <>
      <Header />

      <main className="main-wrapper relative overflow-hidden">
        <Hero {...homepage.hero} />

        <HorizontalLine bgColor="bg-ColorBlack" />

        <StatsSection title={homepage.stats.title} stats={homepage.stats.items} />

        <ServicesSection title={homepage.services.title} services={homepage.services.items} />

        <section className="section-content">
          <div className="section-space">
            <div className="container-default">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                <TwoColumnContent {...homepage.aboutUs} />
                <TwoColumnContent {...homepage.whyChooseUs} />
              </div>
            </div>
          </div>
        </section>

        <ProcessSection title={homepage.process.title} steps={homepage.process.steps} />

        <TeamSection title={homepage.team.title} members={homepage.team.members} />

        <FaqSection title={homepage.faq.title} faqs={homepage.faq.items} />

        <CtaSection {...homepage.cta} />
      </main>

      <Footer />
    </>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "HipDot Media",
  description: "Smart Solutions for a Modern Era",
  permalink: "/index.html",
};
