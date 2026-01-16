'use client';

import { useState } from 'react';
import Header from './Header';
import ContactModal from './ContactModal';
import Footer from './Footer';
import { categorizedServices } from '../data/allServices';

// Section type definitions
type BasicSection = {
    type: 'basic';
    title: string;
    items: string[];
};

type NumberedServiceSection = {
    type: 'numbered-services';
    title: string;
    services: {
        number: string;
        title: string;
        items: string[];
        diagram?: React.ReactNode;
    }[];
};

type GridServicesSection = {
    type: 'grid-services';
    title: string;
    services: {
        title: string;
        items: string[];
    }[];
};

type ArchitectureSection = {
    type: 'architecture';
    title: string;
    items: string[];
    diagram?: React.ReactNode;
};

type TwoColumnSection = {
    type: 'two-column';
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
};

type ToolsSection = {
    type: 'tools';
    title: string;
    tools: { name: string; icon?: React.ReactNode }[];
};

type ProcessSection = {
    type: 'process';
    title: string;
    steps: { number: string; title: string; description: string }[];
};

type StatsSection = {
    type: 'stats';
    title: string;
    stats: { value: string; label: string }[];
};

type FAQSection = {
    type: 'faq';
    title: string;
    faqs: { question: string; answer: string }[];
};

type BenefitsGridSection = {
    type: 'benefits-grid';
    title: string;
    benefits: {
        icon?: React.ReactNode;
        title: string;
        description: string;
    }[];
};

type Section = BasicSection | NumberedServiceSection | GridServicesSection | ArchitectureSection | TwoColumnSection | ToolsSection | ProcessSection | StatsSection | FAQSection | BenefitsGridSection;

interface ServiceTemplateProps {
    title: string;
    description: string;
    heroIcon?: React.ReactNode;
    sections?: Section[];
    showCloudProviders?: boolean;
    providersTitle?: string;
}

export default function ServiceTemplate({
    title,
    description,
    heroIcon,
    sections = [],
    showCloudProviders = true,
    providersTitle = "Trusted Cloud Operations Across Cloud Providers"
}: ServiceTemplateProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const renderSection = (section: Section, index: number) => {
        switch (section.type) {
            case 'basic':
                return (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
                        <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                    <span className="text-[#FBB900] mt-1">•</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            case 'numbered-services':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="space-y-12">
                                {section.services.map((service, serviceIndex) => (
                                    <div key={serviceIndex} className={`grid lg:grid-cols-2 gap-12 items-center ${serviceIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[#FBB900] text-5xl font-bold">{service.number}</span>
                                                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                            </div>
                                            <ul className="space-y-3">
                                                {service.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start gap-3">
                                                        <span className="text-[#FBB900] mt-1">•</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-8">
                                            {service.diagram || (
                                                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-gray-400">Diagram Placeholder</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'grid-services':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.services.map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
                                        <ul className="space-y-3">
                                            {service.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start gap-3">
                                                    <span className="text-[#FBB900] mt-1">•</span>
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'architecture':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <ul className="space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-[#FBB900] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-white rounded-lg p-8 shadow-sm">
                                    {section.diagram || (
                                        <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-400">Architecture Diagram</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'two-column':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">{section.leftTitle}</h3>
                                    <ul className="space-y-3">
                                        {section.leftItems.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <span className="text-[#FBB900] mt-1">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">{section.rightTitle}</h3>
                                    <ul className="space-y-3">
                                        {section.rightItems.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <span className="text-[#FBB900] mt-1">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            case 'tools':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="flex flex-wrap justify-center items-center gap-20">
                                {section.tools.map((tool, toolIndex) => (
                                    <div key={toolIndex} className="flex flex-col items-center gap-5 hover:opacity-80 transition-opacity">
                                        <div className="w-20 h-20 flex items-center justify-center">
                                            {tool.icon || (
                                                <div className="w-20 h-20 bg-[#FBB900] rounded-full"></div>
                                            )}
                                        </div>
                                        <span className="text-lg font-bold text-gray-800 text-center">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'process':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">{section.title}</h2>
                            <p className="text-center text-gray-600 mb-12">How we deliver exceptional results for your business</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {section.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="flex flex-col items-center text-center">
                                        {/* Circular Icon */}
                                        <div className="relative mb-4">
                                            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                                                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    {stepIndex === 0 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    )}
                                                    {stepIndex === 1 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                    )}
                                                    {stepIndex === 2 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    )}
                                                    {stepIndex === 3 && (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    )}
                                                </svg>
                                            </div>
                                            {/* Small number badge */}
                                            <div className="absolute -top-1 -right-1 w-7 h-7 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                {step.number}
                                            </div>
                                        </div>
                                        {/* Title and Description */}
                                        <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'stats':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="grid md:grid-cols-3 gap-12">
                                {section.stats.map((stat, statIndex) => (
                                    <div key={statIndex} className="text-center">
                                        <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                        <div className="text-lg text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'faq':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="space-y-4">
                                {section.faqs.map((faq, faqIndex) => (
                                    <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === faqIndex ? null : faqIndex)}
                                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                                        >
                                            <span className="font-semibold text-gray-900">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === faqIndex ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openFaqIndex === faqIndex && (
                                            <div className="px-6 py-4 bg-gray-50 text-gray-700">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            case 'benefits-grid':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.benefits.map((benefit, benefitIndex) => (
                                    <div key={benefitIndex} className="bg-gray-50 p-6 rounded-lg">
                                        {benefit.icon && (
                                            <div className="w-12 h-12 mb-4 text-[#FBB900]">
                                                {benefit.icon}
                                            </div>
                                        )}
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header
                categorizedServices={categorizedServices}
                onContactClick={() => setIsContactModalOpen(true)}
            />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-gray-50 rounded-2xl p-12 w-full min-h-[300px] flex items-center justify-center">
                                {heroIcon || (
                                    <div className="w-48 h-48 bg-[#FBB900]/10 rounded-full flex items-center justify-center">
                                        <svg className="w-32 h-32 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Cloud Providers Section */}
            {showCloudProviders && (
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-center text-sm font-semibold text-gray-700 mb-12">
                            {providersTitle}
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-12">
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                                    alt="AWS"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                                    alt="Microsoft Azure"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                                    alt="Google Cloud"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                                    alt="Oracle Cloud"
                                    className="h-8 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Dynamic Sections */}
            {sections.map((section, index) => renderSection(section, index))}

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Run {title} With Confidence
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Let us handle your platform so your team ships features faster.
                    </p>
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-[#FBB900] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5a800] transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
            <Footer />
        </div>
    );
}