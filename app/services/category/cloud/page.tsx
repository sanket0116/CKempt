import ServiceTemplate from '../../../components/ServiceTemplate';

const cloudProviders = [
    { name: 'AWS', icon: 'https://www.pngmart.com/files/23/Aws-PNG-Pic.png' },
    { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/512/google-cloud.png' },
];

export default function CloudServicesPage() {
    const sections = [
        // Numbered Services Section
        {
            type: 'numbered-services' as const,
            title: 'What We Do',
            subtitle: 'Enterprise cloud infrastructure designed for resilience, security, and global scale.',
            services: [
                {
                    number: '01',
                    title: 'Cloud Consulting',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    ),
                    items: [
                        'Cloud strategy and roadmap aligned with your business goals',
                        'Assessment, migration, and modernization of existing systems',
                        'Architecture design for secure, scalable, and cost-efficient cloud solutions',
                        'Ongoing optimization, governance, and performance management',
                        'Implementation of robust security frameworks, identity and access management, and compliance with industry standards and regulations',
                    ],
                    diagram: (
                        <img src="/image/Consulting.png" alt="Cloud Consulting" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '02',
                    title: 'Migration & Modernization',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                    ),
                    items: [
                        'Assess existing infrastructure and applications to define the right migration strategy.',
                        'Plan and execute secure, scalable cloud migrations with minimal downtime.',
                        'Modernize applications using cloud-native architectures and managed services.',
                        'Apply best practices for performance optimization, cost efficiency, and security.',
                        'Ensure seamless data migration with robust backup, disaster recovery, and compliance alignment.',
                        'Enable continuous improvement through DevOps, automation, monitoring, and ongoing cloud governance.',
                    ],
                    diagram: (
                        <img src="/image/Modernization.png" alt="Migration & Modernization" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '03',
                    title: 'Cloud Native Development',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 17.4l-2.8-2.8a7 7 0 10-6.6-6.6L3.3 5.2m12.2 12.2L21 21m-5.5-3.6l-3.9-3.9m3.3-3.3l3.9 3.9m-3.9-3.9L12 12" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5L21 3m-7.5 7.5L3 21" />
                        </svg>
                    ),
                    items: [
                        'Cloud-native application design and development',
                        'Secure and scalable cloud architectures',
                        'Migration planning, execution, and optimization',
                        'Best practices for performance, cost, and reliability',
                        'Proactive monitoring, logging, and governance to ensure availability, security, and cost control',
                    ],
                    diagram: (
                        <img src="/image/Native.png" alt="Cloud Native Development" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '04',
                    title: 'Managed Services',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    ),
                    items: [
                        'End-to-end cloud managed services',
                        'Reliable support with proactive monitoring',
                        'Scalable solutions driven by innovation',
                        'Secure and optimized cloud operations',
                        'Cost optimization and usage transparency',
                        'Compliance, governance, and risk management',
                    ],
                    diagram: (
                        <img src="/image/Managed1.png" alt="Managed Services" className="w-full h-full object-contain" />
                    ),
                },
            ],
        },
        // Architecture Section
        {
            type: 'architecture' as const,
            title: 'Cloud Architecture',
            items: [
                '3-Tier Cloud Structure',
                'Auto-scaling groups',
                'Load balancers',
                'Content Delivery Network',
                'Database clustering',
            ],
            diagram: (
                <img src="/image/cloud_architecture.png" alt="Cloud Architecture" className="w-full h-full object-contain rounded-lg" />
            ),
        },
        // Stats Section
        // {
        //     type: 'stats' as const,
        //     title: 'Trusted by Businesses Worldwide',
        //     stats: [
        //         { value: '60+', label: 'Countries We Serve' },
        //         { value: '25K+', label: 'Active Customers' },
        //         { value: '99.99%', label: 'Uptime SLA' },
        //     ],
        // },
        // Cloud Benefits / Advantage
        {
            type: 'cloud-benefits' as const,
            title: 'The Cloud Advantage',
            benefits: [
                {
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    ),
                    title: 'Infinite Scalability',
                    description: 'Scale your infrastructure up or down instantly based on demand with zero downtime.',
                },
                {
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    ),
                    title: 'Ironclad Security',
                    description: 'Built-in security frameworks and compliance guardrails for every cloud environment.',
                },
                {
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    title: 'Cost Optimization',
                    description: 'Intelligent resource management to reduce cloud bills and eliminate waste.',
                },
                {
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                        </svg>
                    ),
                    title: 'Global Availability',
                    description: 'Deploy your applications closer to your users with global multi-region setups.',
                },
            ],
        },
        // Two Column Section
        {
            type: 'two-column' as const,
            leftTitle: 'Who This Is For',
            leftItems: [
                'Startups moving from on-prem or single-cloud to scalable cloud architectures',
                'Teams struggling with rising cloud costs or poor visibility',
                'Enterprises modernizing legacy infrastructure',
                'Companies adopting multi-cloud or hybrid strategies',
            ],
            rightTitle: 'Why Work With Us',
            rightItems: [
                'Proven cloud architecture expertise',
                'Cost optimization & FinOps best practices',
                'Security & compliance built in from day one',
                'Multi-cloud & vendor-neutral solutions',
                'Transparent ownership, monitoring, and reporting',
            ],
        },
    ];

    return (
        <ServiceTemplate
            title="Cloud Services Built for Resilience"
            description="From web3+ teams to large-scale cloud transformation, our support spans infrastructure, migration, cloud native, and security for all your cloud needs."
            heroIcon={<img src="/image/Cloud_Services.png" alt="Cloud Services" className="w-full object-contain" />}
            sections={sections}
            showCloudProviders={true}
            cloudProviders={cloudProviders}
            providersTitle="Trusted Cloud Providers We Work With"
            hideHeroGlow={true}
        />
    );
}
