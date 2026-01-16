'use client';

export default function Testimonials() {
  const caseStudies = [
    {
      title: "Kubernetes Migration for E-Commerce Platform",
      description: "Migrated a legacy monolith to microservices on Kubernetes, achieving 99.99% uptime and reducing infrastructure costs by 40% while scaling to handle 10x traffic during peak seasons.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      title: "AWS Cloud Modernization for FinTech Startup",
      description: "Architected and deployed a secure, scalable AWS infrastructure with automated CI/CD pipelines, enabling the team to ship features 5x faster with zero-downtime deployments.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
    },
    {
      title: "DevOps Transformation for Healthcare SaaS",
      description: "Implemented Infrastructure as Code with Terraform, automated monitoring, and established DevOps best practices, reducing deployment time from days to minutes.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    }
  ];

  const clients = [
    { name: "FinTech Co" },
    { name: "HealthTech" },
    { name: "E-Commerce" },
    { name: "SaaS Platform" },
    { name: "Enterprise" },
    { name: "Retail Tech" }
  ];

  return (
    <>
      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-bold text-[#FBB900] tracking-widest mb-3">OUR CASE STUDIES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Recently Completed Projects
            </h2>
          </div>

          {/* Case Studies Grid with Criss-Cross Pattern */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`group cursor-pointer flex ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}`}
              >
                {/* Image */}
                <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FBB900] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-[#FBB900] tracking-widest mb-3">OUR CLIENTS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are Associated With
            </h2>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-all">
                <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                  <span className="text-xs text-gray-600 font-semibold">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
