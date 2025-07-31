// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <main className="flex-grow bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Left column */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Discover The Best Apps and Tools For Your Brand
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Curate, compare, and choose the perfect solutions to supercharge your business.
            </p>
            <button className="relative overflow-hidden group px-6 py-3
                              bg-teal-600
                                   text-white font-medium rounded-md
                             hover:from-gray-300 hover:to-indigo-700
                                                transition duration-300">
   <span className="
      absolute top-0 left-0 h-full w-16
      bg-white opacity-30
      transform -skew-x-20 -translate-x-full
     /* trigger our keyframe on hover */
      group-hover:animate-shine
    "
  />
              Get Started
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="hidden lg:flex flex-col space-y-4 ml-80">
          <button className="w-max px-5 py-2
    bg-teal-500 text-white font-medium rounded-lg shadow-lg
    transform transition duration-300
    hover:-translate-y-1 hover:scale-105 hover:bg-teal-600
    focus:outline-none focus:ring-2 focus:ring-teal-300">
                         Tools
          </button>
          <button 
            className="w-40 px-5 py-2 bg-teal-500 text-white font-medium rounded-lg shadow-lg
                         transform hover:-translate-y-1 hover:scale-105 hover:bg-teal-600
                         transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-300">
                          Brands
                          
          </button>
           <button
            className="w-60
              bg-teal-500 text-white font-medium 
              px-6 py-3 rounded-lg shadow-lg
              transform hover:-translate-y-1 hover:scale-105
              hover:bg-teal-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-teal-300
            "
          >
          Agencies
          </button>
          <button
             
            className="
              bg-teal-500 text-white font-medium 
              px-10 py-3 rounded-lg shadow-lg
              transform hover:-translate-y-1 hover:scale-105
              hover:bg-teal-600 transition duration-300
              focus:outline-none focus:ring-2 focus:ring-teal-300
            "
          >
          Reviews
          </button>
        </div>
          
          </div>
        </div>
      </div>
    </main>
  );
}


