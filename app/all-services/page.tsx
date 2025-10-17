'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';
import { categorizedServices, allServices } from '../data/allServices';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

function AllServicesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as 'cloud' | 'devops' | 'ai' | null;
  
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'cloud' | 'devops' | 'ai'>(categoryParam || 'cloud');
  const [cloudAnimation, setCloudAnimation] = useState<object | null>(null);

  // Load cloud animation
  useEffect(() => {
    fetch('/cloud-animation.json')
      .then(res => res.json())
      .then(data => setCloudAnimation(data))
      .catch(err => console.error('Failed to load animation:', err));
  }, []);

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam && ['cloud', 'devops', 'ai'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // All categories with their counts
  const allCategories = [
    { key: 'cloud' as const, label: 'Cloud Services', count: categorizedServices.cloud.length },
    { key: 'devops' as const, label: 'DevOps & Automation', count: categorizedServices.devops.length },
    { key: 'ai' as const, label: 'AI Services', count: categorizedServices.ai.length }
  ];

  // Filter out empty categories
  const categories = allCategories.filter(cat => cat.count > 0);

  const getFilteredServices = () => {
    return categorizedServices[selectedCategory];
  };

  const filteredServices = getFilteredServices();

  return (
    <>
      <div className="bg-gray-50">
        {/* Header Section */}
        <div>
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
          <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-center">
              <div className="inline-flex bg-gray-100 rounded-xl p-1.5 shadow-inner">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`relative px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === category.key
                        ? 'bg-[#FBB900] text-white shadow-md'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {category.label}
                      <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                        selectedCategory === category.key
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Services Section - Isometric 3D Style */}
        {filteredServices.map((service, idx) => {
          // Get detailed service info
          const detailedService = allServices.find(s => s.slug === service.slug);

          // Alternating layout (left/right)
          const isEven = idx % 2 === 0;

          return (
            <div
              key={service.slug}
              className="w-full px-4 sm:px-6 lg:px-16 py-6"
              style={{
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${idx * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Service Card - Reference Image Style */}
              <div className="max-w-7xl w-full mx-auto">
                <div 
                  className={`relative ${isEven ? 'bg-gradient-to-br from-[#FDD870] via-[#FBB900] to-[#F9A825]' : 'bg-gradient-to-br from-[#4A5568] via-[#2D3748] to-[#1A202C]'} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500`}
                  style={{
                    animation: 'slideInLeft 0.8s ease-out forwards',
                    animationDelay: `${idx * 0.1 + 0.2}s`,
                    opacity: 0
                  }}
                >
                  {/* Background Pattern - Tech Grid */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '50px 50px'
                    }}></div>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBB900]/10 rounded-full blur-[120px]"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBB900]/15 rounded-full blur-[120px]"></div>

                  <div className={`relative z-10 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 lg:gap-8 p-5 lg:p-8`}>
                    {/* Left Side - 3D Illustration Area */}
                    <div className="w-full lg:w-1/3 flex items-center justify-center">
                      <div className="relative w-full max-w-[200px] lg:max-w-[280px]">
                        {/* Isometric 3D Animation Container */}
                        <div className="relative">
                          {/* Glow effect behind animation */}
                          <div className={`absolute inset-0 ${isEven ? 'bg-white/20' : 'bg-[#FBB900]/20'} rounded-full blur-3xl scale-150 animate-pulse`}></div>
                          
                          {/* Lottie Animation */}
                          <div className="relative flex items-center justify-center">
                            {cloudAnimation && (
                              <Lottie 
                                animationData={cloudAnimation}
                                loop={true}
                                className="w-full h-auto drop-shadow-2xl"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-full lg:w-2/3 space-y-4">
                      {/* Title Section */}
                      <div>
                        <h2 className={`text-xl lg:text-3xl font-bold ${isEven ? 'text-gray-900' : 'text-white'} leading-tight`}>
                          {service.title}
                        </h2>
                      </div>

                      {/* Description */}
                      <p className={`text-sm lg:text-base leading-relaxed ${isEven ? 'text-gray-700' : 'text-gray-200'}`}>
                        {detailedService?.description || service.excerpt}
                      </p>

                      {/* Features - Simple List */}
                      {detailedService?.features && (
                        <div className="space-y-2">
                          {detailedService.features.slice(0, 3).map((feature, featureIdx) => (
                            <div key={featureIdx} className="flex items-start gap-2.5 group">
                              <div className={`flex-shrink-0 w-4 h-4 rounded flex items-center justify-center mt-0.5 ${isEven ? 'bg-[#D4A017]' : 'bg-[#FBB900]/20'} transition-colors`}>
                                <svg className={`w-2.5 h-2.5 ${isEven ? 'text-white' : 'text-[#FBB900]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className={`text-xs lg:text-sm leading-relaxed font-medium ${isEven ? 'text-gray-800' : 'text-gray-300'}`}>
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="pt-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className={`group inline-flex items-center gap-2 ${isEven ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm`}
                        >
                          <span>Learn More</span>
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          </div>
        )}

      </div>
      
      {/* Footer */}
      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

export default function AllServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AllServicesContent />
    </Suspense>
  );
}
