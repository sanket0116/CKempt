// SINGLE SOURCE OF TRUTH FOR ALL SERVICE DATA
// Update this file to reflect changes across the entire application
import React from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  title: string;
  client: string;
  description: string;
  results: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: React.ReactNode;
  excerpt: string;
  description: string;
  features: string[];
  category: 'cloud' | 'devops' | 'ai';
  
  // Optional: For service detail pages
  hero?: {
    title: string;
    description: string;
    animationPath?: string;
  };
  detailedFeatures?: ServiceFeature[];
  benefits?: ServiceFeature[];
  processSteps?: ProcessStep[];
  caseStudies?: CaseStudy[];
  faqs?: FAQItem[];
}

// ============================================
// COMPLETE SERVICE DATA
// ============================================

export const allServices: Service[] = [
  // ========== CLOUD SERVICES ==========
  {
    slug: 'cloud-consulting',
    title: 'Cloud Consulting & Strategy',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    excerpt: 'End-to-end consulting services aligned with your business',
    description: 'Our cloud consulting services provide strategic guidance to help you make informed decisions about your cloud journey. We work with you to develop roadmaps, assess opportunities, and implement best practices.',
    features: [
      'Cloud strategy development and roadmap planning',
      'Architecture design and technology selection',
      'Migration planning and execution strategies',
      'Cost optimization and ROI analysis',
      'Training and knowledge transfer'
    ]
  },
  {
    slug: 'modernization-migration',
    title: 'Migration & Modernization',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    excerpt: 'Modernizing business applications have become a necessity for businesses to sustain themselves',
    description: 'At ckempt, we understand this dire need of new-age businesses to have a strong support for their modernization and cloud migration needs. Our end-to-end cloud support services guide businesses through their migration journey by identifying and selecting the right cloud deployment platforms, along with testing and management, for optimized business outcomes.',
    features: [
      'Process-oriented cloud migration journey, using the right architecture, to achieve sustainable, strategic business growth.',
      'Optimized Efficiency through agile, scalable cloud solutions to retain a competitive advantage over dynamic market conditions.',
      'Built-in cloud security to effectively reduce expected and unexpected market disruptions and facilitate automated workflow.',
      'Improved Data Management and Analytics using the latest technologies, for better business decision-making and superior end-user experience.',
      'Cost optimization with streamlined resource allocation, automated process infrastructure and real-time maintenance.'
    ]
  },
  {
    slug: 'cloud-native-development',
    title: 'Cloud Native Development',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    excerpt: 'Transform legacy apps with cross-cloud compatibility',
    description: 'Build modern, scalable applications designed for the cloud. We help you leverage cloud-native technologies and architectures for maximum agility and efficiency.',
    features: [
      'Microservices architecture design',
      'Serverless application development',
      'API-first development approach',
      'Cloud-native database solutions',
      'Event-driven architecture implementation'
    ]
  },
  {
    slug: 'security-compliance',
    title: 'Security & Compliance',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    excerpt: 'Tools and strategies that ensure data security and compliance',
    description: 'Enterprise-grade security solutions to protect your cloud assets and ensure regulatory compliance. Our comprehensive security services protect your applications, data, and infrastructure from threats.',
    features: [
      'Multi-layered security architecture design',
      'Identity and access management (IAM)',
      'Encryption at rest and in transit',
      'Security monitoring and threat detection',
      'Compliance auditing and reporting'
    ]
  },
  {
    slug: 'hybrid-multicloud',
    title: 'Hybrid & Multicloud',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    excerpt: 'Customized approach for cross-cloud platform computing',
    description: 'Navigate the complexity of hybrid and multi-cloud environments. We design and implement solutions that work seamlessly across on-premises, private, and public clouds.',
    features: [
      'Multi-cloud strategy and architecture',
      'Hybrid cloud integration',
      'Cloud-agnostic solutions',
      'Workload portability',
      'Unified management and monitoring'
    ]
  },
  {
    slug: 'managed-services',
    title: 'Managed Services',
    category: 'cloud',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    excerpt: 'Full-spectrum services delivered through innovation and support',
    description: 'Comprehensive cloud management solutions to optimize performance, security, and cost efficiency. We provide end-to-end operational support for your cloud infrastructure.',
    features: [
      '24/7 infrastructure monitoring and alerting',
      'Automated backup and disaster recovery',
      'Security patching and compliance management',
      'Performance optimization and capacity planning',
      'Cost monitoring and optimization recommendations'
    ]
  },

  // ========== DEVOPS SERVICES ==========
  {
    slug: 'cicd-pipeline',
    title: 'CI/CD Pipeline Setup',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    excerpt: 'Automate your build, test, and deployment workflows with industry-standard CI/CD tools',
    description: 'Streamline your software delivery with automated CI/CD pipelines. We implement Jenkins, GitLab CI, GitHub Actions, and other industry-standard tools to automate your build, test, and deployment processes.',
    features: [
      'Automated build and test pipelines',
      'Multi-environment deployment strategies',
      'Integration with version control systems',
      'Automated rollback and recovery',
      'Pipeline monitoring and notifications'
    ]
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Infrastructure as Code (IaC)',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    excerpt: 'Provision and manage cloud resources efficiently using Terraform and Ansible',
    description: 'Manage your infrastructure as code with Terraform, Ansible, and CloudFormation. We help you version control your infrastructure, ensure consistency across environments, and enable rapid provisioning.',
    features: [
      'Terraform and Ansible implementation',
      'Infrastructure versioning and change management',
      'Multi-cloud resource provisioning',
      'Configuration drift detection',
      'Automated infrastructure testing'
    ]
  },
  {
    slug: 'cloud-deployment-automation',
    title: 'Cloud Deployment Automation',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    excerpt: 'Deploy and scale applications seamlessly across AWS, Azure, and GCP',
    description: 'Automate application deployments across multiple cloud platforms. We implement blue-green deployments, canary releases, and rolling updates to ensure zero-downtime deployments.',
    features: [
      'Multi-cloud deployment strategies',
      'Blue-green and canary deployments',
      'Auto-scaling configuration',
      'Load balancer integration',
      'Deployment health monitoring'
    ]
  },
  {
    slug: 'containerization-orchestration',
    title: 'Containerization & Orchestration',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    excerpt: 'Dockerize your workloads and orchestrate them with Kubernetes for high availability',
    description: 'Containerize your applications with Docker and orchestrate them using Kubernetes. We help you achieve high availability, automatic scaling, and efficient resource utilization.',
    features: [
      'Docker containerization strategy',
      'Kubernetes cluster setup and management',
      'Helm charts for application deployment',
      'Service mesh implementation',
      'Container security and scanning'
    ]
  },
  {
    slug: 'monitoring-observability',
    title: 'Monitoring & Observability',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    excerpt: 'Implement end-to-end visibility with Prometheus, Grafana, and ELK stack dashboards',
    description: 'Gain complete visibility into your infrastructure and applications with comprehensive monitoring and observability solutions. We implement Prometheus, Grafana, ELK stack, and distributed tracing.',
    features: [
      'Prometheus and Grafana setup',
      'ELK stack for log aggregation',
      'Distributed tracing implementation',
      'Custom alerting and notifications',
      'Performance metrics and SLA tracking'
    ]
  },
  {
    slug: 'security-compliance-automation',
    title: 'Security & Compliance Automation',
    category: 'devops',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    excerpt: 'Integrate security scans, policy enforcement, and compliance checks into your pipelines',
    description: 'Automate security and compliance in your DevOps pipelines. We integrate security scanning, vulnerability assessment, policy enforcement, and compliance checks.',
    features: [
      'Automated security scanning in CI/CD',
      'Container vulnerability assessment',
      'Policy as code implementation',
      'Compliance reporting and auditing',
      'Secret management and rotation'
    ]
  },

  // ========== AI SERVICES ==========
  
  {
    slug: 'rag-solutions',
    title: 'RAG Solutions',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    excerpt: 'Retrieval-Augmented Generation for intelligent AI applications',
    description: 'Implement cutting-edge RAG (Retrieval-Augmented Generation) systems that combine the power of large language models with your proprietary data. Our RAG solutions enable accurate, context-aware AI responses grounded in your organization\'s knowledge base.',
    features: [
      'Custom vector database implementation',
      'Document ingestion and chunking strategies',
      'Semantic search and retrieval optimization',
      'LLM integration and prompt engineering',
      'Real-time knowledge base updates'
    ]
  },
  {
    slug: 'n8n-automation',
    title: 'N8N Workflow Automation',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    excerpt: 'Automate complex workflows with the powerful N8N platform',
    description: 'Streamline your business operations with N8N, the fair-code workflow automation platform. We design and implement custom automation workflows that connect your apps, databases, and services, eliminating manual tasks and boosting productivity.',
    features: [
      'Custom workflow design and implementation',
      'API integration and data synchronization',
      'Event-driven automation triggers',
      'Self-hosted or cloud deployment options',
      'Workflow monitoring and optimization'
    ]
  },
  {
    slug: 'ai-ml-models',
    title: 'AI/ML Model Deployment',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    excerpt: 'Deploy and scale AI/ML models in production environments',
    description: 'Take your machine learning models from development to production with our comprehensive deployment services. We handle infrastructure setup, model serving, monitoring, and scaling to ensure your AI applications perform reliably at scale.',
    features: [
      'Model containerization and deployment',
      'Auto-scaling and load balancing',
      'A/B testing and model versioning',
      'Performance monitoring and drift detection',
      'GPU-optimized infrastructure'
    ]
  },
  {
    slug: 'llm-integration',
    title: 'LLM Integration',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    excerpt: 'Integrate large language models into your applications seamlessly',
    description: 'Harness the power of GPT-4, Claude, Llama, and other leading LLMs in your applications. We provide end-to-end integration services including API setup, prompt engineering, fine-tuning, and cost optimization strategies.',
    features: [
      'Multi-LLM provider integration',
      'Prompt engineering and optimization',
      'Fine-tuning for domain-specific tasks',
      'Cost management and token optimization',
      'Safety filters and content moderation'
    ]
  },
  {
    slug: 'ai-chatbots',
    title: 'AI Chatbots & Assistants',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    excerpt: 'Build intelligent conversational AI solutions for customer engagement',
    description: 'Create sophisticated AI-powered chatbots and virtual assistants that understand context, handle complex queries, and provide personalized experiences. Our solutions integrate with your existing systems and scale with your business.',
    features: [
      'Natural language understanding (NLU)',
      'Multi-channel deployment (web, mobile, messaging)',
      'Context-aware conversation management',
      'CRM and database integration',
      'Analytics and conversation insights'
    ]
  },
  {
    slug: 'vector-databases',
    title: 'Vector Databases',
    category: 'ai',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    excerpt: 'Implement semantic search with advanced vector database solutions',
    description: 'Power your AI applications with high-performance vector databases for semantic search, recommendation systems, and similarity matching. We implement and optimize solutions using Pinecone, Weaviate, Qdrant, and other leading vector databases.',
    features: [
      'Vector database selection and setup',
      'Embedding generation and optimization',
      'Similarity search implementation',
      'Hybrid search (vector + keyword)',
      'Performance tuning and scaling'
    ]
  },
];

