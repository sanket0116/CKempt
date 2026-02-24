import ServiceTemplate from '../../../components/ServiceTemplate';

const devopsProviders = [
    { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Jenkins', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg' },
    { name: 'Docker', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
    { name: 'Terraform', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg' },
];

export default function DevOpsServicesPage() {
    const sections = [

        // Numbered Services Section
        {
            type: 'numbered-services' as const,
            title: 'What We Do',
            subtitle: 'Streamline your software delivery with automated pipelines and policy-as-code.',
            services: [
                {
                    number: '01',
                    title: 'CI/CD Pipeline Setup',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    ),
                    items: [
                        'Automated build, test, and deployment pipelines',
                        'Faster releases with reduced manual errors',
                        'Scalable CI/CD using industry-standard tools',
                        'Reliable and consistent software delivery',
                    ],
                    diagram: (
                        <img src="/image/CICD.png" alt="CI/CD Pipeline" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '02',
                    title: 'Infrastructure as Code',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    ),
                    items: [
                        'Automate cloud infrastructure using Terraform and Ansible',
                        'Consistent, repeatable, and version-controlled environments',
                        'Faster provisioning with reduced configuration errors',
                        'Scalable infrastructure across multiple cloud platforms',
                    ],
                    diagram: (
                        <img src="/image/Infrastructure.png" alt="Infrastructure as Code" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '03',
                    title: 'Cloud Deployment',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    ),
                    items: [
                        'Deploy and scale applications across AWS, Azure, and GCP',
                        'Ensure high availability and performance in cloud environments',
                        'Automate cloud deployments for faster and reliable releases',
                        'Implement Infrastructure as Code (IaC) to create consistent, repeatable, and version-controlled cloud environments',
                    ],
                    diagram: (
                        <img src="/image/Deployment.png" alt="Cloud Deployment" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '04',
                    title: 'Containerization & Orchestration',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    ),
                    items: [
                        'Dockerize applications for consistent environments',
                        'Orchestrate containers using Kubernetes',
                        'High availability and automated scaling',
                        'Efficient resource utilization and deployment',
                    ],
                    diagram: (
                        <img src="/image/Containerization.png" alt="Container Orchestration" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '05',
                    title: 'Monitoring & Observability',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    ),
                    items: [
                        'Real-time system and application monitoring',
                        'Centralized logging and metrics visibility',
                        'Proactive issue detection and alerting',
                        'Distributed tracing and performance insights',
                    ],
                    diagram: (
                        <img src="/image/Monitoring.png" alt="Monitoring Dashboards" className="w-full h-full object-contain" />
                    ),
                },
                {
                    number: '06',
                    title: 'Security & Compliance',
                    icon: (
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    ),
                    items: [
                        'Integrate security scans into CI/CD pipelines',
                        'Enforce policies and compliance automatically',
                        'Identify vulnerabilities early in the development cycle',
                        'Continuous security monitoring and automated remediation',
                    ],
                    diagram: (
                        <img src="/image/Security.png" alt="Security & Compliance" className="w-full h-full object-contain" />
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
                    icon: <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="w-full h-full object-contain" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-full h-full object-contain" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/jenkins/D24939" alt="Jenkins" className="w-full h-full object-contain" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-full h-full object-contain" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/terraform/7B42BC" alt="Terraform" className="w-full h-full object-contain" />
                },
                {
                    icon: <img src="https://cdn.simpleicons.org/ansible/EE0000" alt="Ansible" className="w-full h-full object-contain" />
                },
            ],
        },
        // Benefits Grid
        {
            type: 'benefits-grid' as const,
            title: 'Key Benefits',
            benefits: [
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 13.333a5.833 5.833 0 01-11.667 0 5.833 5.833 0 0111.667 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.333 19.167L8.667 14.5M16.667 11.667l2.666 2.666-4.666 4.667m4.666-4.667l-4.666-4.666 4.666 4.666z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.667 17.5l-4.167-4.167M9.167 6.667L19.167 3.333 15.833 13.333 13.333 10 9.167 6.667z" />
                        </svg>
                    ),
                    title: 'Faster delivery cycles and market reach',
                    description: 'Automated pipelines accelerate releases and shorten feedback loops.',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    ),
                    title: 'Efficient scaling with reduced risk',
                    description: 'Policy-as-code keeps infrastructure consistent as teams scale.',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    ),
                    title: 'Early detection of errors allows timely fixes',
                    description: 'Integrated monitoring spots regressions before they hit production.',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    ),
                    title: 'Enhanced security packaged with automated compliances',
                    description: 'Security scans, IaC guardrails, and compliance checks run continuously.',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    ),
                    title: 'Improved collaboration saves time increase team efficiency',
                    description: 'Shared dashboards align developers, ops, and security teams.',
                },
                {
                    icon: (
                        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    ),
                    title: 'Faster response to evolving customer and market demands',
                    description: 'GitOps workflows keep feature delivery nimble and repeatable.',
                },
            ],
        },
        // Who / Why Section
        {
            type: 'two-column' as const,
            leftTitle: 'Who This Is For',
            leftItems: [
                'Fast-growing startups scaling beyond manual ops',
                'Engineering teams struggling with deployment bottlenecks',
                'Enterprises modernizing legacy CI/CD pipelines',
                'Companies adopting a Security-First (DevSecOps) culture',
                'SaaS providers requiring high-availability environments',
            ],
            rightTitle: 'Why Work With Us',
            rightItems: [
                'Accelerated release velocity with high confidence',
                'Lower operational risk through automated testing',
                'Standardized, reproducible environments across teams',
                'Early bug detection with shifting left on security',
                'Maximized engineering productivity and focus',
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
            heroIcon={<img src="/image/Automation.png" alt="DevOps Automation" className="w-full h-full object-contain" />}
            sections={sections}
            showCloudProviders={true}
            cloudProviders={devopsProviders}
            providersTitle="Reliable DevOps & Automation Across Any Cloud"
        />
    );
}
