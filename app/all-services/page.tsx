'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { categorizedServices, allServices } from '../data/allServices';

export default function AllServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cloud' | 'devops' | 'ai'>('all');

  const categories = [
    { key: 'all' as const, label: 'All Services', count: categorizedServices.cloud.length + categorizedServices.devops.length + categorizedServices.ai.length },
    { key: 'cloud' as const, label: 'Cloud Services', count: categorizedServices.cloud.length },
    { key: 'devops' as const, label: 'DevOps & Automation', count: categorizedServices.devops.length },
    { key: 'ai' as const, label: 'AI Services', count: categorizedServices.ai.length }
  ];

  const getFilteredServices = () => {
    if (selectedCategory === 'all') {
      return [
        ...categorizedServices.cloud,
        ...categorizedServices.devops,
        ...categorizedServices.ai
      ];
    }
    return categorizedServices[selectedCategory];
  };

  const filteredServices = getFilteredServices();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        categorizedServices={categorizedServices}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FBB900]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
        
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
            Our Services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive cloud, DevOps, and AI solutions engineered to accelerate your digital transformation journey
          </p>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FBB900] mb-1">{categorizedServices.cloud.length + categorizedServices.devops.length + categorizedServices.ai.length}+</div>
              <div className="text-sm text-gray-400">Services</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FBB900] mb-1">3</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FBB900] mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-[#FBB900] to-[#FBB900]/90 text-white shadow-lg shadow-[#FBB900]/25 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === category.key
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {selectedCategory !== category.key && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FBB900]/0 to-[#FBB900]/0 group-hover:from-[#FBB900]/5 group-hover:to-[#FBB900]/10 transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Alternating Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.key === selectedCategory)?.label}
            </h2>
            <p className="text-gray-600">
              {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} available
            </p>
          </div>

          {/* Services List - Alternating Layout */}
          <div className="space-y-20">
            {filteredServices.map((service, idx) => {
              // Get detailed service info
              const detailedService = allServices.find(s => s.slug === service.slug);
              
              // Determine category badge
              let categoryBadge = '';
              let categoryColor = '';
              if (categorizedServices.cloud.includes(service)) {
                categoryBadge = 'Cloud';
                categoryColor = 'bg-blue-100 text-blue-700';
              } else if (categorizedServices.devops.includes(service)) {
                categoryBadge = 'DevOps';
                categoryColor = 'bg-purple-100 text-purple-700';
              } else if (categorizedServices.ai.includes(service)) {
                categoryBadge = 'AI';
                categoryColor = 'bg-green-100 text-green-700';
              }

              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center animate-fade-in-up`}
                  style={{
                    animationDelay: `${idx * 100}ms`
                  }}
                >
                  {/* Visual Card */}
                  <div className="w-full lg:w-1/2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block relative"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-700">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                          }}></div>
                        </div>

                        {/* Category Badge */}
                        {selectedCategory === 'all' && (
                          <div className="absolute top-6 right-6 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
                              {categoryBadge}
                            </span>
                          </div>
                        )}

                        {/* Icon and Title */}
                        <div className="relative z-10 text-white">
                          <div className="w-20 h-20 rounded-2xl bg-[#FBB900]/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-[#FBB900]/30">
                            <div className="text-4xl text-[#FBB900]">
                              {service.icon}
                            </div>
                          </div>
                          
                          <h3 className="text-3xl font-bold mb-4">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {detailedService?.description || service.excerpt}
                          </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FBB900]/5 rounded-full blur-3xl"></div>
                        <div className="absolute top-0 left-0 w-48 h-48 bg-[#FBB900]/10 rounded-full blur-2xl"></div>
                      </div>
                    </Link>
                  </div>

                  {/* Description Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FBB900] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.excerpt}
                      </p>

                      {/* Feature Points */}
                      {detailedService?.features && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {detailedService.features.slice(0, 4).map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#FBB900]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">{feature}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="inline-flex items-center gap-2 text-[#FBB900] font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Footer />
    </div>
  );
}