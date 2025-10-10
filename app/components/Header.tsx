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
    ai: Service[];
  };
}

export default function Header({ onContactClick, categorizedServices }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('cloud');
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Check if we're on a service page
  const isServicePage = pathname.startsWith('/services/');

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
    return (
      <a href={href} onClick={handleClick} className={`px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#FBB900] hover:bg-gray-800 rounded-lg transition-all ${mobile ? 'block' : ''}`}>
        {children}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>

            </div>
            <span className="text-xl font-bold text-[#FBB900]">
              CKempt
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>

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

              {/* Services Mega Menu with Tabs */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-[750px] max-w-[90vw]"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  {/* Dropdown Card */}
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Tabs - Screenshot Style */}
                    <div className="bg-gray-50 px-5 pt-4 pb-1">
                      <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
                        {[
                          { key: 'cloud', label: 'Cloud Services' },
                          { key: 'devops', label: 'DevOps & Automation' },
                          { key: 'ai', label: 'AI' }
                        ].map((tab) => (
                          <button
                            key={tab.key}
                            onClick={() => setActiveServiceTab(tab.key)}
                            onMouseEnter={() => setActiveServiceTab(tab.key)}
                            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                              activeServiceTab === tab.key
                                ? 'bg-[#FBB900] text-black'
                                : 'bg-white text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tab Content - Grid of Services */}
                    <div className="p-5 max-h-[320px] overflow-y-auto">
                      <div className="grid grid-cols-3 gap-3">
                        {categorizedServices[activeServiceTab as keyof typeof categorizedServices]?.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-[#FBB900] hover:shadow-md transition-all duration-300"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {/* Icon and Title */}
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                <div className="text-[#FBB900] scale-75">
                                  {service.icon}
                                </div>
                              </div>
                              <h4 className="text-xs font-semibold text-gray-900 group-hover:text-[#FBB900] transition-colors line-clamp-1">
                                {service.title}
                              </h4>
                            </div>
                            
                            {/* Description */}
                            <p className="text-[10px] text-gray-500 leading-tight line-clamp-2">
                              {service.excerpt}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA Cards */}
                    <div className="bg-gray-50 px-5 py-4 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-3">
                        {/* Blogs Card */}
                        <div className="bg-white rounded-lg p-3 flex gap-2 hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 mb-1">Blogs</h4>
                            <p className="text-[10px] text-gray-600 leading-tight mb-1.5">
                              Latest insights and tips.
                            </p>
                            <a
                              href="/blogs"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="text-[10px] text-[#FBB900] font-semibold hover:text-[#e5a800] transition-colors"
                            >
                              Read More
                            </a>
                          </div>
                        </div>

                        {/* Success Stories Card */}
                        <div className="bg-white rounded-lg p-3 flex gap-2 hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 mb-1">Success Stories</h4>
                            <p className="text-[10px] text-gray-600 leading-tight mb-1.5">
                              Client success stories.
                            </p>
                            <Link
                              href="/#testimonials"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="text-[10px] text-[#FBB900] font-semibold hover:text-[#e5a800] transition-colors"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>

                        {/* Ask the Experts Card */}
                        <div className="bg-white rounded-lg p-3 flex gap-2 hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 mb-1">Ask Experts</h4>
                            <p className="text-[10px] text-gray-600 leading-tight mb-1.5">
                              Get personalized help.
                            </p>
                            <button
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                onContactClick();
                              }}
                              className="text-[10px] text-[#FBB900] font-semibold hover:text-[#e5a800] transition-colors"
                            >
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="#testimonials">Testimonials</NavLink>
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
        {isMobileMenuOpen && (
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
        )}
      </div>
    </nav>
  );
}
