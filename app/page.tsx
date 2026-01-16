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
import { categorizedServices } from './data/allServices';


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
