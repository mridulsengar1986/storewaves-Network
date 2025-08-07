import React from 'react';
import checkmateLogo from '../assets/checkmate.png';

export default function ToolsOfTheMonth() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-100 to-green-800 px-4 py-12 font-[Inter] md:px-12">
        {/* Header */}
        <div className="mx-auto mb-10 grid max-w-7xl items-center gap-6 md:grid-cols-2">
          <h1 className="text-3xl font-extrabold text-gray-500 sm:text-5xl lg:text-6xl">
            Tool Of The Month
          </h1>
          <p className="text-white-600 mt-4 py-4 text-lg">
            Each month we select one tool to feature as our Tool of the Month.
            The tool is usually widely adopted by brands on our platform or is
            newly trending in tech stacks.
          </p>
        </div>

        {/* Main Feature Box */}
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 md:grid-cols-2">
          {/* Left Panel */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl bg-teal-700 p-8 text-white shadow-xl">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-teal-700">
                  Featured Partner
                </span>
                <span className="flex items-center gap-2 rounded-md bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                  👁 14 Day Free Trial
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-semibold">Checkmate</h3>
              <p className="text-white-600 mt-4 py-4 text-lg">
                Drive incremental revenue by reaching millions of shoppers with
                Checkmate. Checkmate's AI de-anonymizes, identifies, and matches
                high-intent customers so you can target smarter and reach more
                potential customers.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="mt-4 w-fit rounded-md bg-white px-2 py-1 font-semibold text-teal-700 shadow transition-all duration-300 hover:scale-105 hover:bg-teal-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-100 to-blue-50 shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              src={checkmateLogo}
              alt="Checkmate Logo"
              className="max-h-60 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
