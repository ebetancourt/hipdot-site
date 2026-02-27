import React from 'react';
import Header from '../_includes/components/Header/index.ts';
import Footer from '../_includes/components/Footer/index.ts';
import Hero from '../_includes/components/Hero/index.ts';
import HorizontalLine from '../_includes/components/HorizontalLine/index.ts';
import ClientLogosSection from '../_includes/components/ClientLogosSection/index.ts';
import StatsSection from '../_includes/components/StatsSection/index.ts';
import ServicesSection from '../_includes/components/ServicesSection/index.ts';
import TwoColumnContent from '../_includes/components/TwoColumnContent/index.ts';
import SolutionCardsSection from '../_includes/components/SolutionCardsSection/index.ts';
import SimpleCTA from '../_includes/components/SimpleCTA/index.ts';
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
        <div id="hero">
          <Hero {...homepage.hero} />
        </div>

        <ClientLogosSection
          title="Trusted by industry leaders"
          brands={homepage.clientLogos}
          columns={5}
          darkMode={false}
        />

        <HorizontalLine bgColor="bg-ColorBlack" />

        <StatsSection title={homepage.stats.title} stats={homepage.stats.items} />

        <div id="services">
          <ServicesSection title={homepage.services.title} services={homepage.services.items} />
        </div>

        <section id="about" className="section-content">
          <div className="section-space">
            <div className="container-default">
              <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                <TwoColumnContent {...homepage.aboutUs} />
                <TwoColumnContent {...homepage.whyChooseUs} />
              </div>
            </div>
          </div>
        </section>

        <div id="solutions">
          <SolutionCardsSection
            title={homepage.solutions.title}
            subtitle={homepage.solutions.subtitle}
            solutions={homepage.solutions.items}
            columns={2}
          />
        </div>

        <SimpleCTA
          heading="Discover how digital strategy can transform your business"
          buttonText="Let's Talk"
          buttonHref="#contact"
          backgroundType="gradient"
        />

        <div id="process">
          <ProcessSection title={homepage.process.title} steps={homepage.process.steps} />
        </div>

        <div id="team">
          <TeamSection title={homepage.team.title} members={homepage.team.members} />
        </div>

        <div id="faq">
          <FaqSection title={homepage.faq.title} faqs={homepage.faq.items} />
        </div>

        <div id="contact">
          <CtaSection {...homepage.cta} />
        </div>
      </main>

      <Footer />
    </>
  );
}

export const data = {
  layout: "layouts/base.njk",
  title: "HipDot Media",
  description: "Digital Consulting to Drive Strategic Growth",
  permalink: "/index.html",
};
