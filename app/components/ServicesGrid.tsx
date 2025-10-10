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
  categorizedServices: {
    cloud: Service[];
    devops: Service[];
    ai: Service[];
  };
}

export default function ServicesGrid({ 
  title = "Our Services", 
  subtitle = "Comprehensive cloud solutions tailored to your business needs",
  categorizedServices
}: ServicesGridProps) {
  const categories = [
    { key: 'cloud', label: 'Cloud Services', services: categorizedServices.cloud },
    { key: 'devops', label: 'DevOps & Automation', services: categorizedServices.devops },
    { key: 'ai', label: 'AI Services', services: categorizedServices.ai }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white reveal">
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

        {/* Services by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.key}>
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {category.label}
                </h3>
                <div className="w-16 h-1 bg-[#FBB900] rounded-full"></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group p-4 rounded-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-[#FBB900]/50"
                  >
                    {/* Icon and Title on same line */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <div className="text-[#FBB900] scale-75">
                          {service.icon}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">
                        {service.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {service.excerpt}
                    </p>

                    {/* Know More Link */}
                    <div className="inline-flex items-center gap-1.5 text-[#FBB900] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
