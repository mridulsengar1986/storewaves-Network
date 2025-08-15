import React, { useMemo, useState } from 'react';

export default function Agencies() {
  const agencies = useMemo(
    () => [
      {
        id: 1,
        name: 'Quick Brown Fox',
        category: 'Website Development',
        tag: 'Website Dev',
        blurb:
          'US-based tech studio building high-perf storefronts and brand sites.',
        location: 'United States',
        logo: '/A1.avif',
        href: '#',
      },
      {
        id: 2,
        name: 'Grebban',
        category: 'Website Design',
        tag: 'Website Design',
        blurb:
          'Design & build digital flagship stores with a focus on conversion.',
        location: 'Europe',
        logo: '/A2.avif',
        href: '#',
      },
      {
        id: 3,
        name: 'Dimond Connect',
        category: 'Hiring',
        tag: 'Hiring',
        blurb:
          'Recruiting specialists for e‑commerce, growth, and engineering teams.',
        location: 'Remote',
        logo: '/A3.avif',
        href: '#',
      },
      {
        id: 4,
        name: 'Klay Media',
        category: 'Performance Marketing',
        tag: 'Performance',
        blurb:
          'Performance marketing for D2C brands across paid social & search.',
        location: 'Global',
        logo: '/A4.avif',
        href: '#',
      },
      {
        id: 5,
        name: 'Nimbus Labs',
        category: 'Email & SMS',
        tag: 'Lifecycle',
        blurb:
          'Lifecycle automations that drive LTV without spamming your users.',
        location: 'Canada',
        logo: '/A5.avif',
        href: '#',
      },
      {
        id: 6,
        name: 'Northstar Growth',
        category: 'Growth Strategy',
        tag: 'Growth',
        blurb:
          'Full‑funnel strategy from awareness to retention for scaling brands.',
        location: 'United Kingdom',
        logo: '/A3.avif',
        href: '#',
      },
      {
        id: 7,
        name: 'Beacon Collective',
        category: 'Branding',
        tag: 'Branding',
        blurb: 'Timeless identities, tone of voice, and brand systems for D2C.',
        location: 'United States',
        logo: '/A7.avif',
        href: '#',
      },
      {
        id: 8,
        name: 'Query Partners',
        category: 'Paid Search',
        tag: 'Paid Search',
        blurb:
          'Granular search structure and landing page CRO for profitable CAC.',
        location: 'Australia',
        logo: '/A8.avif',
        href: '#',
      },
      {
        id: 9,
        name: 'Atlas Social',
        category: 'Paid Social',
        tag: 'Paid Social',
        blurb: 'Creative testing engine for Meta, TikTok, and YouTube Shorts.',
        location: 'India',
        logo: '/A9.avif',
        href: '#',
      },
    ],
    []
  );

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(agencies.map((a) => a.category)))],
    [agencies]
  );

  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('name');

  const visible = agencies
    .filter((a) => (active === 'All' ? true : a.category === active))
    .filter((a) =>
      (a.name + a.category + a.blurb + a.tag)
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'new') return b.id - a.id;
      return a.name.localeCompare(b.name);
    });

  return (
    <main className="via-gray from-gray-150 min-h-screen w-full bg-gradient-to-br to-gray-200 text-slate-800">
      {/* Subtle pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(600px 200px at 10% -10%,#16a34a33,transparent),radial-gradient(600px 200px at 110% 10%,#f59e0b33,transparent)',
        }}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <header className="mb-10 md:mb-12">
          <p className="text-sm font-medium tracking-wide text-emerald-700/80">
            Curated
          </p>
          <h1 className="mt-1 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            Trending Agencies
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-slate-600">
            A clean, elegant directory layout with filters, search, and crisp
            cards. Swap the placeholder logos with your own images when ready.
          </p>
        </header>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-80">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search agencies…"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-[15px] shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
              />
              <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
                ⌘K
              </span>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-[15px] shadow-sm outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
            >
              <option value="name">Sort: A → Z</option>
              <option value="new">Sort: Newest</option>
            </select>
          </div>
        </div>

        {/* Category chips (scrollable) */}
        <div className="no-scrollbar -mx-1 mb-8 flex gap-2 overflow-x-auto px-1">
          {categories.map((cat) => {
            const activeChip = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  'shrink-0 rounded-full px-4 py-2 text-sm font-medium ring-1 transition',
                  activeChip
                    ? 'bg-emerald-600 text-white ring-emerald-600'
                    : 'bg-white/80 text-slate-700 ring-slate-200 hover:bg-white',
                ].join(' ')}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((a) => (
            <AgencyCard key={a.id} agency={a} />
          ))}
        </div>
      </section>
    </main>
  );
}

function AgencyCard({ agency }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      {/* Media / Logo area */}
      <div className="relative aspect-[16/10] w-full">
        {agency.logo ? (
          <img
            src={agency.logo}
            alt={agency.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <span className="text-2xl font-semibold text-slate-500">
              {initials(agency.name)}
            </span>
          </div>
        )}

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
            {agency.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {agency.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
          {agency.blurb}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            {agency.location}
          </span>
          <a
            href={agency.href}
            className="rounded-md px-3 py-1.5 text-[13px] font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50 focus:ring-4 focus:ring-emerald-100 focus:outline-none"
          >
            View profile
          </a>
        </div>
      </div>
    </article>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