// ============================================
// CATEGORIZED SERVICES (for navigation/filtering)
// ============================================

export const categorizedServices = {
  cloud: allServices.filter(s => s.category === 'cloud').map(s => ({
    slug: s.slug,
    title: s.title,
    icon: s.icon,
    excerpt: s.excerpt
  })),
  devops: allServices.filter(s => s.category === 'devops').map(s => ({
    slug: s.slug,
    title: s.title,
    icon: s.icon,
    excerpt: s.excerpt
  })),
  ai: allServices.filter(s => s.category === 'ai').map(s => ({
    slug: s.slug,
    title: s.title,
    icon: s.icon,
    excerpt: s.excerpt
  }))
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getServiceBySlug = (slug: string): Service | undefined => {
  return allServices.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: 'cloud' | 'devops' | 'ai'): Service[] => {
  return allServices.filter(s => s.category === category);
};

export const getAllServices = (): Service[] => {
  return allServices;
};

// Legacy exports for backward compatibility
export const detailedServices = allServices;

// ============================================
// DEFAULT DATA FOR SERVICE DETAIL PAGES
// ============================================

// Default process steps used across all services
export const defaultProcessSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Discovery & Assessment',
    description: 'We analyze your current infrastructure and understand your business goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: '2',
    title: 'Strategy & Planning',
    description: 'We create a comprehensive roadmap tailored to your needs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    number: '3',
    title: 'Implementation',
    description: 'Our experts execute the plan with precision and care.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: '4',
    title: 'Optimization & Support',
    description: 'We monitor, optimize, and provide ongoing support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

// Default case studies used across all services
export const defaultCaseStudies: CaseStudy[] = [
  {
    title: 'Enterprise Digital Transformation',
    client: 'Fortune 500 Company',
    description: 'Successfully migrated legacy systems to modern cloud infrastructure with zero downtime.',
    results: ['50% cost reduction', '99.99% uptime achieved', '3x faster deployment']
  },
  {
    title: 'Startup Scalability Solution',
    client: 'Tech Startup',
    description: 'Built scalable cloud architecture enabling rapid growth from 100 to 10,000 users.',
    results: ['10x traffic handling', 'Auto-scaling enabled', '40% cost savings']
  },
  {
    title: 'Healthcare Compliance Migration',
    client: 'Healthcare Provider',
    description: 'Secure, compliant cloud migration meeting all HIPAA and regulatory requirements.',
    results: ['100% compliance', 'Enhanced security', 'Reduced operational costs']
  }
];

// Helper function to generate default FAQs for a service
export const getDefaultFAQs = (serviceTitle: string): FAQItem[] => [
  {
    question: `What is included in ${serviceTitle}?`,
    answer: `Our ${serviceTitle} includes comprehensive support, expert consultation, and ongoing maintenance. We provide end-to-end solutions tailored to your specific business needs.`
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timeline varies based on your specific requirements, typically ranging from 2-12 weeks. We provide a detailed timeline during the planning phase.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer 24/7 technical support and ongoing maintenance to ensure your systems run smoothly and efficiently.'
  },
  {
    question: 'What are the costs involved?',
    answer: 'Costs vary depending on the scope and complexity of your project. We offer flexible pricing models including pay-as-you-go, monthly plans, and custom enterprise solutions.'
  }
];
