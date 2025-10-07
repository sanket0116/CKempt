'use client';

import { useState } from 'react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
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

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Left Side - Tab Navigation */}
          <div className="lg:col-span-1">
            {/* Mobile: Dropdown/Accordion */}
            <div className="lg:hidden space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    className={`w-full text-left p-2 transition-all duration-300 ${
                      activeTab === index ? 'bg-[#FBB900]/10' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          activeTab === index
                            ? 'bg-[#FBB900] text-black'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {benefit.icon}
                        </div>
                        <h3 className={`text-sm font-medium transition-colors ${
                          activeTab === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {benefit.title}
                        </h3>
                      </div>
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                          activeTab === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Mobile Content - Shown when active */}
                  {activeTab === index && (
                    <div className="p-2 pt-0 border-t border-gray-100 animate-slideDown">
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        {benefit.description}
                      </p>
                      
                      {/* Feature List */}
                      <div className="space-y-1">
                        <div className="flex items-start gap-1 p-1 rounded bg-gray-50">
                          <div className="w-3 h-3 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-1.5 h-1.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-700 font-medium">Enterprise-grade infrastructure</p>
                            <p className="text-xs text-gray-500">99.99% uptime SLA</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-1 p-1 rounded bg-gray-50">
                          <div className="w-3 h-3 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-1.5 h-1.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-700 font-medium">Advanced security</p>
                            <p className="text-xs text-gray-500">Bank-level encryption</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-1 p-1 rounded bg-gray-50">
                          <div className="w-3 h-3 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-1.5 h-1.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-700 font-medium">24/7 expert support</p>
                            <p className="text-xs text-gray-500">Dedicated team</p>
                          </div>
                        </div>
                      </div>

                      {benefit.details && (
                        <div className="mt-1.5 p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                          <p className="text-xs text-gray-700 leading-relaxed">
                            {benefit.details}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Vertical List */}
            <div className="hidden lg:block space-y-2">
              {benefits.map((benefit, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-white shadow-md border-l-4 border-[#FBB900]'
                      : 'bg-white/50 hover:bg-white hover:shadow-sm border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      activeTab === index
                        ? 'bg-[#FBB900] text-black'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xs font-medium transition-colors ${
                        activeTab === index ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {benefit.title}
                      </h3>
                    </div>
                    {activeTab === index && (
                      <svg className="w-3.5 h-3.5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Content Display (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-2 bg-white p-5 rounded-xl shadow-lg">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#FBB900] to-[#e5a800] mb-2">
                <div className="text-black">
                  {benefits[activeTab]?.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                {benefits[activeTab]?.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefits[activeTab]?.description}
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-50">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">Enterprise-grade infrastructure</p>
                  <p className="text-xs text-gray-500 mt-0.5">99.99% uptime SLA with multi-region redundancy</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-50">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">Advanced security protocols</p>
                  <p className="text-xs text-gray-500 mt-0.5">Bank-level encryption and compliance certifications</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-50">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FBB900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">24/7 expert support</p>
                  <p className="text-xs text-gray-500 mt-0.5">Dedicated account manager and technical team</p>
                </div>
              </div>
            </div>

            {benefits[activeTab]?.details && (
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-50 to-transparent border border-blue-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {benefits[activeTab]?.details}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
