'use client';

import Link from 'next/link';

interface Service {
  slug: string;
  title: string;
  icon: React.ReactNode;
  excerpt: string;
  features?: string[];
  category?: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  categorizedServices: {
    cloud: Service[];
    devops: Service[];
    kubernetes: Service[];
    ai?: Service[];
  };
  categoryLabels?: { key: string; label: string }[];
}

const CARD_CONFIGS = [
  {
    categoryKey: 'kubernetes',
    cardTitle: 'Cloud & Kubernetes Operations',
    bullets: [
      '24/7 production monitoring & support',
      'Multi-cluster Kubernetes management',
      'Infrastructure optimization & cost reduction',
      'Performance tuning & scalability',
    ],
    href: '/services/category/kubernetes',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    categoryKey: 'cloud',
    cardTitle: 'Cloud Architecture & Strategy',
    bullets: [
      'Cloud-native application design',
      'Infrastructure as Code (IaC)',
      'Multi-cloud strategy & migration',
      'Security & compliance frameworks',
    ],
    href: '/services/category/cloud',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    categoryKey: 'devops',
    cardTitle: 'DevOps & Automation',
    bullets: [
      'CI/CD pipeline implementation',
      'GitOps & automated deployments',
      'Container orchestration',
      'Microservices architecture',
    ],
    href: '/services/category/devops',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesGrid({
  title = 'Cloud & Kubernetes Solutions',
  subtitle = 'Our comprehensive services cover everything from initial cloud strategy to ongoing operations and optimization.',
}: ServicesGridProps) {
  return (
    <section id="services" className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 reveal">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#FBB900] rounded-full mb-5" />
          <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARD_CONFIGS.map((card) => (
            <div
              key={card.categoryKey}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col hover:shadow-md transition-shadow duration-300 min-h-[340px]"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-7">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FBB900] flex items-center justify-center shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug pt-1">
                  {card.cardTitle}
                </h3>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-3 flex-grow mb-8">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-[#FBB900] font-bold flex-shrink-0">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* More Link — right aligned */}
              <div className="flex justify-end mt-auto">
                <Link
                  href={card.href}
                  className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#FBB900] transition-colors duration-200"
                >
                  More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
