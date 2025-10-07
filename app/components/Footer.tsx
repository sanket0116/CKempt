'use client';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  sections?: FooterSection[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  contactEmail?: string;
}

export default function Footer({ 
  companyName = "CKempt",
  companyDescription = "Empowering businesses with innovative cloud solutions since 2015.",
  sections = [],
  socialLinks = {},
  contactEmail = "support@ckempt.com"
}: FooterProps) {
  const defaultSections: FooterSection[] = sections.length > 0 ? sections : [
    {
      title: "Services",
      links: [
        { label: "Cloud Migration", href: "/services/cloud-migration" },
        { label: "Cloud Management", href: "/services/cloud-management" },
        { label: "Cloud Security", href: "/services/cloud-security" },
        { label: "Cloud Consulting", href: "/services/cloud-consulting" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Pricing", href: "/pricing" },
        { label: "Support", href: "/support" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FBB900]">
                {companyName}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {companyDescription}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} className="w-10 h-10 bg-gray-800 hover:bg-[#FBB900] rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} className="w-10 h-10 bg-gray-800 hover:bg-[#FBB900] rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} className="w-10 h-10 bg-gray-800 hover:bg-[#FBB900] rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Footer Sections */}
          {defaultSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-[#FBB900] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-[#FBB900] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#FBB900] transition-colors">Terms of Service</a>
            <a href={`mailto:${contactEmail}`} className="hover:text-[#FBB900] transition-colors">{contactEmail}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
