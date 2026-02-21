'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServiceDetail from './components/ServiceDetail';
import WhyCKempt from './components/WhyCKempt';
import FinalCTA from './components/FinalCTA';
import ServicesGrid from './components/ServicesGrid';
import WhyPartner from './components/WhyPartner';
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
        title="Cloud Architecture That Transforms Businesses"
        subtitle="When infrastructure breaks, teams slow down. We help growing companies stabilize, simplify, and scale their cloud and Kubernetes platforms — without overengineering."
        primaryButtonText="Get Started"
        onPrimaryClick={() => setIsContactOpen(true)}
        animationPath="/cloud-animation.json"
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Stats Section */}
      <Stats
        title="Trusted by Businesses Worldwide"
        stats={[
          { value: "20+", label: "Countries We Serve" },
          { value: "25K+", label: "Customers Worldwide" },
          { value: "99.99%", label: "Uptime SLA" }
        ]}
      />

      {/* Services Grid */}
      <ServicesGrid
        title="Our Services"
        subtitle="Comprehensive cloud solutions tailored to your business needs"
        categorizedServices={categorizedServices}
      />

      {/* Why Partner Section */}
      <WhyPartner
        title="Why Partner with CKempt?"
        subtitle="Experience the difference of working with cloud experts who prioritize your success, security, and scalability."
        benefits={[
          {
            title: "High Reliability",
            description: "Industry-leading 99.99% uptime guarantee with multi-region redundancy and automatic failover protection.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          },
          {
            title: "Enterprise Security",
            description: "Bank-level encryption, SOC 2 compliance, and advanced threat protection to safeguard your critical data.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )
          },
          {
            title: "Global Infrastructure",
            description: "Lightning-fast performance with edge locations in 60+ countries and intelligent traffic routing.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            title: "Flexible Architecture",
            description: "Hybrid and multi-cloud solutions designed to scale with your business growth and evolving needs.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            )
          },
          {
            title: "Cost Efficiency",
            description: "Optimize your cloud spending with intelligent resource allocation and transparent, predictable pricing.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            title: "Expert Support",
            description: "24/7 access to certified cloud architects and engineers committed to your success.",
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )
          }
        ]}
      />

      {/* Team Section */}
      <Team
        title="Meet Our Team"
        subtitle="Expert cloud architects and engineers dedicated to your success"
        members={[
          {
            name: "Sarah Johnson",
            role: "Chief Technology Officer",
            bio: "15+ years leading cloud transformation initiatives for Fortune 500 companies. AWS & Azure certified architect.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "sarah.johnson@ckempt.com"
          },
          {
            name: "Michael Chen",
            role: "Head of DevOps",
            bio: "Kubernetes expert with a passion for automation and infrastructure as code. CNCF ambassador.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "michael.chen@ckempt.com"
          },
          {
            name: "Emily Rodriguez",
            role: "Cloud Security Lead",
            bio: "Cybersecurity specialist focused on cloud compliance and zero-trust architectures. CISSP certified.",
            linkedin: "https://linkedin.com",
            email: "emily.rodriguez@ckempt.com"
          },
          {
            name: "David Park",
            role: "Solutions Architect",
            bio: "Multi-cloud expert helping enterprises optimize their cloud infrastructure and reduce costs.",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "david.park@ckempt.com"
          }
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Footer */}
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
