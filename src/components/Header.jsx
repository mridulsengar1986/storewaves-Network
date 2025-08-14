import React from 'react';
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBagIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">
              storewave
              <span className="text-teal-200">network</span>
            </span>
          </div>

          {/* Desktop nav: links + search + menu */}
          <div className="hidden items-center space-x-6 md:flex">
            <a
              href="#"
              className="text-white transition-colors hover:text-teal-200"
            >
              All brands
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-teal-200"
            >
              Tools
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-teal-200"
            >
              Agencies
            </a>
            <a
              href="#"
              className="text-white transition-colors hover:text-teal-200"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded bg-white px-4 py-2 font-medium text-teal-600 transition-colors hover:bg-gray-100"
            >
              Signup
            </a>
            <button
              aria-label="Search"
              className="text-white transition-colors hover:text-teal-200"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button
              aria-label="Open menu"
              className="text-white transition-colors hover:text-teal-200 focus:outline-none"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile (smaller than md): just the two icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              aria-label="Search"
              className="text-white transition-colors hover:text-teal-200"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button
              aria-label="Open menu"
              className="text-white transition-colors hover:text-teal-200 focus:outline-none"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
