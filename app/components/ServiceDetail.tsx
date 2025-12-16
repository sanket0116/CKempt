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

interface ServiceDetailProps {
  // Service Info
  service?: {
    title: string;
    description: string;
    features: string[];
    icon?: React.ReactNode;
    excerpt?: string;
    slug?: string;
  };

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

  // Benefits
  benefits?: {
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

export default function ServiceDetail({
  service = {
    title: "Kubernetes Solutions",
    description: "Enterprise-grade Kubernetes solutions for modern cloud-native applications",
    features: [
      "Managed Kubernetes Clusters",
      "CI/CD Pipeline Integration",
      "Auto-scaling & Load Balancing",
      "Security & Compliance",
      "24/7 Monitoring & Support"
    ],
    excerpt: "Deploy, manage, and scale containerized applications with our Kubernetes solutions",
    slug: "kubernetes"
  },
  hero = {
    title: "Kubernetes Cloud Solutions",
    description: "Accelerate your cloud-native journey with our fully managed Kubernetes services. Deploy, scale, and manage containerized applications with confidence.",
    animationPath: '/kubernetes-animation.json'
  },
  features = {
    title: "Kubernetes Features",
    subtitle: "Powerful capabilities for your container orchestration",
    items: [
      {
        title: "Automated Scaling",
        description: "Dynamically scale your applications based on demand with horizontal pod autoscaling.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )
      },
      {
        title: "High Availability",
        description: "Ensure your applications are always available with self-healing and automated failover.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )
      },
      {
        title: "Multi-Cloud Ready",
        description: "Deploy and manage Kubernetes clusters across multiple cloud providers seamlessly.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        )
      }
    ]
  },
  benefits = {
    title: "Why Choose Our Kubernetes Solutions",
    subtitle: "Enterprise-grade container orchestration with expert support",
    items: [
      {
        title: "Reduced Complexity",
        description: "Simplify container management with our intuitive Kubernetes platform and expert support.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )
      },
      {
        title: "Cost Effective",
        description: "Optimize resource utilization and reduce infrastructure costs with efficient container orchestration.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.542 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.616 1.129 2.872 1.104V16a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 14.766 14 13.991 14 13c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.849V7.907c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.617-1.129-2.873-1.104V5z" clipRule="evenodd" />
          </svg>
        )
      },
      {
        title: "Enterprise Security",
        description: "Built-in security features including RBAC, network policies, and automated certificate management.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
        )
      }
    ]
  },
  process = {
    title: "Our Kubernetes Deployment Process",
    subtitle: "From zero to production in no time",
    steps: [
      {
        number: "1",
        title: "Assessment",
        description: "We analyze your current infrastructure and application requirements.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      },
      {
        number: "2",
        title: "Cluster Setup",
        description: "We deploy and configure your Kubernetes cluster according to best practices.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      },
      {
        number: "3",
        title: "Deployment",
        description: "We containerize and deploy your applications to the Kubernetes cluster.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        number: "4",
        title: "Optimization",
        description: "We fine-tune performance and implement monitoring solutions.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      }
    ]
  },
  caseStudies = {
    title: "Kubernetes Success Stories",
    subtitle: "See how we've transformed businesses with Kubernetes",
    items: [
      {
        title: "Scaling E-commerce Platform",
        client: "Retail Giant",
        description: "Scaled to handle 10x traffic during peak seasons with zero downtime.",
        results: [
          "Reduced infrastructure costs by 40%",
          "Improved deployment frequency by 300%",
          "Achieved 99.99% uptime"
        ]
      },
      {
        title: "Financial Services Modernization",
        client: "Global Bank",
        description: "Modernized legacy applications with Kubernetes for better scalability.",
        results: [
          "Reduced time-to-market by 60%",
          "Improved resource utilization by 50%",
          "Enhanced security and compliance"
        ]
      }
    ]
  },
  faqs = {
    title: "Kubernetes FAQs",
    subtitle: "Common questions about our Kubernetes services",
    items: [
      {
        question: "What is Kubernetes and why should I use it?",
        answer: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It helps you optimize resource utilization, improve application availability, and simplify operations."
      },
      {
        question: "How does your managed Kubernetes service differ from others?",
        answer: "Our managed Kubernetes service includes 24/7 expert support, automated security updates, built-in monitoring, and cost optimization features. We handle the complexity of Kubernetes so you can focus on your applications."
      },
      {
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 support with guaranteed response times, a dedicated account manager, and access to Kubernetes experts. Our support includes cluster management, troubleshooting, and best practices guidance."
      },
      {
        question: "Can I migrate my existing applications to your Kubernetes platform?",
        answer: "Yes, we offer migration services to help containerize and deploy your existing applications to our Kubernetes platform with minimal downtime. Our team will handle the entire migration process from planning to execution."
      }
    ]
  }
}: ServiceDetailProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hero?.animationPath) {
      fetch(hero.animationPath)
        .then((r) => r.json())
        .then((json) => setAnimationData(json))
        .catch(() => {
          // Fallback to cloud-animation.json if the primary animation fails
          fetch('/cloud-animation.json')
            .then((r) => r.json())
            .then((json) => setAnimationData(json))
            .catch(() => setAnimationData(null));
        });
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

      {/* Benefits Section */}
      {benefits && benefits.items.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-full mb-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {benefits.title || "Key Benefits"}
              </h2>
              <p className="text-sm text-gray-600">
                {benefits.subtitle || "Why choose our services"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-4 rounded-lg border border-gray-100 hover:border-[#FBB900] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FBB900]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative w-10 h-10 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-md flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    <div className="text-white scale-75">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-[#FBB900] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {benefit.description}
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

