'use client';

import { useState } from 'react';
import CallbackForm from './CallbackForm';

interface ChatOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  action?: () => void;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const messageOptions: ChatOption[] = [
    {
      id: 'chat',
      title: 'Chat with Us',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: () => {
        setShowCallbackForm(true);
        setIsOpen(false);
      }
    },
    {
      id: 'callback',
      title: 'Schedule a CallBack',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: () => {
        setShowCallbackForm(true);
        setIsOpen(false);
      }
    }
  ];

  const faqOptions: ChatOption[] = [
    {
      id: 'consulting',
      title: 'Cloud Consulting',
      icon: <span className="text-white font-semibold text-xs">C</span>,
      action: () => {
        window.location.href = '/services/cloud-consulting';
      }
    },
    {
      id: 'managed',
      title: 'Managed Services',
      icon: <span className="text-white font-semibold text-xs">M</span>,
      action: () => {
        window.location.href = '/services/managed-services';
      }
    },
    {
      id: 'migration',
      title: 'Migration & Modernization',
      icon: <span className="text-white font-semibold text-xs">M</span>,
      action: () => {
        window.location.href = '/services/migration';
      }
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <span className="text-white font-semibold text-xs">S</span>,
      action: () => {
        window.location.href = '/services/security';
      }
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: <span className="text-white font-semibold text-xs">D</span>,
      action: () => {
        window.location.href = '/services/devops';
      }
    },
    {
      id: 'cost',
      title: 'Cost Optimization',
      icon: <span className="text-white font-semibold text-xs">C</span>,
      action: () => {
        window.location.href = '/services/cost-optimization';
      }
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: <span className="text-white font-semibold text-xs">D</span>,
      action: () => {
        window.location.href = '/services/data-analytics';
      }
    },
    {
      id: 'support',
      title: '24/7 Support',
      icon: <span className="text-white font-semibold text-xs">S</span>,
      action: () => {
        window.location.href = '/services/support';
      }
    }
  ];

  const serviceFAQs = [
    {
      service: "Cloud Migration",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      faqs: [
        {
          question: "How long does cloud migration take?",
          answer: "Migration timelines vary based on complexity, typically 2-12 weeks. We provide a detailed assessment and timeline during planning."
        },
        {
          question: "Will there be downtime during migration?",
          answer: "We use zero-downtime migration strategies to ensure your business operations continue uninterrupted during the transition."
        }
      ]
    },
    {
      service: "Cloud Security",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      faqs: [
        {
          question: "How do you ensure data security?",
          answer: "We implement multi-layered security including encryption, IAM, compliance auditing, and continuous monitoring to protect your data."
        },
        {
          question: "Are you compliant with regulations?",
          answer: "Yes, we ensure compliance with HIPAA, GDPR, SOC 2, and other industry-specific regulatory requirements."
        }
      ]
    },
    {
      service: "DevOps & CI/CD",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      faqs: [
        {
          question: "What CI/CD tools do you support?",
          answer: "We work with Jenkins, GitLab CI, GitHub Actions, CircleCI, and other industry-standard CI/CD platforms."
        },
        {
          question: "How fast can you set up a pipeline?",
          answer: "Basic CI/CD pipelines can be set up in 1-2 weeks, with advanced configurations taking 3-4 weeks depending on complexity."
        }
      ]
    },
    {
      service: "Cloud Management",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      ),
      faqs: [
        {
          question: "Do you offer 24/7 support?",
          answer: "Yes! We provide 24/7 technical support and monitoring to ensure your cloud infrastructure runs smoothly at all times."
        },
        {
          question: "What cloud platforms do you support?",
          answer: "We support AWS, Azure, Google Cloud Platform (GCP), and hybrid cloud solutions with expertise across all platforms."
        }
      ]
    },
    {
      service: "Cost Optimization",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      faqs: [
        {
          question: "How much can I save on cloud costs?",
          answer: "Our clients typically save 30-50% on cloud costs through right-sizing, reserved instances, and automated optimization strategies."
        },
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing including pay-as-you-go, monthly subscriptions, and custom enterprise solutions tailored to your needs."
        }
      ]
    },
    {
      service: "AI/ML Solutions",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"/>
        </svg>
      ),
      faqs: [
        {
          question: "Can you deploy custom AI models?",
          answer: "Yes, we deploy and scale custom AI/ML models with containerization, auto-scaling, and GPU-optimized infrastructure."
        },
        {
          question: "Do you support LLM integration?",
          answer: "Absolutely! We integrate GPT-4, Claude, Llama, and other LLMs with prompt engineering and fine-tuning capabilities."
        }
      ]
    }
  ];

  const visibleServices = showAllServices ? serviceFAQs : serviceFAQs.slice(0, 6);
  const selectedServiceData = serviceFAQs.find(s => s.service === selectedService);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-800 hover:bg-gray-900' 
            : 'bg-gradient-to-br from-[#FBB900] to-[#e5a800] hover:scale-110'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-[300px] max-w-[calc(100vw-2.5rem)] h-[500px] bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] p-3 text-black flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-[#FBB900]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Welcome to CKempt</h3>
                <p className="text-[10px] text-black/70">How can I help you?</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Message Us Section - Only show when no service is selected */}
            {!selectedService && (
              <div className="p-3 border-b border-gray-100">
                <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Message Us</h4>
                <div className="space-y-1.5">
                  {messageOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={option.action}
                      className="w-full flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center text-black flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-xs font-medium text-gray-900 group-hover:text-[#FBB900] transition-colors">
                          {option.title}
                        </p>
                      </div>
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-[#FBB900] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Services or FAQs Section */}
            {!selectedService ? (
              /* Service Selection */
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">Select a Service</h4>
                </div>
                <div className="space-y-1.5">
                  {visibleServices.map((serviceCategory, serviceIndex) => (
                    <button
                      key={serviceIndex}
                      onClick={() => {
                        setSelectedService(serviceCategory.service);
                        setExpandedFAQ(null);
                      }}
                      className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-gray-200 hover:border-[#FBB900]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center flex-shrink-0">
                        {serviceCategory.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-xs font-medium text-gray-900 group-hover:text-[#FBB900] transition-colors">
                          {serviceCategory.service}
                        </p>
                        <p className="text-[9px] text-gray-500">{serviceCategory.faqs.length} FAQs</p>
                      </div>
                      <svg className="w-3 h-3 text-gray-400 group-hover:text-[#FBB900] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                {serviceFAQs.length > 6 && (
                  <button
                    onClick={() => setShowAllServices(!showAllServices)}
                    className="w-full mt-2 text-center text-[10px] font-medium text-[#FBB900] hover:text-[#e5a800] transition-colors flex items-center justify-center gap-1"
                  >
                    {showAllServices ? (
                      <>
                        <span>Show Less</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Show All Services</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            ) : (
              /* FAQs for Selected Service */
              <div className="p-3">
                {/* Back Button */}
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setExpandedFAQ(null);
                  }}
                  className="flex items-center gap-1 text-[10px] font-medium text-gray-600 hover:text-[#FBB900] transition-colors mb-3"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Services</span>
                </button>

                {/* Service Header */}
                {selectedServiceData && (
                  <>
                    <div className="bg-gradient-to-r from-[#FBB900]/10 to-[#e5a800]/5 px-3 py-2 rounded-lg mb-3 border border-[#FBB900]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center flex-shrink-0">
                          {selectedServiceData.icon}
                        </div>
                        <h5 className="text-xs font-bold text-gray-900">{selectedServiceData.service}</h5>
                      </div>
                    </div>

                    {/* FAQs */}
                    <div className="space-y-1.5">
                      {selectedServiceData.faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setExpandedFAQ(expandedFAQ === faqIndex ? null : faqIndex)}
                            className="w-full flex items-center justify-between gap-2 p-2 hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center flex-shrink-0">
                                <span className="text-[9px] font-bold text-black">Q</span>
                              </div>
                              <p className="text-[10px] font-medium text-gray-900 text-left">
                                {faq.question}
                              </p>
                            </div>
                            <svg
                              className={`w-3 h-3 text-gray-400 transition-transform flex-shrink-0 ${
                                expandedFAQ === faqIndex ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedFAQ === faqIndex && (
                            <div className="px-2 pb-2 pl-9">
                              <p className="text-[9px] text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex-shrink-0">
            <p className="text-[9px] text-center text-gray-500">
              Need more help? Contact us anytime!
            </p>
          </div>
        </div>
      )}

      {/* Callback Form Modal */}
      <CallbackForm isOpen={showCallbackForm} onClose={() => setShowCallbackForm(false)} />
    </>
  );
}
