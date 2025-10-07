'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/Header';
import ServiceContent from '@/app/components/ServiceContent';
import ContactModal from '@/app/components/ContactModal';
import Footer from '@/app/components/Footer';

// Service data - this should match the services array in page.tsx
const services = [
  {
    slug: 'modernization-migration',
    title: 'Cloud Modernization & Migration',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    excerpt: 'Seamlessly migrate your applications and data to the cloud with zero downtime and optimized performance.',
    description: 'Our cloud modernization and migration services help you transition from legacy systems to modern cloud infrastructure. We ensure minimal disruption to your business operations while maximizing the benefits of cloud technology.',
    features: [
      'Legacy system assessment and migration planning',
      'Zero-downtime migration strategies',
      'Application refactoring and containerization',
      'Data migration and synchronization',
      'Performance optimization and cost analysis'
    ]
  },
  {
    slug: 'cloud-management',
    title: 'Cloud Management & Operations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    excerpt: 'Comprehensive cloud management solutions to optimize performance, security, and cost efficiency.',
    description: 'Our cloud management services provide end-to-end operational support for your cloud infrastructure. We handle monitoring, maintenance, security, and optimization to ensure your cloud environment runs smoothly.',
    features: [
      '24/7 infrastructure monitoring and alerting',
      'Automated backup and disaster recovery',
      'Security patching and compliance management',
      'Performance optimization and capacity planning',
      'Cost monitoring and optimization recommendations'
    ]
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security & Compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    excerpt: 'Enterprise-grade security solutions to protect your cloud assets and ensure regulatory compliance.',
    description: 'Security is paramount in the cloud. Our comprehensive security services protect your applications, data, and infrastructure from threats while ensuring compliance with industry standards and regulations.',
    features: [
      'Multi-layered security architecture design',
      'Identity and access management (IAM)',
      'Encryption at rest and in transit',
      'Security monitoring and threat detection',
      'Compliance auditing and reporting'
    ]
  },
  {
    slug: 'cloud-consulting',
    title: 'Cloud Consulting & Strategy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    excerpt: 'Strategic guidance and expert consultation to maximize your cloud investment and business outcomes.',
    description: 'Our cloud consulting services provide strategic guidance to help you make informed decisions about your cloud journey. We work with you to develop roadmaps, assess opportunities, and implement best practices.',
    features: [
      'Cloud strategy development and roadmap planning',
      'Architecture design and technology selection',
      'Migration planning and execution strategies',
      'Cost optimization and ROI analysis',
      'Training and knowledge transfer'
    ]
  },
  {
    slug: 'devops-automation',
    title: 'DevOps & Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    excerpt: 'Streamline your development and operations with modern DevOps practices and automation tools.',
    description: 'Accelerate your software delivery with our DevOps and automation services. We implement CI/CD pipelines, infrastructure as code, and monitoring solutions to improve efficiency and reliability.',
    features: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (IaC) deployment',
      'Automated testing and quality assurance',
      'Configuration management and orchestration',
      'Performance monitoring and alerting'
    ]
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics Platform',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    excerpt: 'Build powerful data platforms and analytics solutions to drive data-driven decision making.',
    description: 'Transform your data into actionable insights with our data and analytics platform services. We design and implement scalable data lakes, warehouses, and analytics solutions.',
    features: [
      'Data lake and warehouse architecture design',
      'ETL/ELT pipeline development',
      'Real-time analytics and streaming data',
      'Business intelligence dashboard creation',
      'Machine learning and AI integration'
    ]
  }
];

// Categorized services for header mega menu
const categorizedServices = {
  cloud: [
    {
      slug: 'modernization-migration',
      title: 'Cloud Migration Services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      excerpt: 'Seamlessly migrate applications to the cloud'
    },
    {
      slug: 'cloud-management',
      title: 'Cloud Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Comprehensive cloud management solutions'
    },
    {
      slug: 'cloud-security',
      title: 'Cloud Security',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      excerpt: 'Enterprise-grade security solutions'
    }
  ],
  devops: [
    {
      slug: 'devops-automation',
      title: 'DevOps & Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Streamline development and operations'
    },
    {
      slug: 'cloud-consulting',
      title: 'Cloud Consulting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      excerpt: 'Strategic DevOps guidance'
    },
    {
      slug: 'data-analytics',
      title: 'Data & Analytics',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      excerpt: 'Build powerful data platforms'
    }
  ],
  'automation-kubernetes': [
    {
      slug: 'devops-automation',
      title: 'Workflow Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Streamline repetitive tasks'
    },
    {
      slug: 'cloud-management',
      title: 'Kubernetes Orchestration',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Deploy containerized apps'
    },
    {
      slug: 'cloud-security',
      title: 'Container Management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      excerpt: 'Manage container lifecycle'
    }
  ]
};

