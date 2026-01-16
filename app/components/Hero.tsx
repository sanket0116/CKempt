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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/image/hero.jpg")',
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Animated Particles/Stars Effect (optional CSS animation) */}
      <div className="absolute inset-0 opacity-30">
        <div className="stars"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={onPrimaryClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FBB900] to-[#e5a800] text-black rounded-full font-bold text-lg shadow-2xl hover:shadow-[#FBB900]/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">{primaryButtonText}</span>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>

              <button
                className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn More
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Side - Glassmorphism Card with Animation */}
          {uploadCloudAnimation && (
            <div className="flex justify-center lg:justify-end">
              <Lottie
                animationData={uploadCloudAnimation}
                loop={true}
                className="w-full max-w-md h-auto"
              />
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
