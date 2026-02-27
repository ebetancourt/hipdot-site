import React from 'react';
import Logo from '../Logo/index.ts';
import Button from '../Button/index.ts';

export default function Header() {
  return (
    <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="container-default">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <Logo href="#hero" variant="dark" />
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
                <li className="nav-item">
                  <a href="#about" className="nav-link-item">About</a>
                </li>
                <li className="nav-item">
                  <a href="#services" className="nav-link-item">Services</a>
                </li>
                <li className="nav-item">
                  <a href="#solutions" className="nav-link-item">Solutions</a>
                </li>
                <li className="nav-item">
                  <a href="#team" className="nav-link-item">Team</a>
                </li>
                <li className="nav-item">
                  <a href="#faq" className="nav-link-item">FAQ</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link-item">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Header Navigation */}

          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <Button variant="primary" href="#contact" className="hidden sm:inline-block">
              Get in Touch
            </Button>
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
