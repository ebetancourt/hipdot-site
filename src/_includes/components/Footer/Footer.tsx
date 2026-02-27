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
      <div className="bg-white dark:bg-dark">
        {/* Footer Center Spacing */}
        <div className="py-[60px] lg:py-20">
          {/* Section Container */}
          <div className="container-default">
            {/* Footer Widget List */}
            <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-20">
              <FooterLinkList
                title="Primary Pages"
                links={[
                  { label: 'Home', href: 'index.html' },
                  { label: 'About Us', href: 'about.html' },
                  { label: 'Services', href: 'services.html' },
                  { label: 'pricing', href: 'pricing.html' },
                  { label: 'Contact', href: 'contact.html' }
                ]}
              />

              <FooterLinkList
                title="Learn"
                links={[
                  { label: 'HipDot Blog', href: 'blog.html' },
                  { label: 'Cold Email', href: 'index-6.html' },
                  { label: 'Prospecting Podcast', href: 'index-2.html' },
                  { label: 'Follow-Up Strategy', href: 'index-14.html' },
                  { label: 'Email Analyzer', href: 'index-4.html' }
                ]}
              />

              <FooterLinkList
                title="Utility pages"
                links={[
                  { label: 'Signup', href: 'signup.html' },
                  { label: 'Login', href: 'login.html' },
                  { label: '404 Not found', href: 'error-404.html' },
                  { label: 'Password Reset', href: 'reset-password.html' }
                ]}
              />

              <FooterLinkList
                title="Resources"
                links={[
                  { label: 'Support', href: 'https://www.example.com/', external: true },
                  { label: 'Privacy policy', href: 'https://www.example.com/', external: true },
                  { label: 'Terms & Conditions', href: 'https://www.example.com/', external: true },
                  { label: 'Strategic finance', href: 'https://www.example.com/', external: true },
                  { label: 'Video guide', href: 'https://www.example.com/', external: true }
                ]}
              />
              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Community
                </div>
                {/* Footer Title */}

                {/* Footer Social Link */}
                <div className="flex flex-wrap gap-4">
                  <SocialLink platform="twitter" url="https://twitter.com" iconClass="fa-brands fa-x-twitter" />
                  <SocialLink platform="facebook" url="https://www.facebook.com/" iconClass="fa-brands fa-facebook-f" />
                  <SocialLink platform="instagram" url="https://www.instagram.com/" iconClass="fa-brands fa-instagram" />
                  <SocialLink platform="github" url="https://www.github.com/" iconClass="fa-brands fa-github" />
                  <SocialLink platform="discord" url="https://www.discord.com/" iconClass="fa-brands fa-discord" />
                  <SocialLink platform="tiktok" url="https://www.tiktok.com/" iconClass="fa-brands fa-tiktok" />
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
      <div className="bg-white dark:bg-dark text-black dark:text-white">
        {/* Footer Bottom Spacing */}
        <div className="py-10">
          {/* Section Container */}
          <div className="container-default">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-between">
              {/* Footer Logo */}
              <Logo href="index.html" variant="dark" />
              {/* Footer Logo */}
              <div className="text-center">
                &copy; Copyright {year}, All Rights Reserved by Hip Dot Media, Inc.
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
