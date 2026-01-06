import ServiceTemplate from '../../../components/ServiceTemplate';

export default function CloudServicesPage() {
    const sections = [
        // Numbered Services Section
        {
            type: 'numbered-services' as const,
            title: 'What We Do',
            services: [
                {
                    number: '01',
                    title: 'Cloud Consulting',
                    items: [
                        'We provide end-to-end consulting to help you make informed decisions about cloud',
                        'Develop roadmaps and migration strategies',
                        'Assess opportunities and implement best practices',
                        'Expert guidance for your cloud journey',
                    ],
                    diagram: (
                        <img src="/image/Consulting.png" alt="Cloud Consulting" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '02',
                    title: 'Migration & Modernization',
                    items: [
                        'Process-oriented cloud migration using right architecture',
                        'Optimized efficiency through agile, scalable solutions',
                        'Built-in security to reduce disruptions',
                        'Improved data management and analytics',
                    ],
                    diagram: (
                        <img src="/image/Modernization.png" alt="Migration & Modernization" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '03',
                    title: 'Cloud Native Development',
                    items: [
                        'Build modern, scalable applications for the cloud',
                        'Microservices architecture design',
                        'Serverless application development',
                        'API-first development approach',
                    ],
                    diagram: (
                        <img src="/image/Native.png" alt="Cloud Native Development" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '04',
                    title: 'Managed Services',
                    items: [
                        '24/7 infrastructure monitoring and support',
                        'Automated backup and disaster recovery',
                        'Security patching and compliance',
                        'Performance optimization and cost management',
                    ],
                    diagram: (
                        <img src="/image/Managed.png" alt="Managed Services" className="w-full h-64 object-cover rounded-lg" />
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
                <img src="/image/photo3.png" alt="Cloud Architecture" className="w-full h-full object-contain rounded-lg" />
            ),
        },
        // Stats Section
        {
            type: 'stats' as const,
            title: 'Trusted by Businesses Worldwide',
            stats: [
                { value: '60+', label: 'Countries We Serve' },
                { value: '25K+', label: 'Active Customers' },
                { value: '99.99%', label: 'Uptime SLA' },
            ],
        },
        // Two Column Section
        {
            type: 'two-column' as const,
            leftTitle: 'Who This Is For',
            leftItems: [
                'Startups scaling beyond a single region',
                'Enterprises modernizing infrastructure',
                'Companies adopting cloud-native',
                'Organizations needing compliance',
            ],
            rightTitle: 'Why Work With Us',
            rightItems: [
                'Production expertise across multiple clouds',
                'SRE-style operations',
                'Security-first approach',
                'Clear accountability & reporting',
            ],
        },
    ];

    return (
        <ServiceTemplate
            title="Cloud Services Built for Resilience"
            description="From web3+ teams to large-scale cloud transformation, our support spans infrastructure, migration, cloud native, and security for all your cloud needs."
            heroIcon={<img src="/image/Cloud_Services.png" alt="Cloud Services" className="w-full h-full object-contain rounded-2xl" />}
            sections={sections}
            showCloudProviders={true}
        />
    );
}
