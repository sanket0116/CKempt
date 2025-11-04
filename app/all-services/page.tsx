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
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  // Load cloud animation
  useEffect(() => {
    setIsLoading(true);
    fetch('/cloud-animation.json')
      .then(res => res.json())
      .then(data => {
        setCloudAnimation(data);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch(err => {
        console.error('Failed to load animation:', err);
        setIsLoading(false);
      });
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

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      const container = document.getElementById('services-carousel');
      if (container) {
        const cardWidth = 320; // Card width + gap
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;
        
        // If at the end, scroll back to start, otherwise scroll to next card
        if (currentScroll >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  return (
    <>
      <div className="bg-gray-50">
        {/* Header Section */}
        <div>
          <Header
            categorizedServices={categorizedServices}
            onContactClick={() => setIsContactModalOpen(true)}
          />
        </div>

        {/* Services Carousel Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FBB900]/10 to-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-[#FBB900]/5 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBB900' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-sm text-[#FBB900] rounded-full text-sm font-medium mb-6 shadow-lg border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {selectedCategory === 'cloud' ? 'Cloud Services' : selectedCategory === 'devops' ? 'DevOps & Automation' : 'AI Solutions'}
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-[#FBB900] to-gray-900 bg-clip-text text-transparent">
                  {selectedCategory === 'cloud' ? 'Cloud Infrastructure' : selectedCategory === 'devops' ? 'DevOps & Automation' : 'AI & Machine Learning'}
                </span>
                <br />
                <span className="text-gray-600 text-2xl sm:text-3xl lg:text-4xl font-light">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {selectedCategory === 'cloud' ? 'Scalable cloud infrastructure and migration services to power your digital transformation.' : selectedCategory === 'devops' ? 'Streamline your development and deployment processes with expert DevOps solutions.' : 'Leverage cutting-edge AI and ML technologies to drive innovation and efficiency.'}
              </p>

              {/* Filter Tabs */}
              <div className="mt-12 flex justify-center">
                <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-white/20">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`relative px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        selectedCategory === category.key
                          ? 'bg-[#FBB900] text-white shadow-md'
                          : 'text-gray-700 hover:text-[#FBB900]'
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
            </div>

            {/* Modern Carousel */}
            <div className="relative px-4">
              {/* Navigation Arrows */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-[#FBB900]/25 transition-all duration-500 hover:scale-110 flex items-center justify-center border border-white/20 group opacity-0 lg:opacity-100"
                onClick={() => {
                  const container = document.getElementById('services-carousel');
                  if (container) {
                    container.scrollBy({ left: -320, behavior: 'smooth' });
                  }
                }}
              >
                <svg className="w-6 h-6 text-gray-700 group-hover:text-[#FBB900] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-[#FBB900]/25 transition-all duration-500 hover:scale-110 flex items-center justify-center border border-white/20 group opacity-0 lg:opacity-100"
                onClick={() => {
                  const container = document.getElementById('services-carousel');
                  if (container) {
                    container.scrollBy({ left: 320, behavior: 'smooth' });
                  }
                }}
              >
                <svg className="w-6 h-6 text-gray-700 group-hover:text-[#FBB900] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div
                id="services-carousel"
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-12"
                onMouseEnter={() => setIsAutoScrollPaused(true)}
                onMouseLeave={() => setIsAutoScrollPaused(false)}
                style={{
                  scrollSnapType: 'x mandatory',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {filteredServices.map((service, idx) => {
                  // Get detailed service info
                  const detailedService = allServices.find(s => s.slug === service.slug);

                  return (
                    <div
                      key={service.slug}
                      className="flex-shrink-0 w-80 py-2"
                      style={{
                        scrollSnapAlign: 'start',
                        animation: 'fadeInUp 0.8s ease-out forwards',
                        animationDelay: `${idx * 0.15}s`,
                        opacity: 0
                      }}
                    >
                      {/* Modern Glassmorphism Card */}
                      <div className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl border border-gray-100 hover:border-[#FBB900]/30 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#FBB900]/20 transition-all duration-500 overflow-visible h-full backdrop-blur-sm hover:-translate-y-2">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FBB900]/5 via-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Top accent line with rounded corners */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-[#FBB900] via-orange-400 to-[#FBB900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col">
                          {/* Icon with modern styling */}
                          <div className="mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-[#FBB900] to-[#F9A825] rounded-xl flex items-center justify-center shadow-lg shadow-[#FBB900]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <div className="text-white w-7 h-7">
                                {service.icon}
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FBB900] transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">
                            {detailedService?.excerpt || service.excerpt}
                          </p>

                          {/* CTA Link */}
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 text-[#FBB900] font-semibold text-sm group/link hover:gap-3 transition-all duration-300"
                          >
                            <span>Explore service</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                        
                        {/* Decorative corner gradient */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#FBB900]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enhanced Carousel Indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {filteredServices.map((_, idx) => (
                  <button
                    key={idx}
                    className="relative group"
                    onClick={() => {
                      const container = document.getElementById('services-carousel');
                      if (container) {
                        const cardWidth = 320; // Card width + gap
                        container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-[#FBB900] transition-all duration-300 group-hover:scale-125 shadow-sm"></div>
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#FBB900] scale-0 group-hover:scale-150 transition-transform duration-300 opacity-20"></div>
                  </button>
                ))}
              </div>

              {/* Scroll Hint */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm animate-bounce">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Swipe or scroll to explore</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

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
