'use client';

const clientLogos = [
  { name: 'TieBar', src: '/image/public/tiebar.png' },
  { name: 'LKAB', src: '/image/public/lkab.png' },
  { name: 'BostonScally', src: '/image/public/boston.png' },
  { name: 'PedalMafia', src: '/image/public/PedalMafia.png' },
  { name: 'Microlise', src: '/image/public/Microlise.png' },
  { name: 'Hamsa Hitech', src: '/image/public/hamsa.png' },
];

export default function AboutUs() {
  return (
    <section id="about" className="reveal">

      {/* ── Client Logos Strip ── */}
      <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-[#FBB900] uppercase mb-6">
          Client &amp; Partners
        </p>
        <div className="max-w-5xl mx-auto flex flex-nowrap justify-center items-center gap-10 overflow-x-auto">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-sm font-semibold text-gray-500">${logo.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Main About Content ── */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Bordered card */}
          <div className="border border-gray-200 rounded-xl p-8 shadow-sm bg-white">

            {/* Section heading */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-3 leading-snug whitespace-nowrap">
                Practical support for teams running real production systems.
              </h2>
              <div className="w-14 h-1 bg-[#FBB900] rounded-full" />
            </div>

            {/* 3-column grid with dividers */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-0">

              {/* WHO WE HELP */}
              <div className="md:pr-8 pb-8 md:pb-0">
                <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 mb-2 no-underline">
                  Who We Help
                </h3>
                <div className="w-10 h-0.5 bg-[#FBB900] rounded-full mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  We work with SMBs and growing companies.
                </p>
                <p className="text-sm font-semibold text-gray-800 mb-3">
                  Axiicore helps teams that:
                </p>
                <ul className="space-y-2">
                  {[
                    'are growing faster than their cloud setup',
                    'are firefighting production issues',
                    'feel their Kubernetes or cloud stack is overcomplicated',
                    'need reliability before they scale further',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-[#FBB900] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT WE DO */}
              <div className="md:px-8 py-8 md:py-0">
                <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 mb-2 no-underline">
                  What We Do
                </h3>
                <div className="w-10 h-0.5 bg-[#FBB900] rounded-full mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  We fix first. <span className="text-[#FBB900]">Then we improve. And scale.</span>
                </p>
                <ul className="space-y-2">
                  {[
                    'Fix broken cloud & Kubernetes setups',
                    'Stabilize production systems',
                    'Simplify over-engineered architectures',
                    'Improve reliability, security, and cost efficiency',
                    'Act as a hands-on engineering partner, not just advisors',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-[#FBB900] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* HOW WE WORK */}
              <div className="md:pl-8 pt-8 md:pt-0">
                <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 mb-2 no-underline">
                  How We Work
                </h3>
                <div className="w-10 h-0.5 bg-[#FBB900] rounded-full mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  Simple, practical, and hands-on.
                </p>
                <ul className="space-y-2">
                  {[
                    "We assess what's actually broken",
                    'We fix high-impact issues first',
                    'We clean up and document platform',
                    'We help your team move faster with confidence',
                    'We focus on what matters now, not theoretical perfection',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-[#FBB900] font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
