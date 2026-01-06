import ServiceTemplate from '../components/ServiceTemplate';

export default function AllServicesPage() {
  const sections = [
    // What We Do Section - Grid of basic sections
    {
      type: 'basic' as const,
      title: 'Platform Design',
      items: [
        'Multi-AZ clusters',
        'Private networking',
        'High availability',
        'Role-based access',
      ],
    },
    {
      type: 'basic' as const,
      title: 'Cloud Operations',
      items: [
        'Cluster upgrades',
        'Monitoring setup',
        'Security patches',
        'Backup & DR',
      ],
    },
    {
      type: 'basic' as const,
      title: 'Secure Infrastructure',
      items: [
        'Network policies',
        'Secrets management',
        'Security scanning',
        'Image signing',
      ],
    },
    // You can add more section types
    {
      type: 'diagram' as const,
      title: 'Our Cloud Architecture',
      items: [
        'Multi-cloud compatibility',
        'Automated deployments',
        'Scalable infrastructure',
        'Cost-optimized resources',
      ],
      diagram: (
        <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-600">Your architecture diagram here</span>
        </div>
      ),
    },
    {
      type: 'tools' as const,
      title: 'Platforms & Tools',
      tools: [
        { name: 'Terraform' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'GitLab' },
        { name: 'Prometheus' },
        { name: 'Grafana' },
      ],
    },
    {
      type: 'two-column' as const,
      leftTitle: 'Who This Is For',
      leftItems: [
        'Startups scaling beyond VMs',
        'Teams with unstable clusters',
        'Enterprises standardizing Kubernetes',
        'Companies adopting cloud-native',
      ],
      rightTitle: 'Why Work With Us',
      rightItems: [
        'Production expertise',
        'SRE-style operations',
        'Security-first approach',
        'Cloud-agnostic delivery',
      ],
    },
    {
      type: 'process' as const,
      title: 'Our Process',
      steps: [
        { number: '1', title: 'Discovery & Assessment', description: 'We analyze your infrastructure and requirements' },
        { number: '2', title: 'Strategy & Planning', description: 'Create comprehensive roadmap for implementation' },
        { number: '3', title: 'Implementation', description: 'Execute with precision and best practices' },
        { number: '4', title: 'Optimization', description: 'Monitor and continuously improve performance' },
      ],
    },
  ];

  return (
    <ServiceTemplate
      title="Production-Grade Cloud Solutions"
      description="We design, secure and operate cloud infrastructure for teams shipping real production traffic across clouds."
      sections={sections}
      showCloudProviders={true}
    />
  );
}
