'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/Header';
import ServiceDetail from '@/app/components/ServiceDetail';
import ContactModal from '@/app/components/ContactModal';
import Footer from '@/app/components/Footer';
import { 
  allServices, 
  categorizedServices, 
  getServiceBySlug,
  defaultProcessSteps,
  defaultCaseStudies,
  getDefaultFAQs
} from '@/app/data/allServices';


export default function ServicePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="bg-[#FBB900] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#FBB900]/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Simplified: Let ServiceDetail handle all data preparation
  const processSteps = service.processSteps || defaultProcessSteps;

  const keyFeatures = service.features.map((feature) => {
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

  const faqs = service.faqs || getDefaultFAQs(service.title);
  const caseStudies = service.caseStudies || defaultCaseStudies;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        onContactClick={() => setIsContactOpen(true)}
        categorizedServices={categorizedServices}
      />

      {/* Service Detail - All Sections */}
      <ServiceDetail 
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
