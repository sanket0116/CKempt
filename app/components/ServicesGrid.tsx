'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  slug: string;
  title: string;
  icon: React.ReactNode;
  excerpt: string;
}

interface CategoryConfig {
  key: string;
  label: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  categorizedServices: {
    cloud: Service[];
    devops: Service[];
    ai: Service[];
  };
  categoryLabels?: CategoryConfig[];
}

export default function ServicesGrid({ 
  title = "Our Services", 
  subtitle = "Comprehensive cloud solutions tailored to your business needs",
  categorizedServices,
  categoryLabels = [
    { key: 'cloud', label: 'Cloud Services' },
    { key: 'devops', label: 'DevOps & Automation' },
    { key: 'ai', label: 'AI Services' }
  ]
}: ServicesGridProps) {
  const categories = categoryLabels.map(config => ({
    key: config.key,
    label: config.label,
    services: categorizedServices[config.key as keyof typeof categorizedServices] || []
  }));

  // Filter out empty categories
  const validCategories = categories.filter(cat => cat.services.length > 0);
  const [activeTab, setActiveTab] = useState(0);
  const [showCards, setShowCards] = useState(true);

  const handleTabChange = (index: number) => {
    if (index !== activeTab) {
      setShowCards(false);
      setTimeout(() => {
        setActiveTab(index);
        setTimeout(() => setShowCards(true), 50);
      }, 200);
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We are committed to delivering innovation that brings your vision to fruition.
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-5xl mx-auto leading-relaxed">
            As a reliable cloud computing partner, we focus on building a strong foundation of trust and long-term relationships 
            through successfully delivering cloud services and solutions aligned with your vision, goals, and values. Our approach is 
            centered around collaboration in each engagement to bring you the benefit of cloud technology.
          </p>
        </div>

        {/* Tabbed Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Tabs */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-2 py-4">
            {validCategories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => handleTabChange(index)}
                className={`w-full text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white text-gray-900 shadow-[0_4px_12px_rgba(0,0,0,0.1),0_-4px_12px_rgba(0,0,0,0.05)] scale-105'
                    : 'bg-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Right Side - Service Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {validCategories[activeTab]?.services.slice(0, 3).map((service, idx) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-transparent ${
                    showCards 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionProperty: 'all',
                    transitionDuration: '0.6s',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: showCards ? `${idx * 150}ms` : '0ms' 
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 flex items-center justify-center text-[#FBB900] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FBB900] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.excerpt}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#FBB900] font-semibold text-sm">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FBB900]/0 to-[#FBB900]/0 group-hover:from-[#FBB900]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                </Link>
              ))}
            </div>

            {/* All Services Link */}
            <div className="mt-10 flex justify-center">
              <Link 
                href="/all-services"
                className="inline-flex items-center gap-2 text-[#FBB900] font-semibold text-base hover:gap-3 transition-all duration-300 group"
              >
                <span>View All Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
