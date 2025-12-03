import React from 'react';

interface SolutionCard {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  icon?: 'check' | 'question';
}

interface SolutionCardsSectionProps {
  title?: string;
  subtitle?: string;
  solutions: SolutionCard[];
  columns?: 2 | 3 | 4;
}

export default function SolutionCardsSection({
  title,
  subtitle,
  solutions,
  columns = 2,
}: SolutionCardsSectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const renderIcon = (iconType?: string) => {
    if (iconType === 'check') {
      return (
        <svg
          className="h-12 w-12 text-[#3e32da]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (iconType === 'question') {
      return (
        <svg
          className="h-12 w-12 text-[#3e32da]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-default">
        {(title || subtitle) && (
          <div className="mb-12 text-center lg:mb-16">
            {title && (
              <h2 className="mb-4 font-Syne text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-lg text-gray-600 lg:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#3e32da] hover:shadow-lg"
            >
              {solution.icon && (
                <div className="mb-6">
                  {renderIcon(solution.icon)}
                </div>
              )}

              <h3 className="mb-4 font-Syne text-2xl font-semibold text-black lg:text-3xl">
                {solution.title}
              </h3>

              <p className="mb-6 text-base leading-relaxed text-gray-600 lg:text-lg">
                {solution.description}
              </p>

              {solution.buttonText && solution.buttonHref && (
                <a
                  href={solution.buttonHref}
                  className="inline-block rounded-lg border-2 border-[#3e32da] bg-transparent px-6 py-2.5 text-sm font-semibold text-[#3e32da] transition-all duration-300 hover:bg-[#3e32da] hover:text-white"
                >
                  {solution.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
