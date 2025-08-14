import React, { useState } from 'react';

const GIF_URL =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHRlOHlhZG5pcDhvNTNqZTFlMDE0cjVocGU1Z3BvcmpveG9kdWhtbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/uPPv7KKCRcglPvBezM/giphy.gif';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const isValidEmail = (v) => /\S+@\S+\.\S+/.test(v);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-br from-stone-100 via-white to-stone-50 text-slate-700">
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* 2-column layout: left = copy/form, right = GIF */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: text + form */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Newsletter
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Sign Up Today,</span>
              <span className="block">Learn Forever</span>
            </h1>

            <p className="mt-3 text-base text-slate-600">
              Stay updated with the latest in e-commerce.
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Weekly tips
              </li>
              <li className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                No spam
              </li>
              <li className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Unsubscribe anytime
              </li>
            </ul>

            <form
              onSubmit={onSubmit}
              className="mt-6 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-2 shadow-sm"
              noValidate
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="flex items-stretch gap-2">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  aria-invalid={touched && !isValidEmail(email)}
                  aria-describedby="email-help"
                  placeholder="Enter your email"
                  className={[
                    'w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 outline-none',
                    'placeholder:text-slate-400',
                    'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30',
                    touched && !isValidEmail(email)
                      ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-300/40'
                      : 'border-slate-200',
                  ].join(' ')}
                />
                <button
                  type="submit"
                  disabled={!isValidEmail(email)}
                  className="shrink-0 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Subscribe
                </button>
              </div>
              <p id="email-help" className="mt-2 text-xs text-slate-500">
                We’ll send occasional emails. No spam, ever.
              </p>
            </form>

            <div className="mt-3" aria-live="polite" role="status">
              {submitted && (
                <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks! We’ll keep you posted.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: animated GIF */}
          <aside className="md:justify-self-end">
            {/* If you want it clickable to open the original GIF, keep the <a>. Otherwise, remove the <a> wrapper. */}
            <a
              href={GIF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={GIF_URL}
                alt="Fun newsletter animation"
                loading="lazy"
                className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-black/10 md:h-[26rem] md:max-w-lg md:object-cover"
              />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
