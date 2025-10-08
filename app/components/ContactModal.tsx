'use client';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform animate-in zoom-in-95 duration-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FBB900]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FBB900]/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-100 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FBB900] to-[#e5a800] rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
                <p className="text-sm text-gray-600">Let&apos;s discuss your cloud project</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="max-h-[calc(90vh-140px)] overflow-y-auto px-8 pb-8">
          <form
            className="space-y-6"
            action="https://formsubmit.co/yash1234502@gmail.com"
            method="POST"
          >
            {/* Hidden inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50"
                placeholder="John Doe"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50"
                placeholder="Your Company"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50"
              >
                <option value="">Select a service</option>
                <option value="migration">Cloud Migration</option>
                <option value="management">Cloud Management</option>
                <option value="security">Cloud Security</option>
                <option value="consulting">Cloud Consulting</option>
                <option value="devops">DevOps & Automation</option>
                <option value="kubernetes">Kubernetes</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full pl-4 pr-4 py-3.5 text-sm text-gray-900 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FBB900] focus:border-transparent outline-none transition-all duration-200 hover:border-gray-300 bg-gray-50/50 resize-none"
                placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black py-3.5 px-6 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
