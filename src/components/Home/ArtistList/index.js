"use client";

import { artists } from "@/app/api/data";
import { useState, useRef } from "react";
import Round from "../Round";

export default function ArtistList() {
  const data = artists;
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(data.map((a) => a.category))];

  const filtered = category === "All"
    ? data
    : data.filter((a) => a.category === category);

  const containerRef = useRef();

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto  ">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              category === cat
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Scroll Controls */}
      <div className="w-full h-1/3 ">
            <Round category={category}/>
      </div>



    </div>
  );
}
