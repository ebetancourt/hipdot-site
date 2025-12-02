import React from 'react';

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
            <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-20">
              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-7">
                {/* Footer Widget Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Primary Pages
                </div>
                {/* Footer Navbar */}
                <ul className="flex flex-col gap-y-[10px] capitalize">
                  <li>
                    <a href="index.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Home</a>
                  </li>
                  <li>
                    <a href="about.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="services.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Services</a>
                  </li>
                  <li>
                    <a href="pricing.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">pricing</a>
                  </li>
                  <li>
                    <a href="contact.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Contact</a>
                  </li>
                </ul>
              </div>
              {/* Footer Widget Item */}

              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Learn
                </div>
                {/* Footer Title */}

                {/* Footer Navbar */}
                <ul className="flex flex-col gap-y-[10px] capitalize">
                  <li>
                    <a href="blog.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Masco Blog</a>
                  </li>
                  <li>
                    <a href="index-6.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Cold Email</a>
                  </li>
                  <li>
                    <a href="index-2.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Prospecting Podcast</a>
                  </li>
                  <li>
                    <a href="index-14.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Follow-Up Strategy</a>
                  </li>
                  <li>
                    <a href="index-4.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Email Analyzer</a>
                  </li>
                </ul>
              </div>
              {/* Footer Widget Item*/}

              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Utility pages
                </div>
                {/* Footer Title */}

                {/* Footer Navbar */}
                <ul className="flex flex-col gap-y-[10px] capitalize">
                  <li>
                    <a href="signup.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Signup</a>
                  </li>
                  <li>
                    <a href="login.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Login</a>
                  </li>
                  <li>
                    <a href="error-404.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">404 Not found</a>
                  </li>
                  <li>
                    <a href="reset-password.html" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Password Reset</a>
                  </li>
                </ul>
              </div>
              {/* Footer Widget Item*/}

              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Resources
                </div>
                {/* Footer Title */}

                {/* Footer Navbar */}
                <ul className="flex flex-col gap-y-[10px] capitalize">
                  <li>
                    <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Support</a>
                  </li>
                  <li>
                    <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Privacy policy</a>
                  </li>
                  <li>
                    <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Strategic finance</a>
                  </li>
                  <li>
                    <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] underline-offset-4 transition-all duration-300 ease-linear hover:underline">Video guide</a>
                  </li>
                </ul>
              </div>
              {/* Footer Widget Item */}
              {/* Footer Widget Item */}
              <div className="flex flex-col gap-y-6">
                {/* Footer Title */}
                <div className="text-xl font-semibold capitalize text-black">
                  Community
                </div>
                {/* Footer Title */}

                {/* Footer Social Link */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="github">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.discord.com/" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="discord">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                  <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-[#EAEDF0] text-sm text-black transition-all duration-300 hover:bg-[#0000FF] hover:text-white" aria-label="tiktok">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
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
              <a href="index.html" className="">
                <img src="/assets/img/logo-dark.png" alt="Masco" width="109" height="24" />
              </a>
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
