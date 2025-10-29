'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { caseStudies } from '../data/caseStudies';
import { categorizedServices } from '../data/allServices';

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const selectedCaseStudy = selectedStudy 
    ? caseStudies.find(cs => cs.id === selectedStudy) 
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      <Header 
        onContactClick={() => setIsContactModalOpen(true)}
        categorizedServices={categorizedServices}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-[#FBB900]/10 text-[#FBB900] rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Success Stories
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we&#39;ve helped leading companies transform their cloud infrastructure, 
            optimize operations, and achieve remarkable business outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-200/60 hover:border-[#FBB900]/40 hover:shadow-2xl hover:shadow-[#FBB900]/10 transition-all duration-500 cursor-pointer group backdrop-blur-sm"
                onClick={() => setSelectedStudy(study.id)}
              >
                {/* Image */}
                <div className="relative mb-5 rounded-xl overflow-hidden shadow-lg">
                  {typeof study.image === 'string' ? (
                    <img 
                      src={study.image} 
                      alt={`${study.client} case study`}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    study.image
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FBB900] mb-1 group-hover:text-[#e5a800] transition-colors">
                      {study.client}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{study.industry}</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FBB900]/20 to-[#FBB900]/10 rounded-full flex items-center justify-center group-hover:from-[#FBB900]/30 group-hover:to-[#FBB900]/20 transition-all duration-300 ml-3">
                    <svg 
                      className="w-5 h-5 text-[#FBB900] transform group-hover:translate-x-0.5 group-hover:scale-110 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 mb-4 leading-snug group-hover:text-gray-800 transition-colors">
                  {study.title}
                </h4>

                {/* Challenge Preview */}
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
                  {study.challenge}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200/60 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="px-3 py-1.5 text-[#FBB900] text-xs font-semibold bg-[#FBB900]/5 rounded-full border border-[#FBB900]/20">
                      +{study.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#FBB900] font-semibold group-hover:text-[#e5a800] group-hover:underline transition-all duration-200">
                    <span className="text-sm">Read Full Case Study</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modal */}
      {selectedCaseStudy && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedStudy(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full my-8 border border-gray-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#FBB900]/5 to-[#FBB900]/10 border-b border-gray-200 p-4 flex justify-between items-start rounded-t-2xl">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#FBB900] mb-1">
                  {selectedCaseStudy.client}
                </h2>
                <p className="text-xs text-gray-600 font-medium">{selectedCaseStudy.industry}</p>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full p-1.5 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Title */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              {/* Challenge */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
                <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  The Challenge
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Our Solution
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-700 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Key Results
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCaseStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm">
                      <p className="text-xl sm:text-2xl font-bold text-[#FBB900] mb-1">{result.value}</p>
                      <p className="text-xs text-gray-600 font-medium">{result.metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                <h4 className="text-sm font-semibold text-purple-700 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white text-gray-700 text-xs font-medium rounded-md border border-purple-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedCaseStudy.testimonial && (
                <div className="bg-gradient-to-r from-[#FBB900]/5 to-[#FBB900]/10 rounded-lg p-4 border border-[#FBB900]/20">
                  <svg className="w-6 h-6 text-[#FBB900] mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-gray-700 italic mb-3 leading-relaxed">
                    "{selectedCaseStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">— {selectedCaseStudy.testimonial.author}</p>
                      <p className="text-gray-600 text-xs">{selectedCaseStudy.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => setSelectedStudy(null)}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-white rounded-lg font-semibold hover:shadow-lg transition-all shadow-md text-sm"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <Footer 
        companyName="CKempt"
        companyDescription="Empowering businesses with innovative cloud solutions since 2015."
        socialLinks={{
          linkedin: "https://linkedin.com",
          twitter: "https://twitter.com",
          facebook: "https://facebook.com"
        }}
        contactEmail="support@ckempt.com"
      />
    </div>
  );
}
