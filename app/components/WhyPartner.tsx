'use client';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhyPartnerProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

export default function WhyPartner({ 
  title = "Why Partner with CKempt?", 
  subtitle = "Experience the difference with our comprehensive cloud solutions",
  benefits 
}: WhyPartnerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 reveal">
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#FBB900] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#FBB900]">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FBB900] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
