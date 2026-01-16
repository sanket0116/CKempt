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

  // Use ServiceTemplate for all services
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
