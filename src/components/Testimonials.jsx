import { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3; // how many cards show at once

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < testimonials.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 px-4 py-10">
      <h2 className="mb-6 text-center text-2xl font-bold">
        What Our Customers Are Saying
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:opacity-40"
        >
          ←
        </button>

        {/* Slider container */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
          }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-2">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= testimonials.length - cardsPerPage}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-50 disabled:opacity-40"
        >
          →
        </button>
      </div>
    </div>
  );
}
