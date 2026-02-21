'use client';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  animationPath?: string;
}

export default function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <>
      <style>{`
        @keyframes cloudPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .hero-illustration {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .architect-img {
          max-width: 370px;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
          opacity: 0.95;
          animation: cloudPulse 3s ease-in-out infinite;
          transition: opacity 0.3s, transform 0.3s;
        }
        .architect-img:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>

      <section
        id="home"
        className="pt-20 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8 min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat reveal relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid gap-8 lg:gap-12 items-center lg:grid-cols-2">

            {/* Right Side - Hero Image */}
            <div className="hero-illustration lg:order-2">
              <img
                src="/image/hero-nobg.png"
                alt="Cloud Architecture"
                className="architect-img"
              />
            </div>

            {/* Left Side - Content */}
            <div className="lg:order-1 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 lg:mb-6 leading-tight">
                <span className="text-white">
                  {title}
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-3 lg:mb-8 leading-relaxed">
                {subtitle}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
