"use client";
import React, { useState, useEffect, useRef } from "react";
import { galleryConstants } from "../utils/constants";
import Image from "next/image";

export default function TrendingPackages() {
  const [visibleItems, setVisibleItems] = useState([]);
  const observer = useRef(null);

  // Add kashi, badrinath, statue of unity, golden temple amrutsar,Puri jaganath, hawa mahal

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        setVisibleItems(visibleEntries.map((entry) => entry.target));
      },
      { root: null, rootMargin: "0px", threshold: 0.5 } // You can adjust the threshold as needed
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".lazy-load");
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.current.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="p-8 mt-4" id="trending">
      <h1 className="text-3xl text-center font-bold mb-1">
        Fast Selling Holiday Plans
      </h1>
      <p className="text-sm *text-gray-500 text-center mb-10">
        Most trending places of India. Discover iconic places across the nation!
      </p>
      <div className="mt-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto">
        {galleryConstants.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            <Image
              src={item.src}
              alt={item.name}
              width={300}
              height={500}
              className={`w-full rounded-md h-auto object-cover ${
                visibleItems.includes(item.src) ? "" : "lazy-load"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
