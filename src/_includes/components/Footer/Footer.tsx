import React from 'react';
import Logo from '../Logo/index.ts';
import SocialLink from '../SocialLink/index.ts';
import FooterLinkList from '../FooterLinkList/index.ts';

interface FooterProps {
  year?: number;
}

export default function Footer({ year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="section-footer">
      {/* Footer Area Center */}
      <div className="bg-white">
        {/* Footer Center Spacing */}
        <div className="py-[60px] lg:py-20">
          {/* Section Container */}
          <div className="container-default">
            {/* Footer Widget List */}
            <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-20">
              <FooterLinkList
                title="Navigate"
                links={[
                  { label: 'Home', href: '#hero' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Our Process', href: '#process' },
                  { label: 'Contact', href: '#contact' }
                ]}
              />

              <FooterLinkList
                title="Services"
                links={[
                  { label: 'Digital Strategy', href: '#services' },
                  { label: 'Web Development', href: '#services' },
                  { label: 'E-Commerce', href: '#services' },
                  { label: 'Automation & AI', href: '#services' }
                ]}
              />

              <FooterLinkList
                title="Resources"
                links={[
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms & Conditions', href: '#' }
                ]}
              />

              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Connect
                </div>
                {/* Footer Title */}

                {/* Footer Social Link */}
                <div className="flex flex-wrap gap-4">
                  <SocialLink platform="twitter" url="https://twitter.com" iconClass="fa-brands fa-x-twitter" />
                  <SocialLink platform="linkedin" url="https://www.linkedin.com/" iconClass="fa-brands fa-linkedin-in" />
                  <SocialLink platform="instagram" url="https://www.instagram.com/" iconClass="fa-brands fa-instagram" />
                  <SocialLink platform="github" url="https://www.github.com/" iconClass="fa-brands fa-github" />
                </div>
              </div>
              {/* Footer Widget Item */}
            </div>
            {/* Footer Widget List */}
          </div>
          {/* Section Container */}
        </div>
        {/* Footer Center Spacing */}
      </div>
      {/* Footer Area Center */}
      <div className="horizontal-line -mt-px bg-black"></div>
      {/* Footer Bottom */}
      <div className="bg-white text-black">
        {/* Footer Bottom Spacing */}
        <div className="py-10">
          {/* Section Container */}
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
              {/* Footer Logo */}
              <Logo href="#hero" variant="dark" />
              {/* Footer Logo */}
              <div className="text-center">
                &copy; {year} HipDot Media, Inc. All Rights Reserved.
              </div>
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Footer Bottom Spacing */}
      </div>
      {/* Footer Bottom */}
    </footer>
  );
}
