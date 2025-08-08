import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, BrightCorp',
    message: 'This service transformed our business. Highly recommend!',
    image: 'https://i.pravatar.cc/100?img=1',
    rating: 4,
  },
  {
    name: 'David Lee',
    role: 'Developer, CodeWorld',
    message: 'Clean UI and fast performance. Just what we needed.',
    image: 'https://i.pravatar.cc/100?img=2',
    rating: 5,
  },
  {
    name: 'Sophia Gomez',
    role: 'Designer, PixelMagic',
    message: 'Beautifully crafted and very responsive.',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'CTO, InnovateX',
    message: 'Incredible features and great support team!',
    image: 'https://i.pravatar.cc/100?img=4',
    rating: 5,
  },
  {
    name: 'Laura Smith',
    role: 'Marketing Lead, BrightIdeas',
    message: 'Super easy to use and saved us hours of work.',
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 4,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(1); // 1 on mobile by default

  // Decide how many cards to show based on screen width
  useEffect(() => {
    const pickPerPage = () => {
      const w = window.innerWidth;
      // Tailwind breakpoints: sm=640, lg=1024
      setPerPage(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    pickPerPage();
    window.addEventListener('resize', pickPerPage);
    return () => window.removeEventListener('resize', pickPerPage);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perPage);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 py-10">
      <h2 className="mb-6 text-center text-2xl font-bold">
        What Our Customers Are Saying
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:opacity-40"
          aria-label="Previous"
        >
          ←
        </button>

        {/* Slider track */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(index * 100) / perPage}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              // Each slide takes 100/perPage% width responsively
              style={{ width: `${100 / perPage}%` }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:opacity-40"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
