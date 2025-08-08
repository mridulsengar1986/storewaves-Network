import React from 'react';
import { brands } from '../data/brands';
import BrandCard from './BrandCard';

export default function TrendingBrands() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page title */}
      <h1 className="font-heading mb-12 text-center text-3xl text-primary">
        Trending Brands
      </h1>
      {/* Responsive grid of cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <BrandCard key={b.id} brand={b} />
        ))}
      </div>
    </div>
  );
}
