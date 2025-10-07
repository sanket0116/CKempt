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
  const [uploadCloudAnimation, setUploadCloudAnimation] = useState<any>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((r) => r.json())
      .then((json) => setUploadCloudAnimation(json))
      .catch(() => setUploadCloudAnimation(null));
  }, [animationPath]);

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white reveal">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div>
              <button
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all shadow-md"
              >
                {primaryButtonText}
              </button>
            </div>
          </div>

          {/* Right Side - Animation */}
          <div className="flex justify-center lg:justify-end">
            {uploadCloudAnimation && (
              <Lottie 
                animationData={uploadCloudAnimation} 
                loop={true} 
                className="w-full max-w-md lg:max-w-lg h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
