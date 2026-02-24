import ServiceTemplate from '../../../components/ServiceTemplate';

const k8sProviders = [
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'GCP', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
    { name: 'Local Server', icon: 'https://img.icons8.com/color/512/server.png' },
];

export default function KubernetesServicesPage() {
    const sections = [
        // Grid Services Section  
        {
            type: 'grid-services' as const,
            title: 'What We Do',
            subtitle: 'Comprehensive Kubernetes services designed to stabilize, scale, and secure your cloud-native platform.',
            services: [
                {
                    title: 'Platform Design',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    ),
                    items: ['Multi-AZ clusters', 'Private networking', 'High availability', 'Role-based access'],
                },
                {
                    title: 'Kubernetes Ops',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    ),
                    items: ['Cluster upgrades', 'Monitoring setup', 'Security patches', 'Backup & DR'],
                },
                {
                    title: 'Secure Kubernetes',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    ),
                    items: ['Network policies', 'Secrets management', 'Security scanning', 'Image signing'],
                },
                {
                    title: 'Microservices & Deployments',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    ),
                    items: ['Canary deployments', 'Load balancer access', 'Encrypted secrets', 'Container registry'],
                },
                {
                    title: 'Cost Optimization',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                    ),
                    items: ['Right-sizing', 'Spot & reserved', 'Auto scaling', 'Usage tracking'],
                },
                {
                    title: 'Cloud-Native Tooling',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    ),
                    items: ['Terraform & IaC', 'Service mesh', 'Security first pipelines', 'Multi-cloud options'],
                },
            ],
        },
        // Why Kubernetes Section (matches Angular's dedicated section)
        {
            type: 'why-kubernetes' as const,
        },
        // Architecture Section
        {
            type: 'architecture' as const,
            title: 'Kubernetes Architecture',
            items: [
                'No public nodes',
                'Least-privilege access',
                'Encrypted secrets',
                'Controlled communication',
            ],
            diagram: (
                <img src="/image/photo2.png" alt="Kubernetes Architecture" className="w-full max-w-[55%] object-contain ml-14" />
            ),
        },
        // Tools Section
        {
            type: 'tools' as const,
            title: 'Platforms & Tools',
            tools: [
                {
                    icon: <img src="https://icon.icepanel.io/AWS/svg/Containers/EKS-Cloud.svg" alt="EKS" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/googlecloud/4285F4" alt="GKE" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/terraform/7B42BC" alt="Terraform" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/gitlab/FC6D26" alt="GitLab" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/prometheus/E6522C" alt="Prometheus" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/grafana/F46800" alt="Grafana" />
                },
            ],
        },
        // Two Column Section
        {
            type: 'two-column' as const,
            leftTitle: 'Who This Is For',
            leftItems: [
                'Startups scaling beyond VMs',
                'Teams with unstable clusters',
                'Enterprises standardizing Kubernetes',
                'Companies reducing cloud spend',
                'Engineering teams needing expert ops',
            ],
            rightTitle: 'Why Work With Us',
            rightItems: [
                'Production expertise',
                'SRE-style operations',
                'Security-first approach',
                'Cloud-agnostic delivery',
                'Clear accountability & reporting',
            ],
        },
    ];

    return (
        <ServiceTemplate
            title="Production-Grade Kubernetes Management"
            description="We design, secure and operate Kubernetes workloads for teams shipping real production traffic across clouds."
            heroIcon={<img src="/image/Kubernetes.png" alt="Kubernetes Management" className="w-full h-full object-contain rounded-2xl" />}
            sections={sections}
            showCloudProviders={true}
            cloudProviders={k8sProviders}
            providersTitle="Trusted Kubernetes Operations Across Cloud Providers"
        />
    );
}
