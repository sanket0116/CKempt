import ServiceTemplate from '../../../components/ServiceTemplate';

export default function DevOpsServicesPage() {
    const sections = [
        // DevOps Automation Tools Section (after hero)
        {
            type: 'tools' as const,
            title: 'Reliable DevOps & Automation Across Any Cloud',
            tools: [
                {
                    name: 'GitHub',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-full h-full object-contain" />
                },
                {
                    name: 'Jenkins',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" alt="Jenkins" className="w-full h-full object-contain" />
                },
                {
                    name: 'Docker',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" className="w-full h-full object-contain" />
                },
                {
                    name: 'Terraform',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" alt="Terraform" className="w-full h-full object-contain" />
                },
            ],
        },
        // Numbered Services Section
        {
            type: 'numbered-services' as const,
            title: 'What We Do',
            services: [
                {
                    number: '01',
                    title: 'CI/CD Pipeline Setup',
                    items: [
                        'Automated build and test pipelines',
                        'Multi-environment deployment strategies',
                        'Integration with version control',
                        'Pipeline monitoring and notifications',
                    ],
                    diagram: (
                        <img src="/image/CICD.png" alt="CI/CD Pipeline" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '02',
                    title: 'Infrastructure as Code',
                    items: [
                        'Terraform and Ansible implementation',
                        'Infrastructure versioning',
                        'Multi-cloud resource provisioning',
                        'Configuration drift detection',
                    ],
                    diagram: (
                        <img src="/image/Infrastructure.png" alt="Infrastructure as Code" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '03',
                    title: 'Cloud Deployment',
                    items: [
                        'Multi-cloud deployment strategies',
                        'Blue-green and canary deployments',
                        'Auto-scaling configuration',
                        'Load balancer integration',
                    ],
                    diagram: (
                        <img src="/image/Deployment.png" alt="Cloud Deployment" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '04',
                    title: 'Kubernetes & Orchestration',
                    items: [
                        'Kubernetes cluster setup',
                        'Helm charts deployment',
                        'Service mesh implementation',
                        'Container security scanning',
                    ],
                    diagram: (
                        <img src="/image/Containerization.png" alt="Kubernetes & Orchestration" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '05',
                    title: 'Monitoring & Observability',
                    items: [
                        'Prometheus and Grafana setup',
                        'ELK stack for log aggregation',
                        'Distributed tracing',
                        'Custom alerting and SLA tracking',
                    ],
                    diagram: (
                        <img src="/image/Monitoring.png" alt="Monitoring & Observability" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
                {
                    number: '06',
                    title: 'Security & Compliance',
                    items: [
                        'Automated security scanning in CI/CD',
                        'Container vulnerability assessment',
                        'Policy as code implementation',
                        'Secret management and rotation',
                    ],
                    diagram: (
                        <img src="/image/Security.png" alt="Security & Compliance" className="w-full h-64 object-cover rounded-lg" />
                    ),
                },
            ],
        },
        // Process Section
        {
            type: 'process' as const,
            title: 'Our Process',
            steps: [
                { number: '1', title: 'Discover & Assess', description: 'Analyze your current DevOps maturity and infrastructure' },
                { number: '2', title: 'Strategy & Design', description: 'Create comprehensive automation roadmap' },
                { number: '3', title: 'Implementation', description: 'Build and deploy CI/CD pipelines and infrastructure' },
                { number: '4', title: 'Optimize & Support', description: 'Monitor, improve, and provide ongoing assistance' },
            ],
        },
        // Tools Section
        {
            type: 'tools' as const,
            title: 'Platforms & Tools',
            tools: [
                {
                    name: 'Git',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" className="w-full h-full object-contain" />
                },
                {
                    name: 'GitHub',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-full h-full object-contain" />
                },
                {
                    name: 'Jenkins',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg" alt="Jenkins" className="w-full h-full object-contain" />
                },
                {
                    name: 'Docker',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" className="w-full h-full object-contain" />
                },
                {
                    name: 'Terraform',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg" alt="Terraform" className="w-full h-full object-contain" />
                },
                {
                    name: 'Ansible',
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" alt="Ansible" className="w-full h-full object-contain" />
                },
            ],
        },
        // Benefits Grid
        {
            type: 'benefits-grid' as const,
            title: 'Why Choose Our DevOps Services',
            benefits: [
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    ),
                    title: 'Faster delivery without compromising quality',
                    description: 'Ship features faster with automated testing and deployment pipelines',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    ),
                    title: 'Built-in security into entire CI/CD',
                    description: 'Security scanning and compliance checks integrated into your pipeline',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    ),
                    title: ' 100% visibility of each of your deployment',
                    description: 'Complete observability with real-time monitoring and alerting',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    ),
                    title: 'Balanced continuous integration & product delivery',
                    description: 'Optimize your development workflow for maximum efficiency',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    ),
                    title: 'Infrastructure-as-code to accelerate provisioning',
                    description: 'Automate infrastructure management with version-controlled code',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    ),
                    title: 'Best practices for your growing engineering',
                    description: 'Scale your team with proven DevOps practices and patterns',
                },
            ],
        },
        // FAQ Section
        {
            type: 'faq' as const,
            title: 'FAQs of DevOps Automation',
            faqs: [
                {
                    question: 'WHAT IS CI/CD AND HOW DOES CI/CD AUTOMATION HELP YOUR BUSINESS?',
                    answer: 'CI/CD (Continuous Integration/Continuous Deployment) is a method to frequently deliver apps to customers by introducing automation into the stages of app development. It helps reduce manual errors, provides faster feedback, and enables rapid deployment cycles.',
                },
                {
                    question: 'HOW MUCH DOES IT COST FOR DEVOPS SERVICES?',
                    answer: 'The cost varies based on your specific needs, infrastructure complexity, and the level of automation required. We offer customized pricing plans tailored to your requirements. Contact us for a detailed quote.',
                },
                {
                    question: 'WHAT DO YOU EXPECT?',
                    answer: 'We expect active collaboration from your team, access to your current infrastructure, and clear communication about your business goals and technical requirements. This helps us deliver the best DevOps solutions for your needs.',
                },
                {
                    question: 'WHY IS DEVOPS AUTOMATION RECOMMENDED?',
                    answer: 'DevOps automation reduces manual effort, minimizes errors, accelerates delivery cycles, improves reliability, and allows your team to focus on innovation rather than repetitive tasks. It is essential for modern software development.',
                },
            ],
        },
    ];

    return (
        <ServiceTemplate
            title="DevOps & Automation Without the Guesswork"
            description="Automate your build, test, deploy, and monitor workflows with industry-standard CI/CD patterns, infrastructure as code, and real-time observability."
            heroIcon={<img src="/image/Automation.png" alt="DevOps Automation" className="w-full h-full object-contain rounded-2xl" />}
            sections={sections}
            showCloudProviders={false}
        />
    );
}
