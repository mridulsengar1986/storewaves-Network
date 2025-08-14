// src/components/TrendingToolsAndApps.jsx
import React, { useState } from 'react';
import { filters } from '../data/filters.js';
import { products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function TrendingToolsAndApps() {
  const [active, setActive] = useState(filters[0].id);
  const visibleProducts = products.filter((p) => p.category === active);

  return (
    <section className="relative min-h-[60vh] bg-[url('/b5.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Trending Tools & Apps
        </h1>

        {/* 2-column layout: left = vertical buttons, right = content */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT: vertical filter buttons */}
          <aside className="lg:col-span-3">
            {/* sticky keeps the sidebar visible while scrolling the product grid */}
            <div className="sticky top-24">
              <nav
                className="flex flex-col gap-2"
                role="tablist"
                aria-label="Tool categories"
                aria-orientation="vertical"
              >
                {filters.map((f) => {
                  const Icon = f.icon;
                  const isActive = active === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-pressed={isActive}
                      onClick={() => setActive(f.id)}
                      className={[
                        'inline-flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition',
                        'ring-1 focus:outline-none focus:ring-2 focus:ring-offset-2',
                        isActive
                          ? 'bg-gray-900 text-white ring-gray-900/10 hover:bg-gray-800 focus:ring-gray-800'
                          : 'bg-white text-gray-700 ring-gray-300 hover:bg-gray-50 focus:ring-gray-400',
                      ].join(' ')}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className="truncate">{f.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT: products for the selected filter */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-3">
              {visibleProducts.length ? (
                visibleProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))
              ) : (
                <EmptyState />
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
      <p className="text-sm text-gray-600">
        Nothing here yet. Add items to{' '}
        <code className="rounded bg-white px-1">products</code>.
      </p>
    </div>
  );
}
