'use client';

import { useState } from 'react';

interface CTAModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CTAModal({ isOpen, onClose }: CTAModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-xl font-bold text-gray-900 mb-4 pr-6">Choose an Option</h3>

                <div className="space-y-3">
                    <button className="w-full text-left border-2 border-gray-200 rounded-lg p-4 hover:border-[#FBB900] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FBB900]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Book a Conversation</h4>
                                <p className="text-xs text-gray-500">30-min free consultation</p>
                            </div>
                        </div>
                    </button>

                    <button className="w-full text-left border-2 border-gray-200 rounded-lg p-4 hover:border-[#FBB900] transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#FBB900]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-[#FBB900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Send Us Your Setup</h4>
                                <p className="text-xs text-gray-500">Get an honest assessment</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function FinalCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Let's fix your cloud before it slows you down.
                    </h2>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                        Get Started
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <p className="text-gray-400 mt-3 text-sm">Book a call or share your setup — we'll tell you what's broken</p>
                </div>
            </section>

            <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
