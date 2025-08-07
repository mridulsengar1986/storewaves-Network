// src/components/Footer.jsx
import React from 'react';
import {
  Bars3Icon, // for menu icon
  PhoneIcon,
  EnvelopeIcon, // for  MailIcon we use EnvelopIcon
  MapPinIcon,
  ArrowSmallRightIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Contact info */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-orange-500" />
            <span>+6566538060</span>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="h-5 w-5 text-orange-500" />
            <span>hello@happymarketer.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-orange-500" />
            <span>OneNeilRoad#02‑02, Singapore088804</span>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Links & subscribe */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold text-white">About</h4>
            <ul className="space-y-2">
              {['Our Story', 'Awards', 'Our Team', 'Career'].map((text) => (
                <li key={text}>
                  <a href="#" className="hover:text-white">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {['Our Services', 'Clients', 'Contact', 'Press'].map((text) => (
                <li key={text}>
                  <a href="#" className="hover:text-white">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Newsletter', 'Privacy Policy'].map((text) => (
                <li key={text}>
                  <a href="#" className="hover:text-white">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Subscribe</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-l bg-gray-800 px-3 py-2 text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-orange-500 px-4 py-2 hover:bg-orange-600 focus:outline-none"
              >
                <ArrowSmallRightIcon className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Social & bottom bar */}
        <div className="mt-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright + back‑to‑top */}
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              ©2009–2016Happy Marketer PrivateLtd. All Rights Reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="rounded-full bg-orange-500 p-2 hover:bg-orange-600 focus:outline-none"
            >
              <ChevronUpIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
