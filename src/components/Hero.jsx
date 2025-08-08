// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <main className="relative bg-gray-50 pb-12 pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
            style={{
              backgroundImage: "url('/waves.gif')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
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
          <div className="hidden lg:block">
            <div className="ml-80 hidden flex-col space-y-4 lg:flex">
              <button className="w-max transform rounded-lg bg-teal-500 px-5 py-2 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Tools
              </button>
              <button className="w-40 transform rounded-lg bg-teal-500 px-5 py-2 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Brand
              </button>
              <button className="w-60 transform rounded-lg bg-teal-500 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Agencies
              </button>
              <button className="transform rounded-lg bg-teal-500 px-10 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300">
                Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
