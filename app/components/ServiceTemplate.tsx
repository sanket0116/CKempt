'use client';

import { useState } from 'react';
import Header from './Header';
import ContactModal from './ContactModal';
import Footer from './Footer';
import { categorizedServices } from '../data/allServices';

// ─── Section type definitions ────────────────────────────────────────────────

type BasicSection = {
    type: 'basic';
    title: string;
    items: string[];
};

type NumberedServiceSection = {
    type: 'numbered-services';
    title: string;
    subtitle?: string;
    services: {
        number: string;
        title: string;
        icon?: React.ReactNode;
        iconClass?: string;
        items: string[];
        diagram?: React.ReactNode;
    }[];
};

type GridServicesSection = {
    type: 'grid-services';
    title: string;
    subtitle?: string;
    services: {
        title: string;
        icon?: React.ReactNode;
        iconClass?: string;
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
    tools: { name?: string; icon?: React.ReactNode }[];
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

type CloudBenefitsSection = {
    type: 'cloud-benefits';
    title: string;
    benefits: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
};

type WhyKubernetesSection = {
    type: 'why-kubernetes';
};

type Section =
    | BasicSection
    | NumberedServiceSection
    | GridServicesSection
    | ArchitectureSection
    | TwoColumnSection
    | ToolsSection
    | ProcessSection
    | StatsSection
    | FAQSection
    | BenefitsGridSection
    | CloudBenefitsSection
    | WhyKubernetesSection;

interface CloudProvider {
    name: string;
    icon: string;
}

interface ServiceTemplateProps {
    title: string;
    description: string;
    heroIcon?: React.ReactNode;
    sections?: Section[];
    showCloudProviders?: boolean;
    providersTitle?: string;
    cloudProviders?: CloudProvider[];
    hideHeroGlow?: boolean;
}

// Step icons for Process section
const processIcons = [
    // Search/Discovery
    <svg key="s" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>,
    // Clipboard/Strategy
    <svg key="c" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    // Code/Implementation
    <svg key="i" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    // Chart/Optimization
    <svg key="o" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const defaultCloudProviders: CloudProvider[] = [
    { name: 'AWS', icon: 'https://www.pngmart.com/files/23/Aws-PNG-Pic.png' },
    { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/512/google-cloud.png' },
    { name: 'On-Prem', icon: 'https://img.icons8.com/fluency/512/server.png' },
];

export default function ServiceTemplate({
    title,
    description,
    heroIcon,
    sections = [],
    showCloudProviders = true,
    providersTitle = 'Trusted Cloud Operations Across Cloud Providers',
    cloudProviders = defaultCloudProviders,
    hideHeroGlow = false,
}: ServiceTemplateProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const renderSection = (section: Section, index: number) => {
        switch (section.type) {

            // ─── basic ───────────────────────────────────────────────────────
            case 'basic':
                return (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">{section.title}</h3>
                        <ul className="space-y-3">
                            {section.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#f5bf29] mt-1 text-lg leading-none">•</span>
                                    <span className="text-gray-600 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );

            // ─── numbered-services (rows like Angular devops/cloud cards) ────
            case 'numbered-services':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-3 ps-1">
                                <h2 className="text-[1.75rem] font-light text-[#0f172a] relative inline-block pb-3
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-[3px] after:bg-[#f5bf29] after:rounded">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <p className="text-sm text-[#64748b] mt-3 max-w-xl">{section.subtitle}</p>
                                )}
                            </div>
                            <div className="space-y-5 mt-8">
                                {section.services.map((service, si) => (
                                    <div
                                        key={si}
                                        className="flex items-center justify-between gap-8 bg-white border-2 border-[#e2e8f0] rounded-3xl p-7
                                            transition-all duration-300 hover:border-[#f5bf29] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,191,41,0.12)]
                                            group cursor-default"
                                    >
                                        {/* Left: icon + title + points */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-11 h-11 rounded-xl bg-[#f5bf29]/10 border border-[#f5bf29]/25 flex items-center justify-center flex-shrink-0
                                                    text-[#f5bf29] transition-all duration-300
                                                    group-hover:bg-[#f5bf29] group-hover:border-[#f5bf29] group-hover:text-white group-hover:shadow-md">
                                                    {service.icon ? (
                                                        <div className="w-5 h-5">{service.icon}</div>
                                                    ) : (
                                                        <span className="font-extrabold text-base">{service.number}</span>
                                                    )}
                                                </div>
                                                <h4 className="text-lg font-bold text-[#0f172a] leading-tight">{service.title}</h4>
                                            </div>
                                            {service.items.length > 0 && (
                                                <ul className="pl-2 space-y-1.5">
                                                    {service.items.map((item, ii) => (
                                                        <li key={ii} className="flex items-center gap-2.5 text-sm text-[#64748b] group-hover:text-[#475569] transition-colors">
                                                            <svg className="w-[15px] h-[15px] flex-shrink-0 text-[#f5bf29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {/* Right: image */}
                                        {service.diagram && (
                                            <div className="flex-shrink-0 w-[clamp(300px,32vw,480px)] h-[280px] flex items-center justify-center">
                                                {service.diagram}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );


            // ─── grid-services (Kubernetes 3-col cards) ──────────────────────
            case 'grid-services':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-3 ps-1">
                                <h2 className="text-[1.75rem] font-light text-[#0f172a] relative inline-block pb-3
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-[3px] after:bg-[#f5bf29] after:rounded">
                                    {section.title}
                                </h2>
                                {section.subtitle && (
                                    <p className="text-sm text-[#64748b] mt-3 max-w-xl">{section.subtitle}</p>
                                )}
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                                {section.services.map((service, si) => (
                                    <div
                                        key={si}
                                        className="bg-white border-2 border-[#e2e8f0] rounded-2xl p-6 transition-all duration-300
                                            hover:border-[#f5bf29] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(245,191,41,0.15)]
                                            group cursor-default"
                                    >
                                        {/* Icon + Title row */}
                                        <div className="flex items-center gap-3 mb-5">
                                            {service.icon && (
                                                <div className="w-11 h-11 rounded-xl bg-[#f5bf29]/10 border border-[#f5bf29]/25 flex items-center justify-center flex-shrink-0
                                                    text-[#f5bf29] transition-all duration-300
                                                    group-hover:bg-[#f5bf29] group-hover:border-[#f5bf29] group-hover:text-white group-hover:shadow-md">
                                                    <div className="w-5 h-5">{service.icon}</div>
                                                </div>
                                            )}
                                            <h5 className="font-bold text-[#0f172a] text-[0.95rem] leading-snug
                                                group-hover:text-[#1a1a1e] transition-colors">
                                                {service.title}
                                            </h5>
                                        </div>
                                        {/* Bullet list */}
                                        <ul className="space-y-2">
                                            {service.items.map((item, ii) => (
                                                <li key={ii} className="flex items-center gap-2.5 text-sm text-[#64748b] group-hover:text-[#475569] transition-colors">
                                                    <svg className="w-[15px] h-[15px] flex-shrink-0 text-[#f5bf29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );


            // ─── architecture ─────────────────────────────────────────────────
            case 'architecture':
                return (
                    <section key={index} className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#edf0f4' }}>
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-normal text-[#0f172a] mb-8">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.items.map((item, ii) => (
                                        <li key={ii} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#f5bf29] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-[#334155] font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                {section.diagram || (
                                    <div className="h-64 w-full bg-white rounded-2xl flex items-center justify-center text-gray-400">
                                        Architecture Diagram
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                );

            // ─── two-column (Who / Why) ───────────────────────────────────────
            case 'two-column':
                return (
                    <section key={index} className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f1f5f9' }}>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 justify-center">
                                {[
                                    { title: section.leftTitle, items: section.leftItems },
                                    { title: section.rightTitle, items: section.rightItems },
                                ].map((col, ci) => (
                                    <div key={ci} className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-black/[0.03] transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <h4 className="text-[2rem] font-normal text-[#1e293b] mb-8">{col.title}</h4>
                                        <ul className="space-y-4">
                                            {col.items.map((item, ii) => (
                                                <li key={ii} className="flex gap-4 items-baseline">
                                                    <span className="text-[#f5bf29] text-2xl leading-none flex-shrink-0">•</span>
                                                    <span className="text-[#475569] text-[1.05rem] leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── tools / platform logos ───────────────────────────────────────
            case 'tools':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/[0.06]">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-[1.75rem] font-light text-[#f5bf29] tracking-widest mb-10">{section.title}</h2>
                            <div className="flex flex-wrap justify-center gap-4 items-center">
                                {section.tools.map((tool, ti) => (
                                    <div
                                        key={ti}
                                        className="flex items-center gap-3 px-5 py-3 bg-transparent hover:bg-white rounded-full border border-transparent hover:border-black/[0.05] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center [&_img]:h-full [&_img]:w-auto [&_img]:object-contain [&_svg]:h-full [&_svg]:w-auto">
                                            {tool.icon}
                                        </div>
                                        {tool.name && (
                                            <span className="font-bold text-[#1e293b] text-sm tracking-tight">{tool.name}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── process steps ───────────────────────────────────────────────
            case 'process':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#f3f4f7' }}>
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-xl font-semibold text-[#111827] relative inline-block pb-3 mb-1
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#f5bf29] after:rounded">
                                {section.title}
                            </h3>
                            <p className="text-gray-500 mb-10 mt-3">How we deliver exceptional results for your business</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {section.steps.map((step, si) => (
                                    <div
                                        key={si}
                                        className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                                    >
                                        {/* Icon circle with badge */}
                                        <div className="relative w-20 h-20 mb-4 rounded-full bg-[#f5bf29]/10 border border-[#f5bf29]/20 flex items-center justify-center text-[#f5bf29] group-hover:shadow-lg transition-shadow">
                                            {processIcons[si] || processIcons[0]}
                                            <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#f5bf29] border-4 border-white flex items-center justify-center text-[#111827] text-xs font-extrabold">
                                                {step.number}
                                            </span>
                                        </div>
                                        <h5 className="font-semibold text-[#111827] text-[1.05rem] mb-1">{step.title}</h5>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── stats ───────────────────────────────────────────────────────
            case 'stats':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl font-light text-center text-gray-900 mb-12">{section.title}</h2>
                            <div className="grid md:grid-cols-3 gap-12">
                                {section.stats.map((stat, si) => (
                                    <div key={si} className="text-center">
                                        <div className="text-5xl font-extrabold text-[#f5bf29] mb-2">{stat.value}</div>
                                        <div className="text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── faq ─────────────────────────────────────────────────────────
            case 'faq':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/[0.05]">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-[#1a1a1e] relative inline-block pb-3 mb-10
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#f5bf29] after:rounded">
                                {section.title}
                            </h2>
                            <div className="space-y-0 border-t border-black/[0.08]">
                                {section.faqs.map((faq, fi) => (
                                    <div key={fi} className="border-b border-black/[0.08]">
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === fi ? null : fi)}
                                            className="w-full px-2 py-5 flex justify-between items-center gap-4 text-left bg-transparent hover:bg-gray-50/50 transition-colors"
                                        >
                                            <span className="font-semibold text-[#2d2e32] text-sm sm:text-base">Q: {faq.question}</span>
                                            <span className={`w-8 h-8 flex-shrink-0 rounded-full border flex items-center justify-center font-semibold text-lg transition-all ${openFaqIndex === fi ? 'bg-[#f5bf29] text-white border-[#f5bf29]' : 'border-[#f5bf29]/50 text-[#f5bf29]'}`}>
                                                {openFaqIndex === fi ? '−' : '+'}
                                            </span>
                                        </button>
                                        {openFaqIndex === fi && (
                                            <div className="px-2 pb-5 text-[#334155] text-sm leading-relaxed border-l-4 border-[#f5bf29] ml-2 pl-4 bg-[#f5bf29]/5 rounded-r-xl">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── benefits-grid ────────────────────────────────────────────────
            case 'benefits-grid':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-8">
                                <h3 className="text-2xl font-normal text-[#0f172a] relative inline-block pb-3
                                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-1 after:bg-[#f5bf29] after:rounded">
                                    {section.title}
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {section.benefits.map((benefit, bi) => (
                                    <div
                                        key={bi}
                                        className="bg-white border-2 border-black/[0.06] rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#f5bf29]/40 group"
                                    >
                                        {benefit.icon && (
                                            <div className="w-12 h-12 rounded-full bg-[#f5bf29]/10 border border-[#f5bf29]/15 flex items-center justify-center text-[#f5bf29] transition-all group-hover:bg-[#f5bf29] group-hover:text-white">
                                                <div className="w-6 h-6">{benefit.icon}</div>
                                            </div>
                                        )}
                                        <h5 className="font-semibold text-[#1c2038]">{benefit.title}</h5>
                                        <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── cloud-benefits (Cloud Advantage cards) ───────────────────────
            case 'cloud-benefits':
                return (
                    <section key={index} className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#fcfcfd' }}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-[2rem] font-normal text-[#0f172a] relative inline-block pb-4 mb-12
                                after:content-[''] after:absolute after:bottom-0 after:left-2 after:w-[60px] after:h-1 after:bg-[#f5bf29] after:rounded">
                                {section.title}
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {section.benefits.map((b, bi) => (
                                    <div
                                        key={bi}
                                        className="bg-white border border-black/[0.05] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#f5bf29]/30 group"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#f5bf29]/10 rounded-2xl flex items-center justify-center text-[#f5bf29] transition-all group-hover:bg-[#f5bf29] group-hover:text-white">
                                            <div className="w-8 h-8 flex items-center justify-center [&_svg]:h-full [&_svg]:w-auto">
                                                {b.icon}
                                            </div>
                                        </div>
                                        <h5 className="font-bold text-[#1e293b] mb-2">{b.title}</h5>
                                        <p className="text-sm text-[#475569] leading-relaxed">{b.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );

            // ─── why-kubernetes ───────────────────────────────────────────────
            case 'why-kubernetes':
                return (
                    <section key={index} className="py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
                        <style>{`
                            @keyframes wk-float-main {
                                0%, 100% { transform: translateY(0px) rotateX(5deg); }
                                50%  { transform: translateY(-18px) rotateX(-5deg); }
                            }
                            @keyframes wk-node-pulse {
                                0%, 100% { transform: scale(1); }
                                50%       { transform: scale(1.08); }
                            }
                            @keyframes wk-flow-line {
                                from { stroke-dashoffset: 100; }
                                to   { stroke-dashoffset: 0; }
                            }
                            .wk-orbit      { animation: wk-float-main 6s ease-in-out infinite; transform-style: preserve-3d; }
                            .wk-node       { animation: wk-node-pulse 10s linear infinite; }
                            .wk-node:nth-child(2) { animation-delay: -2.5s; }
                            .wk-node:nth-child(3) { animation-delay: -5s; }
                            .wk-node:nth-child(4) { animation-delay: -7.5s; }
                            .wk-line { fill:none; stroke:rgba(245,191,41,0.4); stroke-width:2; stroke-dasharray:8 8; animation: wk-flow-line 2s linear infinite; }
                            .wk-node:hover { background:#f5bf29 !important; transform:scale(1.1) translateZ(20px); }
                            .wk-node:hover i, .wk-node:hover svg { color:#0f172a !important; }
                            .wk-node:hover span { color:#0f172a !important; }
                        `}</style>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                {/* ── Left column ── */}
                                <div>
                                    <h2 className="text-[1.75rem] font-light text-[#0f172a] mb-4 leading-snug">
                                        Kubernetes is Hard. We Make it Look Easy.
                                    </h2>
                                    <p className="text-[#475569] mb-8 leading-relaxed">
                                        We don't just "install" Kubernetes. We build a production-grade platform that your developers will actually love to use.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {/* Feature 1 */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-6 h-6 text-[#f5bf29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <h6 className="font-bold text-[#0f172a] mb-0">24/7 Operations</h6>
                                            </div>
                                            <p className="text-sm text-[#64748b]">We manage the clusters so you don't have to wake up at 3 AM.</p>
                                        </div>
                                        {/* Feature 2 */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <svg className="w-6 h-6 text-[#f5bf29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                                <h6 className="font-bold text-[#0f172a] mb-0">Security First</h6>
                                            </div>
                                            <p className="text-sm text-[#64748b]">Zero-trust networking and hardened configurations come standard.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ── Right column: orbit diagram ── */}
                                <div className="flex items-center justify-center" style={{ perspective: '1200px', minHeight: 320 }}>
                                    <div className="wk-orbit relative" style={{ width: 220, height: 220 }}>

                                        {/* SVG connection lines */}
                                        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 220 220" style={{ zIndex: 1 }}>
                                            <path d="M110,110 L40,40" className="wk-line" />
                                            <path d="M110,110 L180,40" className="wk-line" style={{ animationDelay: '0.5s' }} />
                                            <path d="M110,110 L40,180" className="wk-line" style={{ animationDelay: '1s' }} />
                                            <path d="M110,110 L180,180" className="wk-line" style={{ animationDelay: '1.5s' }} />
                                        </svg>

                                        {/* Center: cloud icon with glow */}
                                        <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2 }}>
                                            <div className="relative">
                                                {/* Pulse glow */}
                                                <div className="absolute inset-0 rounded-full bg-[#f5bf29]/20 animate-ping" style={{ animationDuration: '2s' }} />
                                                <div className="relative flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 30px rgba(245,191,41,0.4))' }}>
                                                    <svg className="w-16 h-16 text-[#f5bf29]" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Node 1: Workload – top-left */}
                                        <div className="wk-node absolute flex flex-col items-center justify-center transition-all duration-300 cursor-default"
                                            style={{
                                                width: 75, height: 75, top: -30, left: -30, background: 'white', borderRadius: 14,
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(245,191,41,0.25)', zIndex: 3
                                            }}>
                                            <svg className="w-6 h-6 text-[#f5bf29] mb-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                            </svg>
                                            <span className="text-[0.6rem] font-extrabold text-[#0f172a] uppercase tracking-wider leading-none">Workload</span>
                                        </div>

                                        {/* Node 2: Security – top-right */}
                                        <div className="wk-node absolute flex flex-col items-center justify-center transition-all duration-300 cursor-default"
                                            style={{
                                                width: 75, height: 75, top: -30, right: -30, background: 'white', borderRadius: 14,
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(245,191,41,0.25)', zIndex: 3, animationDelay: '-2.5s'
                                            }}>
                                            <svg className="w-6 h-6 text-[#f5bf29] mb-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
                                            </svg>
                                            <span className="text-[0.6rem] font-extrabold text-[#0f172a] uppercase tracking-wider leading-none">Security</span>
                                        </div>

                                        {/* Node 3: Compute – bottom-left */}
                                        <div className="wk-node absolute flex flex-col items-center justify-center transition-all duration-300 cursor-default"
                                            style={{
                                                width: 75, height: 75, bottom: -30, left: -30, background: 'white', borderRadius: 14,
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(245,191,41,0.25)', zIndex: 3, animationDelay: '-5s'
                                            }}>
                                            <svg className="w-6 h-6 text-[#f5bf29] mb-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path d="M8 21h8m-4-4v4" />
                                            </svg>
                                            <span className="text-[0.6rem] font-extrabold text-[#0f172a] uppercase tracking-wider leading-none">Compute</span>
                                        </div>

                                        {/* Node 4: Cluster – bottom-right */}
                                        <div className="wk-node absolute flex flex-col items-center justify-center transition-all duration-300 cursor-default"
                                            style={{
                                                width: 75, height: 75, bottom: -30, right: -30, background: 'white', borderRadius: 14,
                                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(245,191,41,0.25)', zIndex: 3, animationDelay: '-7.5s'
                                            }}>
                                            <svg className="w-6 h-6 text-[#f5bf29] mb-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                                            </svg>
                                            <span className="text-[0.6rem] font-extrabold text-[#0f172a] uppercase tracking-wider leading-none">Cluster</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

            default:
                return null;

        }
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header
                categorizedServices={categorizedServices}
                onContactClick={() => setIsContactModalOpen(true)}
            />

            {/* ── Hero Section ── */}
            <section className="pt-32 pb-0 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left: Text */}
                        <div className="hero-content">
                            <h1 className="text-3xl md:text-5xl font-normal text-[#0f172a] leading-tight mb-5">
                                {title}
                            </h1>
                            <p className="text-[1.1rem] text-gray-500 leading-relaxed max-w-[540px]">
                                {description}
                            </p>
                        </div>
                        {/* Right: Image with glow */}
                        <div className={`relative flex items-center justify-center ${hideHeroGlow ? 'lg:ml-20' : 'rounded-2xl p-8'}`}>
                            {!hideHeroGlow && (
                                <div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(245,191,41,0.10) 0%, transparent 70%)' }}
                                />
                            )}
                            <div className={`relative z-10 w-full ${hideHeroGlow ? 'max-w-full' : 'max-w-[480px]'}`}>
                                {heroIcon || (
                                    <div className="w-full h-64 bg-[#f5bf29]/10 rounded-2xl flex items-center justify-center">
                                        <svg className="w-32 h-32 text-[#f5bf29]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Cloud Partners Bar ── */}
            {showCloudProviders && (
                <section className="py-5 px-4 sm:px-6 lg:px-8 border-t border-b border-black/[0.06]" style={{ background: '#f3f4f7' }}>
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-sm font-bold text-[#0f172a] mb-4 tracking-wide">{providersTitle}</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {cloudProviders.map((p, pi) => (
                                <div
                                    key={pi}
                                    className="w-[150px] h-[72px] px-4 flex items-center justify-center cursor-pointer transition-all hover:-translate-y-1"
                                >
                                    <img
                                        src={p.icon}
                                        alt={p.name}
                                        className="max-w-[110px] max-h-9 w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        style={{ mixBlendMode: 'multiply' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Dynamic Sections ── */}
            {sections.map((section, index) => renderSection(section, index))}



            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
            <Footer />
        </div>
    );
}