'use client';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  title?: string;
  stats: Stat[];
  backgroundColor?: string;
}

export default function Stats({ 
  title = "Trusted by Businesses Worldwide",
  stats,
  backgroundColor = "bg-[#FBB900]"
}: StatsProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundColor} text-black`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-base md:text-lg font-semibold opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
