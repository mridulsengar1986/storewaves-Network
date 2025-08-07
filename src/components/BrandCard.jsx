import React from 'react';
import ToolBadge from './ToolBadge';
export default function BrandCard({ brand }) {
  return (
    <div className="shadow-card transform overflow-hidden rounded-xl bg-white transition duration-300 hover:scale-[1.02]">
      {/* 1. Image */}
      <img
        src={brand.image}
        alt={brand.name}
        className="h-48 w-full object-cover"
      />

      {/* 2. Content */}
      <div className="space-y-4 p-6">
        {/* 2a. Title & Category */}
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-2xl text-primary">{brand.name}</h3>
          <span className="rounded-full bg-accent bg-opacity-10 px-3 py-1 text-xs font-medium uppercase text-accent">
            {brand.category}
          </span>
        </div>

        {/* 2b. Description */}
        <p className="font-body text-gray-700">{brand.description}</p>

        {/* 2c. Tool badges */}
        <div className="flex flex-wrap gap-2">
          {brand.tools.map((t) => (
            <ToolBadge key={t} name={t} />
          ))}
        </div>

        {/* 2d. Button */}
        <button className="mt-4 inline-flex items-center space-x-2 font-medium text-accent hover:underline">
          <span>Uses {brand.tools.length} Tools</span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
