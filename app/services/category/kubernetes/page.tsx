import ServiceTemplate from '../../../components/ServiceTemplate';

export default function KubernetesServicesPage() {
    const sections = [
        // Grid Services Section  
        {
            type: 'grid-services' as const,
            title: 'What We Do',
            services: [
                {
                    title: 'Platform Design',
                    items: [
                        'Multi-AZ clusters',
                        'Private networking',
                        'High availability',
                        'Role-based access',
                    ],
                },
                {
                    title: 'Kubernetes Ops',
                    items: [
                        'Cluster upgrades',
                        'Monitoring setup',
                        'Security patches',
                        'Backup & DR',
                    ],
                },
                {
                    title: 'Secure Kubernetes',
                    items: [
                        'Network policies',
                        'Secrets management',
                        'Security scanning',
                        'Image signing',
                    ],
                },
                {
                    title: 'Microservices & Deployments',
                    items: [
                        'Canary deployments',
                        'Load balancer access',
                        'Encrypted secrets',
                        'Container registry',
                    ],
                },
                {
                    title: 'Cost Optimization',
                    items: [
                        'Right-sizing',
                        'Spot & reserved',
                        'Auto scaling',
                        'Usage tracking',
                    ],
                },
                {
                    title: 'Cloud-Native Tooling',
                    items: [
                        'Terraform & IaC',
                        'Service mesh',
                        'Security first pipelines',
                        'Multi-cloud options',
                    ],
                },
            ],
        },
        // Architecture Section
        {
            type: 'architecture' as const,
            title: 'Kubernetes Architecture',
            items: [
                'No public nodes',
                'Leader/follower access',
                'Encrypted secrets',
                'Controlled communication',
            ],
            diagram: (
                <img src="/image/photo2.png" alt="Kubernetes Architecture" className="w-full h-full object-contain rounded-lg" />
            ),
        },
        // Tools Section
        {
            type: 'tools' as const,
            title: 'Platforms & Tools',
            tools: [
                {
                    name: 'EKS',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="EKS" className="w-full h-full object-contain" />
                },
                {
                    name: 'GKE',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="GKE" className="w-full h-full object-contain" />
                },
                {
                    name: 'Terraform',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" alt="Terraform" className="w-full h-full object-contain" />
                },
                {
                    name: 'GitLab',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" alt="GitLab" className="w-full h-full object-contain" />
                },
                {
                    name: 'Prometheus',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" alt="Prometheus" className="w-full h-full object-contain" />
                },
                {
                    name: 'Grafana',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg" alt="Grafana" className="w-full h-full object-contain" />
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
                'Companies adopting cloud-native apps',
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
            providersTitle="Trusted Kubernetes operations Across cloud Providers"
        />
    );
}
