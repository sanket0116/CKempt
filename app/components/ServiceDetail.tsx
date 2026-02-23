'use client';

import { useState } from 'react';

interface ServiceDetailProps {
  hero: {
    title: string;
    description: string;
    animationPath?: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  caseStudies: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      client: string;
      description: string;
      results: string[];
    }[];
  };
  faqs: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export default function ServiceDetail({
  hero,
  features,
  process,
  caseStudies,
  faqs
}: ServiceDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#f3f4f7]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FBB900] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FBB900] rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {hero.description}
            </p>
            <div className="w-24 h-1.5 bg-[#FBB900] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{features.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.items.map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#FBB900]/10 rounded-xl flex items-center justify-center text-[#FBB900] mb-6 group-hover:bg-[#FBB900] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f3f4f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{process.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow relative z-10">
                  <div className="w-12 h-12 bg-[#FBB900] text-black font-bold rounded-full flex items-center justify-center mb-6 text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(100%-1rem)] w-16 border-t-2 border-dashed border-[#FBB900]/30 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{caseStudies.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{caseStudies.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.items.map((study, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-[#FBB900]/10 text-[#FBB900] text-xs font-bold rounded-full mb-4">
                    {study.client}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FBB900] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <ul className="space-y-3">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f3f4f7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{faqs.title}</h2>
            <p className="text-gray-600">{faqs.subtitle}</p>
          </div>

          <div className="space-y-4">
            {faqs.items.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-bold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
