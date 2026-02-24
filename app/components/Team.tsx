'use client';

import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

export default function Team({
  title = "Meet Our Team",
  subtitle = "Expert cloud architects and engineers dedicated to your success",
  members: initialMembers
}: TeamProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default team data if none provided
  const defaultMembers: TeamMember[] = [
    {
      name: "Chetan Agrawal",
      role: "Cloud & DevOps Expert",
      bio: "With 18+ years in IT and 7+ years in AWS, I specialize in architecting highly available, scalable cloud infrastructures. Passionate about automation and sharing knowledge through practical, hands-on training.",
      image: "/image/team/chetan Agarwal.png",
      linkedin: 'https://www.linkedin.com/in/chetan-agrawal-30107310/',
      email: "chetan@axiicore.com"
    },
    {
      name: "Ranjeet Murade",
      role: "Solution & Enterprise Architecture Consultant",
      bio: "I help organisations translate business challenges into modern, scalable cloud and AI solutions. With 19+ years across solution consulting, pre-sales, cloud architecture, and digital transformation.",
      image: "/image/team/ranjeet murade.jpg",
      linkedin: 'https://www.linkedin.com/in/ranjeet-murade-66707a104/',
      email: "ranjeet@axiicore.com"
    }
  ];

  const members = initialMembers || defaultMembers;

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header - Left Aligned */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#FBB900] mb-4"></div>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Team Grid - Compact and elegant */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#FBB900] hover:shadow-md h-full">
                {/* Horizontal Layout: Image left, Name/Role right */}
                <div className="flex items-start gap-4 p-5">
                  {/* Circular Image - Left */}
                  {member.image ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FBB900] flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/10 flex items-center justify-center border-2 border-[#FBB900] flex-shrink-0">
                      <svg
                        className="w-10 h-10 text-[#FBB900]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}

                  {/* Name and Role - Right */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#FBB900]">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio and Links */}
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100 mt-auto">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FBB900] hover:text-white transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FBB900] hover:text-white transition-all"
                        aria-label="Twitter"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FBB900] hover:text-white transition-all"
                        aria-label="Email"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
