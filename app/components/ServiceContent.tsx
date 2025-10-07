'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Types
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  results: string[];
  image?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceContentProps {
  // Hero Section
  hero?: {
    title: string;
    description: string;
    animationPath?: string;
  };

  // Key Features
  features?: {
    title?: string;
    subtitle?: string;
    items: Feature[];
  };

  // Process Steps
  process?: {
    title?: string;
    subtitle?: string;
    steps: Step[];
  };

  // Case Studies
  caseStudies?: {
    title?: string;
    subtitle?: string;
    items: CaseStudy[];
  };

  // FAQ
  faqs?: {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
  };
}

export default function ServiceContent({
  hero,
  features,
  process,
  caseStudies,
  faqs
}: ServiceContentProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hero?.animationPath) {
      fetch(hero.animationPath)
        .then((r) => r.json())
        .then((json) => setAnimationData(json))
        .catch(() => setAnimationData(null));
    }
  }, [hero?.animationPath]);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      {hero && (
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {hero.title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {hero.description}
                </p>
                <div>
                  <button className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-md">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Right Side - Animation */}
              <div className="flex justify-center lg:justify-end">
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    className="w-full max-w-md lg:max-w-lg h-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {features && features.items.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-full mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {features.title || "Key Features"}
              </h2>
              <p className="text-sm text-gray-600">
                {features.subtitle || "Everything you need to succeed"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.items.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-4 rounded-lg border border-gray-100 hover:border-[#FBB900] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FBB900]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative w-10 h-10 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    <div className="text-white scale-75">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-[#FBB900] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps Section */}
      {process && process.steps.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {process.title || "Our Process"}
              </h2>
              <p className="text-sm text-gray-600">
                {process.subtitle || "How we deliver exceptional results"}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {process.steps.map((step, index) => (
                <div key={index} className="flex-1">
                  <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                        <div className="text-white scale-75">
                          {step.icon}
                        </div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-900 text-xs font-bold border-2 border-[#FBB900] shadow-sm">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex-1 lg:text-center">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {index < process.steps.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-8">
                        <svg className="w-8 h-8 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {caseStudies && caseStudies.items.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {caseStudies.title || "Success Stories"}
              </h2>
              <p className="text-sm text-gray-600">
                {caseStudies.subtitle || "See how we've helped businesses transform"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.items.map((study, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-[#FBB900] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-40 bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/5 flex items-center justify-center">
                    <svg className="w-14 h-14 text-[#FBB900]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-semibold text-[#FBB900] mb-2">{study.client}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#FBB900] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {study.description}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-xs font-semibold text-[#FBB900] hover:text-[#e5a800] transition-colors">
                      Read More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.items.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-full mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {faqs.title || "Frequently Asked Questions"}
              </h2>
              <p className="text-sm text-gray-600">
                {faqs.subtitle || "Find answers to common questions"}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.items.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index
                      ? 'border-[#FBB900] shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openFaqIndex === index
                          ? 'bg-[#FBB900] text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                      }`}>
                        <span className="text-xs font-bold">Q{index + 1}</span>
                      </div>
                      <span className={`text-sm font-semibold pr-4 transition-colors ${
                        openFaqIndex === index ? 'text-[#FBB900]' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      openFaqIndex === index
                        ? 'bg-[#FBB900] rotate-180'
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <svg
                        className={`w-4 h-4 ${openFaqIndex === index ? 'text-white' : 'text-gray-600'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {openFaqIndex === index && (
                    <div className="px-5 pb-4 pl-16">
                      <div className="text-sm text-gray-600 leading-relaxed border-l-2 border-[#FBB900] pl-4">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

