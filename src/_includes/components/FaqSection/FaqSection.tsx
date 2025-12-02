import React from 'react';
import AccordionItem from '../AccordionItem/index.ts';

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  faqs: Faq[];
}

export default function FaqSection({ title, faqs }: FaqSectionProps) {
  return (
    <section className="section-faq">
      <div className="section-space">
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

          <div className="jos">
            <ul className="-mb-[60px]">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isActive={index === 0}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
