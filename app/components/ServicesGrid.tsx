'use client';

import { useState, useRef, useEffect } from 'react';
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
    kubernetes: Service[];
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
    { key: 'kubernetes', label: 'Kubernetes' },
    // { key: 'ai', label: 'AI Services' }
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Get services count for current tab
  const currentServicesCount = validCategories[activeTab]?.services.length || 0;

  // Update current slide when scrolling
  useEffect(() => {
    const container = carouselRef.current;
    if (!container || currentServicesCount === 0) return;

    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling || isAnimating) return;
      isScrolling = true;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const container = carouselRef.current;
        if (!container) return;
        
        const card = container.querySelector('.service-card');
        if (!card) return;
        
        const cardWidth = card.clientWidth + 16;
        const scrollPosition = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Only handle loop when scroll stops
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (isAnimating) return;
          
          // Handle loop back to start
          if (scrollPosition >= maxScroll - 5) {
            setIsAnimating(true);
            container.scrollTo({ left: 0, behavior: 'smooth' });
            setCurrentSlide(0);
            setTimeout(() => setIsAnimating(false), 600);
          }
          // Handle loop to end when scrolling left from start
          else if (scrollPosition <= 5 && currentSlide === 0) {
            setIsAnimating(true);
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
            setCurrentSlide(currentServicesCount - 1);
            setTimeout(() => setIsAnimating(false), 600);
          } else {
            const newSlide = Math.round(container.scrollLeft / cardWidth);
            setCurrentSlide(newSlide % currentServicesCount);
          }
          isScrolling = false;
        }, 100);
      }, 50);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeTab, currentSlide, currentServicesCount, isAnimating]);

  const nextSlide = () => {
    if (!carouselRef.current || isAnimating) return;
    const container = carouselRef.current;
    const card = container.querySelector('.service-card');
    if (!card || currentServicesCount === 0) return;
    
    setIsAnimating(true);
    const cardWidth = card.clientWidth + 16;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Only trigger loop if we're very close to the end
    if (container.scrollLeft >= maxScroll - 10) {
      // If at the end, scroll to start
      container.scrollTo({ left: 0, behavior: 'smooth' });
      setCurrentSlide(0);
      setTimeout(() => setIsAnimating(false), 600); // Match this with your CSS transition duration
    } else {
      // Calculate next position
      const nextPos = container.scrollLeft + cardWidth;
      container.scrollTo({ 
        left: nextPos > maxScroll ? maxScroll : nextPos, 
        behavior: 'smooth' 
      });
      setCurrentSlide(prev => (prev + 1) % currentServicesCount);
      setTimeout(() => setIsAnimating(false), 600); // Match this with your CSS transition duration
    }
  };

  const prevSlide = () => {
    if (!carouselRef.current || isAnimating) return;
    const container = carouselRef.current;
    const card = container.querySelector('.service-card');
    if (!card || currentServicesCount === 0) return;
    
    setIsAnimating(true);
    const cardWidth = card.clientWidth + 16;
    
    // Only trigger loop if we're very close to the start
    if (container.scrollLeft <= 10) {
      // If at the start, scroll to end
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
      setCurrentSlide(currentServicesCount - 1);
      setTimeout(() => setIsAnimating(false), 600); // Match this with your CSS transition duration
    } else {
      // Calculate previous position
      const prevPos = container.scrollLeft - cardWidth;
      container.scrollTo({ 
        left: prevPos < 0 ? 0 : prevPos, 
        behavior: 'smooth' 
      });
      setCurrentSlide(prev => 
        prev === 0 ? currentServicesCount - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 600); // Match this with your CSS transition duration
    }
  };

  const handleTabChange = (index: number) => {
  if (index !== activeTab) {
    setShowCards(false);
    setTimeout(() => {
      setActiveTab(index);
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
      setTimeout(() => setShowCards(true), 50);
    }, 200);
  }
};

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="services" className="pt-10 pb-4 md:pt-12 md:pb-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            We are committed to delivering innovation that brings your vision to fruition.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed">
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
          <div className="flex-1 w-full relative overflow-hidden">
            <div className="relative w-full px-4 sm:px-6">
              {/* Navigation Arrows - Moved to be with indicators */}
              {/* {validCategories[activeTab]?.services.length > 3 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="hidden sm:flex absolute left-1 top-25 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-700 hover:bg-[#FBB900] hover:text-white transition-all duration-300 hover:scale-110 z-20 hover:shadow-xl"
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="hidden sm:flex absolute right-1 top-25 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-gray-700 hover:bg-[#FBB900] hover:text-white transition-all duration-300 hover:scale-110 z-20 hover:shadow-xl"
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )} */}
              <div 
                className="flex w-full overflow-x-auto touch-pan-x scrollbar-hide snap-x snap-mandatory"
                style={{
                  gap: '1rem',
                  padding: '0.5rem 0 2rem',
                  width: '100%',
                  flexWrap: 'nowrap',
                  WebkitOverflowScrolling: 'touch',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  scrollBehavior: 'smooth'
                }}
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {validCategories[activeTab]?.services.map((service, idx) => (
                <div 
                  key={service.slug} 
                  className="service-card flex-shrink-0 w-[85vw] max-w-[320px] snap-start
                    sm:w-[calc(50%-0.75rem)]
                    lg:w-[calc(33.333%-0.666rem)]"
                  style={{ 
                    scrollSnapAlign: 'start',
                    flex: '0 0 auto'
                  } as React.CSSProperties}
                >
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group relative bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-transparent flex flex-col h-full ${
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
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 flex items-center justify-center text-[#FBB900] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FBB900] transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {service.excerpt}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-[#FBB900] font-semibold text-xs mt-auto">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FBB900]/0 to-[#FBB900]/0 group-hover:from-[#FBB900]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                </Link>
                </div>
                ))}
              </div>
              
              {/* Mobile Scroll Indicator */}
              <div className="sm:hidden flex justify-center items-center pt-2 pb-4">
                <div className="flex space-x-2">
                  {validCategories[activeTab]?.services.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full ${
                        idx === currentSlide ? 'bg-[#FBB900]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="ml-2 text-xs text-gray-500 flex items-center">
                  <span>Swipe</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {/* Responsive Carousel Indicators with Navigation Buttons - Hidden on mobile (under 640px) */}
              {validCategories[activeTab]?.services.length > 0 && (
                <div className="hidden sm:flex flex-col items-center mt-2 mb-4">
                  <div className="flex items-center justify-center space-x-3">
                    {/* Previous Button */}
                    <button 
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-[#FBB900] hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="Previous slide"
                      disabled={isAnimating}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center space-x-3">
                    {/* Mobile: Show only 2 dots */}
                    {[0, 1].map((dotIndex) => {
                      const totalSlides = validCategories[activeTab].services.length;
                      const startCard = dotIndex * 3; // Each dot represents 3 slides on mobile
                      const isActive = currentSlide >= startCard && currentSlide < startCard + 3;
                      const isDisabled = startCard >= totalSlides;
                      
                      return (
                        <button
                          key={`mobile-${dotIndex}`}
                          onClick={() => {
                            if (!carouselRef.current || isDisabled) return;
                            const card = carouselRef.current.querySelector('.service-card');
                            if (!card) return;
                            const cardWidth = card.clientWidth + 16;
                            const targetSlide = Math.min(startCard, totalSlides - 1);
                            carouselRef.current.scrollTo({
                              left: targetSlide * cardWidth,
                              behavior: 'smooth'
                            });
                          }}
                          className={`h-2 w-6 rounded-full transition-all duration-300 md:hidden ${
                            isActive 
                              ? 'bg-[var(--primary)]' 
                              : 'bg-gray-300 hover:bg-[var(--primary)]/50'
                          }`}
                          disabled={isDisabled}
                          aria-label={`View cards ${startCard + 1} to ${Math.min(startCard + 3, totalSlides)}`}
                        />
                      );
                    })}
                    
                    {/* Desktop: Show 4 dots */}
                    {[0, 1, 2, 3].map((dotIndex) => {
                      const totalSlides = validCategories[activeTab].services.length;
                      const startCard = dotIndex;
                      const isActive = currentSlide >= startCard && currentSlide < startCard + 3;
                      const isDisabled = startCard + 2 >= totalSlides && currentSlide !== startCard;
                      
                      return (
                        <button
                          key={`desktop-${dotIndex}`}
                          onClick={() => {
                            if (!carouselRef.current || isDisabled) return;
                            const card = carouselRef.current.querySelector('.service-card');
                            if (!card) return;
                            const cardWidth = card.clientWidth + 16;
                            const targetSlide = Math.min(startCard, totalSlides - 3);
                            carouselRef.current.scrollTo({
                              left: targetSlide * cardWidth,
                              behavior: 'smooth'
                            });
                          }}
                          className={`h-2 w-2 rounded-full transition-all duration-300 hidden md:block ${
                            isActive 
                              ? 'bg-[var(--primary)] scale-125' 
                              : isDisabled 
                                ? 'bg-gray-200' 
                                : 'bg-gray-300 hover:bg-[var(--primary)]/50'
                          }`}
                          disabled={isDisabled}
                          aria-label={`View cards ${startCard + 1} to ${Math.min(startCard + 3, totalSlides)}`}
                        />
                      );
                    })}
                    </div>
                    
                    {/* Next Button */}
                    <button 
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-[#FBB900] hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label="Next slide"
                      disabled={isAnimating}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