export default function ServicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;

  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/" className="bg-[#FBB900] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#FBB900]/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Sample data for components
  const processSteps = [
    {
      number: '1',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure and understand your business goals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Strategy & Planning',
      description: 'We create a comprehensive roadmap tailored to your needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Implementation',
      description: 'Our experts execute the plan with precision and care.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Optimization & Support',
      description: 'We monitor, optimize, and provide ongoing support.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const keyFeatures = service.features.map((feature, index) => {
    // Create appropriate icons for different features
    const getFeatureIcon = (featureName: string) => {
      const name = featureName.toLowerCase();

      if (name.includes('monitoring') || name.includes('24/7')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      }

      if (name.includes('backup') || name.includes('recovery') || name.includes('disaster')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        );
      }

      if (name.includes('security') || name.includes('protection') || name.includes('encryption')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      }

      if (name.includes('optimization') || name.includes('performance') || name.includes('capacity')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      }

      if (name.includes('cost') || name.includes('pricing') || name.includes('budget')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      }

      if (name.includes('strategy') || name.includes('planning') || name.includes('roadmap')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      }

      if (name.includes('architecture') || name.includes('design') || name.includes('technology')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      }

      if (name.includes('migration') || name.includes('execution')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      }

      if (name.includes('training') || name.includes('knowledge') || name.includes('transfer')) {
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      }

      // Default icon for any other features
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    };

    return {
      title: feature,
      description: `Comprehensive ${feature.toLowerCase()} tailored to your business needs.`,
      icon: getFeatureIcon(feature)
    };
  });

  const faqs = [
    {
      question: `What is included in ${service.title}?`,
      answer: service.description + ' Our service includes comprehensive support, expert consultation, and ongoing maintenance.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timeline varies based on your specific requirements, typically ranging from 2-12 weeks. We provide a detailed timeline during the planning phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 24/7 technical support and ongoing maintenance to ensure your systems run smoothly and efficiently.'
    },
    {
      question: 'What are the costs involved?',
      answer: 'Costs vary depending on the scope and complexity of your project. We offer flexible pricing models including pay-as-you-go, monthly plans, and custom enterprise solutions.'
    }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Digital Transformation',
      client: 'Fortune 500 Company',
      description: 'Successfully migrated legacy systems to modern cloud infrastructure with zero downtime.',
      results: ['50% cost reduction', '99.99% uptime achieved', '3x faster deployment']
    },
    {
      title: 'Startup Scalability Solution',
      client: 'Tech Startup',
      description: 'Built scalable cloud architecture enabling rapid growth from 100 to 10,000 users.',
      results: ['10x traffic handling', 'Auto-scaling enabled', '40% cost savings']
    },
    {
      title: 'Healthcare Compliance Migration',
      client: 'Healthcare Provider',
      description: 'Secure, compliant cloud migration meeting all HIPAA and regulatory requirements.',
      results: ['100% compliance', 'Enhanced security', 'Reduced operational costs']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        onContactClick={() => setIsContactOpen(true)}
        categorizedServices={categorizedServices}
      />

      {/* Service Content - All Sections */}
      <ServiceContent 
        hero={{
          title: service.title,
          description: service.description,
          animationPath: "/cloud-animation.json"
        }}
        features={{
          title: "Key Features",
          subtitle: `Everything included in our ${service.title} service`,
          items: keyFeatures
        }}
        process={{
          title: "Our Process",
          subtitle: "How we deliver exceptional results for your business",
          steps: processSteps
        }}
        caseStudies={{
          title: "Success Stories",
          subtitle: "See how we've helped businesses like yours succeed",
          items: caseStudies
        }}
        faqs={{
          title: "Frequently Asked Questions",
          subtitle: `Common questions about ${service.title}`,
          items: faqs
        }}
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Footer */}
      <Footer 
        companyName="CKempt"
        companyDescription="Empowering businesses with innovative cloud solutions since 2015."
        socialLinks={{
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          facebook: "https://facebook.com"
        }}
        contactEmail="support@ckempt.com"
      />
    </div>
  );
}
