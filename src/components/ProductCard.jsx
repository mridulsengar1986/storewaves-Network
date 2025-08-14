// src/components/ProductCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const text = product.tagline ?? product.blurb ?? '';

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image + (optional) top-left tag pill */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-yellow-300 px-2 py-0.5 text-xs font-semibold text-gray-900">
            {product.tag}
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Only show price pill if provided */}
          {product.price && (
            <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              {product.price}
            </span>
          )}
        </div>

        {/* Use the fallback-aware text */}
        <p className="text-sm text-gray-600">{text}</p>

        <a
          href={product.url}
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:underline"
        >
          View Tool Profile <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
