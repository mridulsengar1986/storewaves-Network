// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <main className="bg-no-repeatpb-12 relative min-h-[60vh] bg-[url('/b5.png')] bg-cover bg-center pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/*For background anmation <div 
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/waves.gif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
           */}
          {/* Left column */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Discover The Best Apps and Tools For Your Brand
            </h1>
            <p className="mt-4 py-4 text-lg text-gray-600">
              Curate, compare, and choose the perfect solutions to supercharge
              your business.
            </p>
            <button className="group relative overflow-hidden rounded-md bg-teal-600 px-6 py-3 font-medium text-white transition duration-300 hover:from-gray-300 hover:to-indigo-700">
              <span className="-skew-x-20 /* trigger our keyframe on hover */ absolute left-0 top-0 h-full w-16 -translate-x-full transform bg-white opacity-30 group-hover:animate-shine" />
              Get Started with brands
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
