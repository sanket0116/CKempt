'use client';

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
            <div
              key={service.slug}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-xl flex items-center justify-center mb-6">
                <div className="text-[#FBB900]">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.excerpt}
              </p>

              {/* Service info without link */}
              {/* <div className="text-[#FBB900] font-semibold text-sm">
                Service Available
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
