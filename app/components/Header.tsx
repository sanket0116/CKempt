'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Service {
  slug: string;
  title: string;
  icon: React.ReactNode;
  excerpt: string;
}

interface HeaderProps {
  onContactClick: () => void;
  categorizedServices: {
    cloud: Service[];
    devops: Service[];
    kubernetes: Service[];
    ai: Service[];
  };
}

export default function Header({ onContactClick, categorizedServices }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('cloud');
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Check if we're on a service page or all-services page
  const isServicePage = pathname.startsWith('/services/') || pathname === '/all-services';
  const isCaseStudiesPage = pathname === '/case-studies';

  // Handle dropdown opening
  const handleDropdownOpen = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesDropdownOpen(true);
    setActiveServiceTab('cloud');
  };

  // Handle dropdown closing with delay
  const handleDropdownClose = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 300);
    setCloseTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Navigation link component that handles service page navigation
  const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => {
    const handleClick = () => {
      if (mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isServicePage) {
      // On service pages, navigate back to homepage with anchor
      const homeHref = href.startsWith('#') ? `/${href}` : href;
      return (
        <Link href={homeHref} onClick={handleClick} className={`px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition-all ${mobile ? 'block' : ''}`}>
          {children}
        </Link>
      );
    }

    if (isCaseStudiesPage) {
      // On case studies page, navigate to homepage for home link
      const homeHref = href === '#home' ? '/' : href;
      return (
        <Link href={homeHref} onClick={handleClick} className={`px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition-all ${mobile ? 'block' : ''}`}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} onClick={handleClick} className={`px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition-all ${mobile ? 'block' : ''}`}>
        {children}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <img
              src="/image/logo2.png"
              alt="Axiicore Logo"
              className="h-9 md:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-[#FBB900]">
              Axiicore
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            {/* <NavLink href="#about">About Us</NavLink> */}

            {/* Services Mega Menu */}
            <div
              className="relative services-dropdown"
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition-all flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>


              {/* Simple Modern Services Dropdown */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 z-50 w-72"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
                    <div className="p-2 space-y-1">
                      {/* Cloud Services */}
                      <Link
                        href="/services/category/cloud"
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#FBB900]/10 hover:to-[#FBB900]/5 transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#FBB900]/30 group-hover:to-[#FBB900]/20 transition-all duration-300 group-hover:shadow-md">
                          <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#FBB900] transition-colors">Cloud Services</h4>
                          <p className="text-xs text-gray-500">Migration & Infrastructure</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#FBB900] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      {/* DevOps Services */}
                      <Link
                        href="/services/category/devops"
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#FBB900]/10 hover:to-[#FBB900]/5 transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#FBB900]/30 group-hover:to-[#FBB900]/20 transition-all duration-300 group-hover:shadow-md">
                          <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#FBB900] transition-colors">DevOps Services</h4>
                          <p className="text-xs text-gray-500">CI/CD & Automation</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#FBB900] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      {/* Kubernetes Services */}
                      <Link
                        href="/services/category/kubernetes"
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#FBB900]/10 hover:to-[#FBB900]/5 transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#FBB900]/30 group-hover:to-[#FBB900]/20 transition-all duration-300 group-hover:shadow-md">
                          <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#FBB900] transition-colors">Kubernetes Services</h4>
                          <p className="text-xs text-gray-500">Orchestration & Scaling</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-[#FBB900] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/case-studies">Case Studies</NavLink>
            <button
              onClick={onContactClick}
              className="ml-2 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all shadow-md text-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#FBB900] transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {
          isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-2">
                <NavLink href="#home" mobile>Home</NavLink>
                <NavLink href="#about" mobile>About Us</NavLink>
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition"
                >
                  Services
                </a>
                <NavLink href="#testimonials" mobile>Testimonials</NavLink>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="mx-4 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all shadow-md text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )
        }
      </div >
    </nav >
  );
}
