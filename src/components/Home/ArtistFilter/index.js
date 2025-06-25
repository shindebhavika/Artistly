"use client";

import { useEffect, useState } from "react";
import ArtistCard from "../../Common/ArtistCard";
import FilterBlock from "../../Common/FilterBlock";
import { artists } from "@/app/api/data";
const data=artists
const ArtistFilter = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
    search:""
  });

useEffect(() => {
  let result = data;

  if (filters.category)
    result = result.filter((a) => a.category === filters.category);

  if (filters.location)
    result = result.filter((a) => a.location === filters.location);
if (filters.search.trim()) {
  result = result.filter((a) =>
    a.name.toLowerCase().includes(filters.search.toLowerCase())
  );
}

  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split("-").map(Number);
    result = result.filter(
      (a) => a.priceRange >= min && a.priceRange <= max
    );
  }

  setFiltered(result);
}, [filters]); // ✅ make sure this is properly closed too


  return (
   <div className="p-6 max-w-6xl mx-auto">
  <FilterBlock filters={filters} setFilters={setFilters} />

  {filtered.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((artist, idx) => (
        <ArtistCard key={idx} artist={artist} />
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500 mt-10 text-lg">No match found.</p>
  )}
</div>

  );
};

//commit
export default ArtistFilter;
