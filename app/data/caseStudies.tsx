export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'tiebar-aws-migration',
    client: 'TieBar',
    title: 'AWS Cloud Migration & Modernization',
    industry: 'E-Commerce & Retail',
    challenge: 'TieBar faced scalability issues with their on-premises infrastructure during peak shopping seasons. Their legacy systems struggled to handle traffic spikes, resulting in slow page load times and potential revenue loss. They needed a robust, scalable solution that could grow with their business.',
    solution: 'Axiicore designed and executed a comprehensive AWS migration strategy. We migrated their entire e-commerce platform to AWS, implementing Auto Scaling Groups, Amazon RDS for database management, CloudFront for content delivery, and S3 for static asset storage. We also implemented CI/CD pipelines using AWS CodePipeline and modernized their monolithic application into microservices architecture using ECS and Lambda.',
    results: [
      { metric: 'Performance Improvement', value: '300%' },
      { metric: 'Infrastructure Costs Reduced', value: '45%' },
      { metric: 'Uptime', value: '99.99%' },
      { metric: 'Page Load Time Reduced', value: '70%' },
    ],
    technologies: ['AWS', 'EC2', 'RDS', 'CloudFront', 'S3', 'ECS', 'Lambda', 'CodePipeline'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
    testimonial: {
      quote: 'Axiicore transformed our infrastructure completely. The migration was seamless, and we now have the scalability and reliability we always needed. Our customers notice the difference.',
      author: 'Michael Chen',
      position: 'CTO, TieBar',
    },
  },
  {
    id: 'lkab-iot-platform',
    client: 'LKAB',
    title: 'IoT Platform & Real-Time Monitoring Solution',
    industry: 'Mining & Industrial',
    challenge: 'LKAB, a leading mining company, needed to modernize their equipment monitoring systems. Their legacy infrastructure lacked real-time insights into equipment performance, leading to unexpected downtime and maintenance inefficiencies. They required a scalable IoT platform to monitor thousands of sensors across multiple mining sites.',
    solution: 'Axiicore built a comprehensive IoT platform on AWS, leveraging AWS IoT Core, Kinesis Data Streams, and Lambda for real-time data processing. We implemented a data lake using S3 and Athena for historical analysis, and created custom dashboards using QuickSight. The solution included predictive maintenance algorithms using SageMaker ML models to forecast equipment failures before they occur.',
    results: [
      { metric: 'Equipment Downtime Reduced', value: '60%' },
      { metric: 'Maintenance Cost Savings', value: '35%' },
      { metric: 'Sensor Data Points Processed Daily', value: '50M+' },
      { metric: 'Real-Time Alert Response', value: '<5 seconds' },
    ],
    technologies: ['AWS IoT Core', 'Kinesis', 'Lambda', 'SageMaker', 'S3', 'Athena', 'QuickSight', 'DynamoDB'],
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&crop=center',
    testimonial: {
      quote: 'The IoT platform has revolutionized how we monitor and maintain our equipment. Predictive maintenance has saved us millions in unplanned downtime.',
      author: 'Lars Andersson',
      position: 'Head of Digital Operations, LKAB',
    },
  },
  {
    id: 'bostonscally-devops-transformation',
    client: 'BostonScally',
    title: 'DevOps Transformation & CI/CD Implementation',
    industry: 'Fashion & Apparel',
    challenge: 'BostonScally struggled with slow deployment cycles, taking weeks to push new features to production. Manual deployment processes led to frequent errors and rollback scenarios. Development and operations teams worked in silos, creating bottlenecks and reducing overall productivity.',
    solution: 'Axiicore implemented a complete DevOps transformation, establishing a CI/CD pipeline using GitHub Actions, Docker, and Kubernetes. We introduced infrastructure as code using Terraform, implemented automated testing frameworks, and set up comprehensive monitoring with Prometheus and Grafana. We also conducted team training and established DevOps best practices and culture.',
    results: [
      { metric: 'Deployment Frequency', value: '50x faster' },
      { metric: 'Lead Time for Changes', value: 'From weeks to hours' },
      { metric: 'Deployment Failure Rate', value: '80% reduction' },
      { metric: 'Mean Time to Recovery', value: '90% faster' },
    ],
    technologies: ['Kubernetes', 'Docker', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana', 'AWS EKS'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
    testimonial: {
      quote: 'Axiicore didn&#39;t just implement tools—they transformed our entire culture. We&#39;re now able to innovate and respond to market changes at a pace we never thought possible.',
      author: 'Sarah O\'Connor',
      position: 'VP of Engineering, BostonScally',
    },
  },
  {
    id: 'pedalmafia-kubernetes-orchestration',
    client: 'PedalMafia',
    title: 'Kubernetes Orchestration & Microservices Architecture',
    industry: 'Sports & E-Commerce',
    challenge: 'PedalMafia\'s monolithic application architecture was becoming increasingly difficult to maintain and scale. Deployments required full system downtime, and scaling individual components was impossible. The development team struggled with code conflicts and long testing cycles as the application grew in complexity.',
    solution: 'Axiicore architected and implemented a microservices-based solution using Kubernetes on AWS EKS. We decomposed the monolithic application into 15+ independent microservices, implemented service mesh using Istio for secure service-to-service communication, and set up horizontal pod autoscaling. We also established comprehensive logging and tracing using ELK stack and Jaeger.',
    results: [
      { metric: 'Deployment Downtime', value: 'Zero' },
      { metric: 'Service Scalability', value: 'Independent scaling per service' },
      { metric: 'Development Velocity', value: '3x increase' },
      { metric: 'System Reliability', value: '99.95% uptime' },
    ],
    technologies: ['Kubernetes', 'AWS EKS', 'Istio', 'Docker', 'Helm', 'ELK Stack', 'Jaeger', 'Redis', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    testimonial: {
      quote: 'The microservices architecture has given us incredible flexibility. We can now deploy updates multiple times a day without any service disruption.',
      author: 'James Murphy',
      position: 'CTO, PedalMafia',
    },
  },
  {
    id: 'microlise-telematics-security',
    client: 'Microlise Telematics',
    title: 'Cloud Security & Compliance Implementation',
    industry: 'Transportation & Logistics',
    challenge: 'Microlise Telematics handles sensitive vehicle tracking and driver data for major logistics companies. They needed to achieve SOC 2 Type II compliance while strengthening their cloud security posture. Their existing security measures were fragmented, and they lacked comprehensive visibility into their security events and potential threats.',
    solution: 'Axiicore implemented a comprehensive security framework on AWS. We deployed AWS Security Hub, GuardDuty, and CloudTrail for continuous monitoring. Implemented encryption at rest and in transit using AWS KMS, established multi-account strategy using AWS Organizations and Control Tower, and set up automated compliance checking. We also conducted security training and established incident response procedures, achieving SOC 2 Type II compliance.',
    results: [
      { metric: 'Security Incidents', value: '95% reduction' },
      { metric: 'Compliance Achieved', value: 'SOC 2 Type II' },
      { metric: 'Threat Detection Time', value: '90% faster' },
      { metric: 'Data Encryption Coverage', value: '100%' },
    ],
    technologies: ['AWS Security Hub', 'GuardDuty', 'CloudTrail', 'KMS', 'AWS Organizations', 'Config', 'WAF', 'Shield'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center',
    testimonial: {
      quote: 'Axiicore&#39;s expertise in cloud security gave us the confidence to pursue and achieve SOC 2 compliance. Their comprehensive approach covered every aspect of our security needs.',
      author: 'David Richardson',
      position: 'CISO, Microlise Telematics',
    },
  },
];
