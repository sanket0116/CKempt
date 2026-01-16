'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServiceDetail from './components/ServiceDetail';
import WhyCKempt from './components/WhyCKempt';
import FinalCTA from './components/FinalCTA';
import ServicesGrid from './components/ServicesGrid';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

// Services data with categorized services for header tabs
const categorizedServices = {
  cloud: [
    {
      slug: 'cloud-consulting',
      title: 'Cloud Consulting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      excerpt: 'End-to-end consulting services aligned with your business'
    },
    {
      slug: 'modernization-migration',
      title: 'Migration & Modernization',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      excerpt: 'Migration plans, processes, and practices'
    },
    {
      slug: 'cost-optimization',
      title: 'Cost Optimization',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      excerpt: 'Intelligent cost optimization by wide range of techniques'
    },
    {
      slug: 'devops-automation',
      title: 'DevOps & Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Automate DevOps and simplify software development'
    },
    {
      slug: 'cloud-native-development',
      title: 'Cloud Native Development',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      excerpt: 'Transform legacy apps with cross-cloud compatibility'
    },
    {
      slug: 'security-compliance',
      title: 'Security & Compliance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      excerpt: 'Tools and strategies that ensure data security and compliance'
    },
    {
      slug: 'hybrid-multicloud',
      title: 'Hybrid & Multicloud',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      excerpt: 'Customized approach for cross-cloud platform computing'
    },
    {
      slug: 'managed-services',
      title: 'Managed Services',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Full-spectrum services delivered through innovation and support'
    }
  ],
  devops: [
    {
      slug: 'cicd-pipeline',
      title: 'CI/CD Pipeline Setup',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      excerpt: 'Automate your build, test, and deployment workflows with industry-standard CI/CD tools'
    },
    {
      slug: 'infrastructure-as-code',
      title: 'Infrastructure as Code (IaC)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      excerpt: 'Provision and manage cloud resources efficiently using Terraform and Ansible'
    },
    {
      slug: 'cloud-deployment-automation',
      title: 'Cloud Deployment Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      excerpt: 'Deploy and scale applications seamlessly across AWS, Azure, and GCP'
    },
    {
      slug: 'containerization-orchestration',
      title: 'Containerization & Orchestration',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      excerpt: 'Dockerize your workloads and orchestrate them with Kubernetes for high availability'
    },
    {
      slug: 'monitoring-observability',
      title: 'Monitoring & Observability',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      excerpt: 'Implement end-to-end visibility with Prometheus, Grafana, and ELK stack dashboards'
    },
    {
      slug: 'security-compliance-automation',
      title: 'Security & Compliance Automation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      excerpt: 'Integrate security scans, policy enforcement, and compliance checks into your pipelines'
    }
  ],
  ai: []
  // AI Services - Temporarily hidden
  // /* ai: [
  //   {
  //     slug: 'rag-solutions',
  //     title: 'RAG Solutions',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  //       </svg>
  //     ),
  //     excerpt: 'Retrieval-Augmented Generation for intelligent AI'
  //   },
  //   {
  //     slug: 'n8n-automation',
  //     title: 'N8N Workflow Automation',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  //       </svg>
  //     ),
  //     excerpt: 'Automate workflows with N8N platform'
  //   },
  //   {
  //     slug: 'ai-ml-models',
  //     title: 'AI/ML Model Deployment',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  //       </svg>
  //     ),
  //     excerpt: 'Deploy and scale AI/ML models in production'
  //   },
  //   {
  //     slug: 'llm-integration',
  //     title: 'LLM Integration',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  //       </svg>
  //     ),
  //     excerpt: 'Integrate large language models into your apps'
  //   },
  //   {
  //     slug: 'ai-chatbots',
  //     title: 'AI Chatbots & Assistants',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
  //       </svg>
  //     ),
  //     excerpt: 'Build intelligent conversational AI solutions'
  //   },
  //   {
  //     slug: 'vector-databases',
  //     title: 'Vector Databases',
  //     icon: (
  //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  //       </svg>
  //     ),
  //     excerpt: 'Semantic search with vector database solutions'
  //   }
  // ] */
};

// Main services for homepage grid
const mainServices = [
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration Services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    excerpt: 'Seamlessly migrate your applications and data to the cloud with zero downtime and optimized performance.'
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    excerpt: 'Build and maintain scalable, secure cloud infrastructure tailored to your business needs.'
  },
  {
    slug: 'devops-automation',
    title: 'DevOps & Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    excerpt: 'Streamline your development and operations with modern DevOps practices and automation tools.'
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security & Compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    excerpt: 'Enterprise-grade security solutions to protect your cloud assets and ensure regulatory compliance.'
  },
  {
    slug: 'cloud-monitoring',
    title: 'Cloud Monitoring',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    excerpt: 'Real-time monitoring and analytics to ensure optimal performance and reliability.'
  },
  {
    slug: 'kubernetes-orchestration',
    title: 'Kubernetes Orchestration',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    excerpt: 'Deploy, scale, and manage containerized applications with enterprise Kubernetes solutions.'
  }
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll-reveal effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('visible');
          } else {
            target.classList.remove('visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Mega Menu */}
      <Header 
        onContactClick={() => setIsContactOpen(true)}
        categorizedServices={categorizedServices}
      />

      {/* Hero Section */}
      <Hero 
        title="Transform Your Business with Cloud Solutions"
        subtitle="Accelerate innovation, reduce costs, and scale effortlessly with our enterprise cloud infrastructure and expert support."
        primaryButtonText="Get Started"
        onPrimaryClick={() => setIsContactOpen(true)}
        animationPath="/cloud-animation.json"
      />

      {/* Stats Section */}
      <Stats
        title="Trusted by Businesses Worldwide"
        stats={[
          { value: "20+", label: "Countries We Serve" },
          { value: "25K+", label: "Customers Worldwide" },
          { value: "99.99%", label: "Uptime SLA" }
        ]}
        backgroundColor="bg-[#f3f4f7]"
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Service Detail Section */}
      <ServiceDetail />

      {/* Why CKempt Section */}
      <WhyCKempt />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <Testimonials />

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
