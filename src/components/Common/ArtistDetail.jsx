"use client";
import React from "react";

export default function ArtistDetail({artist}) {
console.log(artist)

  return (
    <div className="min-h-screen bg-[#0d0d17] text-white px-4 py-10 flex flex-col gap-10 items-center justify-center">
      {/* Profile Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 bg-[#11111a] rounded-2xl p-6 md:p-10 shadow-lg">
        <img
          src={artist?.image}
          alt={artist?.name}
          className="w-full md:w-[400px] h-auto rounded-xl object-cover"
        />
        <div className="text-center md:text-left space-y-4 flex-1">
          <h1 className="text-4xl font-extrabold text-white">{artist?.name}</h1>
          <p className="text-lg text-gray-300">{artist?.bio}</p>
          <div className="text-sm text-gray-400 space-y-1 pt-2">
            <p><span className="text-gray-300 font-medium">Category:</span> {artist?.category}</p>
            <p><span className="text-gray-300 font-medium">City:</span> {artist?.location}</p>
            <p><span className="text-gray-300 font-medium">Budget:</span> {artist?.priceRange}</p>
          </div>
          <button
            onClick={() => alert("Booking Coming Soon!")}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90"
          >
            SEE PRICE & BOOK
          </button>
        </div>
      </div>

      {/* Latest Shows */}
      {/* <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-white mb-4">📅 Latest Shows</h2>
        <div className="space-y-4">
          {artist.latestShows.map((show, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <p className="text-lg font-semibold text-purple-400">{show.title}</p>
                <p className="text-sm text-gray-400">City: {show.city}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">Date: {show.date}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
