'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import WhyPartner from './components/WhyPartner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Services data with categorized services for header tabs
const categorizedServices = {
  cloud: [
    {
      slug: 'cloud-migration',
      title: 'Cloud Migration Services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      excerpt: 'Seamlessly migrate applications to the cloud'
    },
    {
      slug: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Build scalable cloud infrastructure'
    },
    {
      slug: 'cloud-monitoring',
      title: 'Cloud Monitoring',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      excerpt: 'Monitor cloud performance'
    }
  ],
  devops: [
    {
      slug: 'ci-cd-pipeline',
      title: 'CI/CD Pipeline',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Automate software delivery'
    },
    {
      slug: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      excerpt: 'Manage infrastructure with code'
    },
    {
      slug: 'devops-consulting',
      title: 'DevOps Consulting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      excerpt: 'Strategic DevOps guidance'
    }
  ],
  'automation-kubernetes': [
    {
      slug: 'workflow-automation',
      title: 'Workflow Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      excerpt: 'Streamline repetitive tasks'
    },
    {
      slug: 'kubernetes-orchestration',
      title: 'Kubernetes Orchestration',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Deploy containerized apps'
    },
    {
      slug: 'container-management',
      title: 'Container Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      excerpt: 'Manage container lifecycle'
    },
    {
      slug: 'automation-tools',
      title: 'Automation Tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      excerpt: 'Integrate automation tools'
    },
    {
      slug: 'kubernetes-security',
      title: 'Kubernetes Security',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      excerpt: 'Secure Kubernetes clusters'
    },
    {
      slug: 'process-optimization',
      title: 'Process Optimization',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Optimize business processes'
    }
  ]
};

