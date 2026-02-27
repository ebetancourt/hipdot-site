import React from 'react';
import BrandLogo from '../BrandLogo/index.ts';

interface Brand {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ClientLogosSectionProps {
  title?: string;
  brands: Brand[];
  columns?: 3 | 4 | 5 | 6;
  darkMode?: boolean;
}

export default function ClientLogosSection({
  title = 'Brands You May Recognize',
  brands,
  columns = 6,
  darkMode = true,
}: ClientLogosSectionProps) {
  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const titleColor = darkMode ? 'text-white' : 'text-black';
  const itemBgColor = darkMode ? 'bg-black' : 'bg-gray-50';

  const gridCols = {
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-2 md:grid-cols-4',
    5: 'sm:grid-cols-3 lg:grid-cols-5',
    6: 'sm:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <section className={`${bgColor} py-16 lg:py-20`}>
      <div className="container-default">
        {title && (
          <h2 className={`mb-12 text-center font-Syne text-4xl font-medium ${titleColor} sm:text-5xl lg:mb-16 lg:text-6xl`}>
            {title}
          </h2>
        )}

        <div className={`grid grid-cols-2 gap-0 ${gridCols[columns]}`}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-8 transition-all duration-300 ${itemBgColor} hover:bg-opacity-80`}
            >
              <div className="opacity-60 transition-opacity duration-300 hover:opacity-100">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width || 130}
                  height={brand.height || 65}
                  className="h-auto max-h-16 w-auto max-w-[130px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
