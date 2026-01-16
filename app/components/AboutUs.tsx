'use client';

/* COMMENTED OUT - OLD ABOUT US COMPONENT
interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export default function AboutUs({
  title = "About CKempt",
  subtitle = "Your Trusted Cloud Partner",
  description = "CKempt is a leading cloud solutions provider dedicated to helping businesses transform their operations through innovative cloud technologies. With over a decade of experience, we've helped thousands of organizations achieve their digital transformation goals.",
  features = []
}: AboutUsProps) {
  const defaultFeatures = features.length > 0 ? features : [
    {
      title: "10+ Years Experience",
      description: "Over a decade of expertise in cloud solutions and digital transformation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Certified Experts",
      description: "Team of AWS, Azure, and GCP certified cloud architects and engineers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Global Presence",
      description: "Serving clients across 60+ countries with local expertise",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for your peace of mind",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#FBB900]/10 rounded-full text-[#FBB900] text-sm font-semibold mb-4">
              {subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe in building long-term partnerships with our clients, providing not just technology solutions, but strategic guidance to help your business thrive in the cloud era. Our mission is to make cloud technology accessible, reliable, and transformative for businesses of all sizes.
            </p>
           
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {defaultFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#FBB900] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FBB900]/10 to-[#FBB900]/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-[#FBB900]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FBB900] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
*/

// NEW ABOUT US COMPONENT
export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Outer Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              HOW WE HELP
            </h2>
            <div className="w-24 h-1 bg-[#FBB900]"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WHO WE HELP */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WHO WE HELP</h3>
                <div className="w-12 h-1 bg-[#FBB900] rounded"></div>
              </div>
              <p className="text-gray-600 mb-6">
                We work with SMBs and growing companies. You're building a product, not an infrastructure team.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">CKempt helps teams that:</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>are growing faster than their cloud setup</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>are firefighting production issues</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>feel their Kubernetes or cloud stack is overcomplicated</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>need reliability before they scale further</span>
                </li>
              </ul>
            </div>

            {/* WHAT WE DO */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">WHAT WE DO</h3>
                <div className="w-12 h-1 bg-[#FBB900] rounded"></div>
              </div>
              <p className="text-gray-600 mb-6">
                We fix first. Then we improve. Then we scale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Fix broken cloud & Kubernetes setups</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stabilize production systems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Simplify over-engineered architectures</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Improve reliability, security, and cost efficiency</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Act as a hands-on engineering partner, not just advisors</span>
                </li>
              </ul>
            </div>

            {/* HOW WE WORK */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">HOW WE WORK</h3>
                <div className="w-12 h-1 bg-[#FBB900] rounded"></div>
              </div>
              <p className="text-gray-600 mb-6">
                Simple, practical, and hands-on.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We assess what's actually broken</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We fix high-impact issues first</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We clean up and document platform</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We help your team move faster with confidence</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>We focus on what matters now, not theoretical perfection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
