import React from 'react'
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBagIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">
              storewave
              <span className="text-teal-200">network</span>
            </span>
          </div>

          {/* Desktop nav: links + search + menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-teal-200 transition-colors"
            >
              All brands
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-200 transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-white text-teal-600 font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Signup
            </a>
            <button
              aria-label="Search"
              className="text-white hover:text-teal-200 transition-colors"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button
              aria-label="Open menu"
              className="text-white hover:text-teal-200 focus:outline-none transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile (smaller than md): just the two icons */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              aria-label="Search"
              className="text-white hover:text-teal-200 transition-colors"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button
              aria-label="Open menu"
              className="text-white hover:text-teal-200 focus:outline-none transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
