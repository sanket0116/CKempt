'use client';

import { useState } from 'react';

interface ChatOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  action?: () => void;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const messageOptions: ChatOption[] = [
    {
      id: 'chat',
      title: 'Chat with Us',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: () => {
        // Open chat or contact form
        window.location.href = '/contact';
      }
    },
    {
      id: 'callback',
      title: 'Schedule a CallBack',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: () => {
        // Open callback form
        window.location.href = '/contact?type=callback';
      }
    }
  ];

  const faqOptions: ChatOption[] = [
    {
      id: 'consulting',
      title: 'Cloud Consulting',
      icon: <span className="text-white font-semibold text-xs">C</span>,
      action: () => {
        window.location.href = '/services/cloud-consulting';
      }
    },
    {
      id: 'managed',
      title: 'Managed Services',
      icon: <span className="text-white font-semibold text-xs">M</span>,
      action: () => {
        window.location.href = '/services/managed-services';
      }
    },
    {
      id: 'migration',
      title: 'Migration & Modernization',
      icon: <span className="text-white font-semibold text-xs">M</span>,
      action: () => {
        window.location.href = '/services/migration';
      }
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <span className="text-white font-semibold text-xs">S</span>,
      action: () => {
        window.location.href = '/services/security';
      }
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: <span className="text-white font-semibold text-xs">D</span>,
      action: () => {
        window.location.href = '/services/devops';
      }
    },
    {
      id: 'cost',
      title: 'Cost Optimization',
      icon: <span className="text-white font-semibold text-xs">C</span>,
      action: () => {
        window.location.href = '/services/cost-optimization';
      }
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: <span className="text-white font-semibold text-xs">D</span>,
      action: () => {
        window.location.href = '/services/data-analytics';
      }
    },
    {
      id: 'support',
      title: '24/7 Support',
      icon: <span className="text-white font-semibold text-xs">S</span>,
      action: () => {
        window.location.href = '/services/support';
      }
    }
  ];

  const visibleServices = showAllServices ? faqOptions : faqOptions.slice(0, 4);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-800 hover:bg-gray-900' 
            : 'bg-gradient-to-br from-[#FBB900] to-[#e5a800] hover:scale-110'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-[300px] max-w-[calc(100vw-2.5rem)] bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] p-3 text-black">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Welcome to CKempt</h3>
                <p className="text-[10px] text-black/70">How can I help you?</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[380px] overflow-y-auto">
            {/* Message Us Section */}
            <div className="p-3 border-b border-gray-100">
              <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Message Us</h4>
              <div className="space-y-1.5">
                {messageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={option.action}
                    className="w-full flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center text-black flex-shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-medium text-gray-900 group-hover:text-[#FBB900] transition-colors">
                        {option.title}
                      </p>
                    </div>
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-[#FBB900] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQs Section */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">FAQs</h4>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-1.5">
                {visibleServices.map((option) => (
                  <button
                    key={option.id}
                    onClick={option.action}
                    className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FBB900] to-[#e5a800] flex items-center justify-center flex-shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors">
                        {option.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Show More Button */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="w-full text-center text-xs font-medium text-[#FBB900] hover:text-[#e5a800] transition-colors flex items-center justify-center gap-1"
            >
              {showAllServices ? (
                <>
                  <span>Show Less</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show More Categories</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
