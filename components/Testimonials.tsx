"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    title: "Founder, CraftHub NG",
    avatar: "/images/avatar-aisha.jpg",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    title: "Marketing Manager, E-Commerce Emporium",
    avatar: "/images/avatar-john.jpg",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    title: "HR Director, FutureTech Solutions",
    avatar: "/images/avatar-chinoso.jpg",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Name Pending",
    title: "Title Pending",
    avatar: "/images/avatar-4.jpg",
    quote: "Quote pending — update once you have the 4th testimonial text.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardWidth = 340; // px, includes gap
  const maxIndex = testimonials.length - 1;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="w-full px-16 py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>

      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border-l-2 border-rose-400 pl-6 pr-4 shrink-0"
              style={{ width: cardWidth - 24 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          disabled={index === 0}
          className="w-9 h-9 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center hover:bg-rose-200 disabled:opacity-40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          disabled={index === maxIndex}
          className="w-9 h-9 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center hover:bg-rose-200 disabled:opacity-40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}