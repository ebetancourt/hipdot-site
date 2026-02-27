import React from 'react';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterLinkListProps {
  title: string;
  links: FooterLink[];
}

export default function FooterLinkList({ title, links }: FooterLinkListProps) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-xl font-semibold capitalize text-black dark:text-white">
        {title}
      </div>
      <ul className="flex flex-col gap-y-[10px] capitalize">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="text-[#2C2C2C] dark:text-white/70 underline-offset-4 transition-all duration-300 ease-linear hover:underline"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
