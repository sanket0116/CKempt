'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/Header';
import ContactModal from '@/app/components/ContactModal';
import Footer from '@/app/components/Footer';
import ServiceTemplate from '@/app/components/ServiceTemplate';
import {
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

  // Check if service has detailed content (features, process, case studies, FAQs)
  const hasDetailedContent = service.detailedFeatures || service.processSteps || service.caseStudies || service.faqs;

  // If service has detailed content, use ServiceDetail component
  if (hasDetailedContent) {
    const processSteps = service.processSteps || defaultProcessSteps;
    const caseStudies = service.caseStudies || defaultCaseStudies;
    const faqs = service.faqs || getDefaultFAQs(service.title);
    const features = service.detailedFeatures || service.features.map((feature) => ({
      title: feature,
      description: `Comprehensive ${feature.toLowerCase()} tailored to your business needs.`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }));

    return (
      <div className="min-h-screen bg-white">
        <Header
          onContactClick={() => setIsContactOpen(true)}
          categorizedServices={categorizedServices}
        />

        <ServiceDetail
          hero={{
            title: service.title,
            description: service.description,
            animationPath: "/cloud-animation.json"
          }}
          features={{
            title: "Key Features",
            subtitle: `Everything included in our ${service.title} service`,
            items: features
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

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        <Footer
          companyName="Axiicore"
          companyDescription="Empowering businesses with innovative cloud solutions since 2015."
          socialLinks={{
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
          }}
          contactEmail="support@axiicore.com"
        />
      </div>
    );
  }

  // Otherwise, use simple ServiceTemplate for overview
  const featureSections = [];
  const itemsPerSection = 4;

  for (let i = 0; i < service.features.length; i += itemsPerSection) {
    const sectionFeatures = service.features.slice(i, i + itemsPerSection);
    featureSections.push({
      type: 'basic' as const,
      title: i === 0 ? 'Key Capabilities' : `Additional Features`,
      items: sectionFeatures
    });
  }

  return (
    <ServiceTemplate
      title={service.title}
      description={service.description}
      heroIcon={service.icon}
      sections={featureSections}
    />
  );
}
