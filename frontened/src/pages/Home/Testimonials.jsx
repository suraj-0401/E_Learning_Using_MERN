import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function Testimonials() {
  const{theme}=useTheme();
  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';

  return (
    // Testimonials
    <>
    

<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    <section className={`${themeClasses} py-16 bg-white`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic">
                "This course is amazing! The instructor breaks down complex topics and makes them easy to understand."
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src={`https://via.placeholder.com/50`}
                  alt={`Learner ${i + 1}`}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-800 font-medium">Learner {i + 1}</p>
                  <p className="text-sm text-gray-500">React Developer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Testimonials;