// Services data for main page
const services = [
  {
    slug: 'modernization-migration',
    title: 'Cloud Modernization & Migration',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    excerpt: 'Seamlessly migrate your applications and data to the cloud with zero downtime and optimized performance.'
  },
  {
    slug: 'cloud-management',
    title: 'Cloud Management & Operations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    excerpt: 'Comprehensive cloud management solutions to optimize performance, security, and cost efficiency.'
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security & Compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    excerpt: 'Enterprise-grade security solutions to protect your cloud assets and ensure regulatory compliance.'
  },
  {
    slug: 'cloud-consulting',
    title: 'Cloud Consulting & Strategy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    excerpt: 'Strategic guidance and expert consultation to maximize your cloud investment and business outcomes.'
  },
  {
    slug: 'devops-automation',
    title: 'DevOps & Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    excerpt: 'Streamline your development and operations with modern DevOps practices and automation tools.'
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics Platform',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    excerpt: 'Build powerful data platforms and analytics solutions to drive data-driven decision making.'
  }
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('cloud');
  const [uploadCloudAnimation, setUploadCloudAnimation] = useState<any>(null);
  const [serverAnimation, setServerAnimation] = useState<any>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load hero animation from public so you can replace the JSON easily
    fetch('/cloud-animation.json')
      .then((r) => r.json())
      .then((json) => setUploadCloudAnimation(json))
      .catch(() => setUploadCloudAnimation(null));

    // Keep server animation as dynamic import
    import('@/public/server-animation.json').then((data) => setServerAnimation(data.default));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isServicesDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen]);

  // Scroll-reveal effect for text blocks
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('visible');
          } else {
            target.classList.remove('visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
    }, 300); // 300ms delay before closing
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FBB900] to-[#e5a800] bg-clip-text text-transparent">
                Cloud Kempt
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <a href="#home" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all">
                Home
              </a>

              {/* Services Mega Menu */}
              <div
                className="relative services-dropdown"
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all flex items-center gap-1">
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Services Mega Menu with Tabs */}
                {isServicesDropdownOpen && (
                  <div 
                    className="fixed left-0 right-0 top-16 z-50"
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    {/* Overlay with 70% opacity */}
                    <div className="absolute inset-0 bg-white shadow-2xl border-t border-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
                    </div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h3>
                        <p className="text-sm text-gray-600">Explore our comprehensive cloud solutions</p>
                      </div>

                      {/* Tabs */}
                      <div className="flex justify-center gap-2 mb-8 border-b border-gray-200 pb-4">
                        {[
                          { key: 'cloud', label: 'Cloud Services' },
                          { key: 'devops', label: 'DevOps' },
                          { key: 'automation-kubernetes', label: 'Automation & Kubernetes' }
                        ].map((tab) => (
                          <button
                            key={tab.key}
                            onClick={() => setActiveServiceTab(tab.key)}
                            onMouseEnter={() => setActiveServiceTab(tab.key)}
                            className={`px-6 py-2 text-sm font-semibold transition-all duration-200 border-b-2 ${
                              activeServiceTab === tab.key
                                ? 'text-[#FBB900] border-[#FBB900]'
                                : 'text-gray-600 border-transparent hover:text-[#FBB900] hover:border-gray-300'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content - Grid of Services */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
                        {categorizedServices[activeServiceTab as keyof typeof categorizedServices]?.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group bg-white rounded-lg p-5 border border-gray-200 hover:border-[#FBB900] hover:shadow-lg transition-all duration-300"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-[#FBB900]">
                                {service.icon}
                              </div>
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#FBB900] transition-colors">
                              {service.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {service.excerpt}
                            </p>
                          </Link>
                        ))}
                      </div>

                      {/* Call to Action */}
                      <div className="text-center pt-4 border-t border-gray-100">
                        <button
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                            setIsContactOpen(true);
                          }}
                          className="inline-flex items-center gap-2 bg-[#FBB900] text-black px-6 py-2.5 rounded-full font-semibold hover:bg-[#e5a800] transition-all shadow-md hover:shadow-lg"
                        >
                          <span>Talk to Our Experts</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all">
                Features
              </a>
              <a href="#testimonials" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all">
                Testimonials
              </a>
              <button
                onClick={() => setIsContactOpen(true)}
                className="ml-2 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                <a 
                  href="#home" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all"
                >
                  Home
                </a>

                {/* Mobile Services Menu */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-700 mb-2">Services</div>
                  <div className="grid grid-cols-1 gap-1 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FBB900]/5 transition-colors group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FBB900]/15 to-[#FBB900]/5 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-[#FBB900] w-4 h-4">
                            {service.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 group-hover:text-[#FBB900]">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-600">
                            {service.excerpt}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <a 
                  href="#features" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all"
                >
                  Features
                </a>
                <a 
                  href="#testimonials" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#FBB900] hover:bg-[#FBB900]/5 rounded-lg transition-all"
                >
                  Testimonials
                </a>
                <button 
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-2 mx-4 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black text-sm font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 reveal" data-delay="0">
                Transform Your Business with Cloud Excellence
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 reveal" data-delay="100">
                Scalable, Secure, and Future-Ready Solutions
              </h2>
              <p className="text-base text-gray-600 mb-6 max-w-xl reveal" data-delay="200">
                Partner with Cloud Kempt to accelerate your digital transformation. We deliver enterprise-grade cloud infrastructure, migration services, and ongoing support tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setIsContactOpen(true)} className="bg-[#FBB900] text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#FBB900]/90 transition shadow-md hover:shadow-lg">
                  Get Started
                </button>
                <button className="bg-white text-[#FBB900] px-6 py-2.5 rounded-full text-sm font-semibold border-2 border-[#FBB900] hover:bg-[#FBB900]/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              {uploadCloudAnimation && <Lottie animationData={uploadCloudAnimation} loop={true} className="w-64 h-64 md:w-80 md:h-80" />}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
              Services
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Explore our cloud services designed to accelerate modernization, improve reliability, and optimize costs.
            </p>
          </div>

          {/* Services Preview Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FBB900]/15 to-[#FBB900]/5 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                  <div className="text-[#FBB900]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FBB900]">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.excerpt}</p>
                <div className="text-sm font-semibold text-[#FBB900]">Learn more →</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsServicesDropdownOpen(true)}
              className="bg-[#FBB900] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FBB900]/90 transition shadow-md hover:shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyPartner 
        title="Why Partner with Cloud Kempt?"
        subtitle="Experience the difference of working with cloud experts who prioritize your success, security, and scalability."
        benefits={[
          { 
            title: "High Reliability", 
            description: "Industry-leading 99.99% uptime guarantee with multi-region redundancy and automatic failover protection.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          { 
            title: "Enterprise Security", 
            description: "Bank-level encryption, SOC 2 compliance, and advanced threat protection to safeguard your critical data.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )
          },
          { 
            title: "Global Infrastructure", 
            description: "Lightning-fast performance with edge locations in 60+ countries and intelligent traffic routing.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          { 
            title: "Flexible Architecture", 
            description: "Hybrid and multi-cloud solutions designed to scale with your business growth and evolving needs.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            )
          },
          { 
            title: "Cost Efficiency", 
            description: "Optimize your cloud spending with intelligent resource allocation and transparent, predictable pricing.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          { 
            title: "Expert Support", 
            description: "24/7 access to certified cloud architects and engineers committed to your success.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )
          }
        ]}
      />

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FBB900] text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted by Businesses Worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
              <div className="text-sm md:text-base font-semibold">Countries We Serve</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25K+</div>
              <div className="text-sm md:text-base font-semibold">Customers Worldwide</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.99%</div>
              <div className="text-sm md:text-base font-semibold">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials 
        title="What Our Clients Say"
        subtitle="Trusted by businesses worldwide"
        testimonials={[
          {
            name: "David Martinez",
            role: "CTO",
            company: "FinTech Solutions",
            content: "Cloud Kempt transformed our legacy infrastructure into a modern, scalable cloud environment. Their expertise and support have been exceptional.",
            rating: 5
          },
          {
            name: "Rachel Thompson",
            role: "VP Engineering",
            company: "HealthTech Inc",
            content: "The migration was flawless. Zero downtime, improved performance, and significant cost savings. Highly recommend their services.",
            rating: 5
          },
          {
            name: "James Wilson",
            role: "CIO",
            company: "Enterprise Retail Group",
            content: "Working with Cloud Kempt has been game-changing. Their proactive approach and deep cloud expertise make them an invaluable partner.",
            rating: 5
          }
        ]}
      />

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsContactOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full h-[80vh] max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-900">Get In Touch</h2>
              <button onClick={() => setIsContactOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="p-6 overflow-auto h-[calc(80vh-64px)] no-scrollbar">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition"
                  placeholder="Your Company"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1.5">
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="migration">Cloud Migration</option>
                  <option value="management">Cloud Management</option>
                  <option value="security">Cloud Security</option>
                  <option value="consulting">Cloud Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition resize-none"
                  placeholder="Please share your current challenges and goals..."
                ></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="flex-1 px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 text-sm font-semibold text-black bg-[#FBB900] rounded-lg hover:bg-[#FBB900]/90 transition shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer 
        companyName="Cloud Kempt"
        companyDescription="Empowering businesses with innovative cloud solutions since 2015."
        socialLinks={{
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          facebook: "https://facebook.com"
        }}
        // contactEmail="support@cloudkempt.com"
      />
    </div>
  );
}
