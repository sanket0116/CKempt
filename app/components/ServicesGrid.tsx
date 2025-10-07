'use client';

import Link from 'next/link';

interface Service {
  slug: string;
  title: string;
  icon: React.ReactNode;
  excerpt: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: Service[];
}

export default function ServicesGrid({ 
  title = "Our Services", 
  subtitle = "Comprehensive cloud solutions tailored to your business needs",
  services
}: ServicesGridProps) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#FBB900] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-[#FBB900]">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FBB900] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.excerpt}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-[#FBB900] font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
