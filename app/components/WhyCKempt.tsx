'use client';

export default function WhyCKempt() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        WHY CKempt
                    </h2>
                    <div className="w-24 h-1 bg-[#FBB900]"></div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Opening Statement */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Because <span className="text-[#FBB900] font-semibold">"good enough"</span> infrastructure eventually breaks.
                    </p>

                    {/* Experience Statement */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        With <span className="font-semibold text-gray-900">10+ years</span> of real-world Cloud and Kubernetes experience, CKempt brings calm to chaotic platforms.
                    </p>

                    {/* Value Props in Simple List */}
                    <div className="border-l-4 border-[#FBB900] pl-6 py-4 space-y-3">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700">We don't push tools.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700">We don't sell complexity.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#FBB900] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700">We keep systems clean, stable, and well-managed.</p>
                        </div>
                    </div>

                    {/* Closing Statement */}
                    <div className="pt-4">
                        <p className="text-xl md:text-2xl font-bold text-[#FBB900]">
                            That's CKempt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
