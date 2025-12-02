import React from 'react';

export default function Header() {
  return (
    <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="container-default">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <a href="index.html" className="">
            <img src="/assets/img/logo-dark.png" alt="Masco" width="109" height="24" />
          </a>
          {/* Header Logo */}

          {/* Header Navigation */}
          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Demo <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="sub-menu" id="submenu-1">
                    <li className="sub-menu--item">
                      <a href="index.html">Digital agency</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-2.html">Chat software</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-3.html">Fitness App</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-4.html">Online Courses</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-5.html">SEO Agency</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-6.html">Cold Email</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-7.html">Web Hosting</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-8.html">Startup</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-9.html">Tracking Software</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-10.html">AI Writing Tool</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-11.html">Website Builder</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-12.html">AI Photo Editor</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-13.html">initial coin offering (ICO)</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-14.html">AI Content Generator</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="index-15.html">IT Service</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link-item">About</a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Services
                    <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <a href="services.html">Services</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Pages <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="sub-menu" id="submenu-3">
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">blogs <i className="fa-solid fa-angle-right"></i></a>
                      <ul className="sub-menu shape-none" id="submenu-4">
                        <li className="sub-menu--item">
                          <a href="blog.html">blogs</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">Team
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-5">
                        <li className="sub-menu--item">
                          <a href="teams.html">Teams</a>
                        </li>

                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">FAQ
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-6">
                        <li className="sub-menu--item">
                          <a href="faq.html">FAQ-1</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="faq-2.html">FAQ-2</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="faq-3.html">FAQ-3</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="faq-4.html">FAQ-4</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">Portfolio
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-7">
                        <li className="sub-menu--item">
                          <a href="portfolio.html">Portfolio Classic</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-2.html">Portfolio Masonry</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-3.html">Portfolio Modern</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-4.html">Portfolio Minimal</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">Pricing
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-8">
                        <li className="sub-menu--item">
                          <a href="pricing.html">Pricing-1</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="pricing-2.html">Pricing-2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">Careers
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-9">
                        <li className="sub-menu--item">
                          <a href="careers.html">Career</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="career-details.html">Career Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">Utilities
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-10">
                        <li className="sub-menu--item">
                          <a href="login.html">Login</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="signup.html">Signup</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="error-404.html">Error 404</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">Contact
                    <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <ul className="sub-menu" id="submenu-11">
                    <li className="sub-menu--item">
                      <a href="contact.html">Contact-1</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="contact-2.html">Contact-2</a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="contact-3.html">Contact-3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/* Header Navigation */}

          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <a href="login.html" className="btn-text hidden text-white hover:text-ColorBlue sm:inline-block">Login</a>
            <a href="signup.html" className="btn is-blue is-transparent btn-animation group hidden rounded-[3px] sm:inline-block"><span>Sign up free</span></a>
            {/* Responsive Offcanvas Menu Button */}
            <div className="block lg:hidden">
              <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
}
