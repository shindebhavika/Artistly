"use client";
import Link from "next/link";

const ArtistCard = ({ artist }) => {
  const artistSlug = encodeURIComponent(artist.name.toLowerCase().replace(/\s+/g, "-"));

  return (
    <Link href={`/artist/${artistSlug}`}>
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-lg font-bold">{artist.name}</h2>
          <p className="text-sm ">{artist.category}</p>
          <p className="text-sm">{artist.location}</p>
          <p className="text-sm ">₹{artist.priceRange}</p>
          <button className="mt-2 font-medium underline underline-offset-2">
            Ask for Quote →
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
