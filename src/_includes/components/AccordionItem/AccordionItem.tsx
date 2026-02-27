import React from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isActive?: boolean;
}

export default function AccordionItem({ question, answer, isActive = false }: AccordionItemProps) {
  return (
    <li className={`accordion-item ${isActive ? 'active' : ''} overflow-hidden border-b border-[#EAEDF0] dark:border-white/20 py-[60px] first:pt-0 last:border-b-0`}>
      <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black dark:text-white lg:text-[26px] xl:text-3xl xxl:text-[35px]">
        <button className="flex-1 text-left">
          {question}
        </button>
        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
          <span className="inline-block h-1 w-8 rounded-sm bg-black dark:bg-white lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
          <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black dark:bg-white lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
        </div>
      </div>
      <div className="accordion-body max-w-[898px] opacity-80">
        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] dark:text-white/70 md:text-xl xl:text-2xl">
          {answer}
        </p>
      </div>
    </li>
  );
}
