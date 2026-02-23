'use client';

import { useRouter } from 'next/navigation';

export default function Testimonials() {
  const router = useRouter();

  const caseStudies = [
    {
      title: "Kubernetes Migration for E-Commerce Platform",
      description: "Migrated a legacy monolith to microservices on Kubernetes, achieving 99.99% uptime and reducing infrastructure costs by 40% while scaling to handle 10x traffic during peak seasons.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    },
    {
      title: "AWS Cloud Modernization for FinTech Startup",
      description: "Architected and deployed a secure, scalable AWS infrastructure with automated CI/CD pipelines, enabling the team to ship features 5x faster with zero-downtime deployments.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    },
    {
      title: "DevOps Transformation for Healthcare SaaS",
      description: "Implemented Infrastructure as Code with Terraform, automated monitoring, and established DevOps best practices, reducing deployment time from days to minutes.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    }
  ];

  return (
    <section id="projects" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[#f5bf29] font-semibold text-sm tracking-wide uppercase block mb-2">
            Our Case Studies
          </span>
          <h2 className="text-[2.5rem] font-light text-[#0f172a] relative inline-block pb-3
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[70px] after:h-1 after:bg-[#f5bf29] after:rounded">
            Recently Completed Projects
          </h2>
        </div>

        {/* Projects Grid — 3 columns with dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-0">
          {caseStudies.map((project, i) => {
            const isLast = i === caseStudies.length - 1;
            const isMiddle = i === 1;
            return (
              <div
                key={i}
                className={`flex flex-col px-4 py-1 ${!isLast ? 'lg:border-r border-black/[0.08]' : ''}`}
              >
                {!isMiddle ? (
                  /* Card 1 & 3: Image top, text bottom */
                  <>
                    <div className="mb-3 overflow-hidden rounded-xl shadow-sm" style={{ aspectRatio: '24/9' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-[1.15rem] font-extrabold text-[#0f172a] leading-tight tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-1">
                        {project.description}
                      </p>
                      <div className="text-right">
                        <button
                          onClick={() => router.push('/case-studies')}
                          className="inline-flex items-center gap-2 text-[#f5bf29] text-sm font-normal hover:text-[#0f172a] transition-colors group"
                        >
                          More
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Card 2: Text top, image bottom */
                  <>
                    <div className="mb-3">
                      <h3 className="text-[1.15rem] font-extrabold text-[#0f172a] leading-tight tracking-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        {project.description}
                      </p>
                      <div className="text-right mb-3">
                        <button
                          onClick={() => router.push('/case-studies')}
                          className="inline-flex items-center gap-2 text-[#f5bf29] text-sm font-normal hover:text-[#0f172a] transition-colors group"
                        >
                          More
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-auto overflow-hidden rounded-xl shadow-sm" style={{ aspectRatio: '24/9' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
