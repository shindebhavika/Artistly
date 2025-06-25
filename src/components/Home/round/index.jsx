"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { artists } from "@/app/api/data";

function Round({ category = "All" }) {
  const filteredArtists =
    category === "All"
      ? artists
      : artists.filter((artist) => artist.category === category);

  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const visibleCount = 3;
  const scrollInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % filteredArtists.length);
    }, scrollInterval);
    return () => clearInterval(interval);
  }, [filteredArtists.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / visibleCount;
      carouselRef.current.scrollTo({
        left: scrollIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="flex w-full gap-6 overflow-hidden scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {filteredArtists.map((artist, index) => {
          const artistSlug = encodeURIComponent(
            artist.name.toLowerCase().replace(/\s+/g, "-")
          );

          return (
            <Link href={`/artist/${artistSlug}`} key={index}>
              <div
                className="min-w-[300px] flex-shrink-0 relative group cursor-pointer overflow-hidden duration-500 bg-zinc-800 text-gray-50 p-5 rounded-xl shadow-lg"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Background Image */}
                <div
                  className="group-hover:scale-110 w-full h-60 bg-cover bg-center duration-500 rounded-md"
                  style={{ backgroundImage: `url(${artist.image})` }}
                ></div>

                {/* Overlay Info */}
                <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                  <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-purple-900 rounded-xl"></div>
                  <span className="text-xl font-bold">{artist.name}</span>
                  <p className="text-sm mt-1">
                    {artist.category} · {artist.location}
                  </p>
                  <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 text-sm mt-1">
                    {artist.bio?.slice(0, 80) || "Known artist"}...
                  </p>
                  <button className="mt-2 font-medium underline underline-offset-2">
                    Ask for Quote →
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Round;
