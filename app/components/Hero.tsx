'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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
  primaryButtonText = "Get Started",
  onPrimaryClick,
  animationPath = '/cloud-animation.json'
}: HeroProps) {
  const [uploadCloudAnimation, setUploadCloudAnimation] = useState<object | null>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((r) => r.json())
      .then((json) => setUploadCloudAnimation(json))
      .catch(() => setUploadCloudAnimation(null));
  }, [animationPath]);

  return (
    <section id="home" className="pt-20 pb-4 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8 min-h-fit lg:min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white reveal">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 items-center">
          {/* Right Side - Animation (First on mobile, second on desktop) */}
          <div className="flex justify-center lg:justify-end lg:order-2 -my-4 lg:my-0">
            {uploadCloudAnimation && (
              <Lottie 
                animationData={uploadCloudAnimation} 
                loop={true} 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-auto"
              />
            )}
          </div>

          {/* Left Side - Content (Second on mobile, first on desktop) */}
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 lg:mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div>
              <button
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-6 py-2.5 lg:px-8 lg:py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-md text-sm lg:text-base"
              >
                {primaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
