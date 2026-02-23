'use client';

export default function WhyAxiicore() {
    return (
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 reveal">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
                        WHY Axiicore
                    </h2>
                    <div className="w-16 h-1 bg-[#FBB900] rounded-full mb-7" />

                    {/* Para 1 */}
                    <p className="text-base text-gray-600 mb-4">
                        Because{' '}
                        <span className="text-[#FBB900] font-semibold">&ldquo;good enough&rdquo;</span>{' '}
                        infrastructure eventually breaks.
                    </p>

                    {/* Para 2 */}
                    <p className="text-base text-gray-600 mb-8">
                        With <span className="font-bold text-gray-800">10+ years</span> of real-world Cloud and
                        Kubernetes experience, Axiicore brings calm to chaotic platforms.
                    </p>

                    {/* Bullet list */}
                    <ul className="space-y-4 mb-8 border-l-4 border-[#FBB900] pl-6">
                        {[
                            "We don't push tools.",
                            "We don't sell complexity.",
                            "We keep systems clean, stable, and well-managed.",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-base text-gray-700">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FBB900] flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Tagline */}
                    <p className="text-base font-bold text-[#FBB900]">
                        That&apos;s Axiicore.
                    </p>

                </div>
            </div>
        </section>
    );
}
