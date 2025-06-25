"use client";
import React from "react";

const artist = {
  name: "Arijit Singh",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyF_NMNkcvh05-h8D8t4x0gTyvK_w3ASH3g&s",
  category: "Singer",
  city: "Mumbai",
  budget: "₹30,00,000",
  bio: "Arijit Singh is one of India's most celebrated playback singers, known for his soulful voice and emotional range.",
  latestShows: [
    {
      title: "Live at Jio World Drive",
      date: "May 2025",
      city: "Mumbai",
    },
    {
      title: "Bollywood Beats Night",
      date: "March 2025",
      city: "Delhi",
    },
    {
      title: "Music Under the Stars",
      date: "January 2025",
      city: "Bangalore",
    },
  ],
};

const ArtistDetail = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Artist Overview */}
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-md p-6 rounded-lg">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full md:w-64 h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-purple-700">{artist.name}</h1>
          <p className="mt-2 text-gray-700">{artist.bio}</p>
          <div className="mt-4 space-y-2">
            <p><span className="font-semibold">Category:</span> {artist.category}</p>
            <p><span className="font-semibold">City:</span> {artist.city}</p>
            <p><span className="font-semibold">Budget:</span> {artist.budget}</p>
          </div>
        </div>
      </div>

      {/* Latest Shows */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Shows</h2>
        <ul className="space-y-4">
          {artist.latestShows.map((show, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <p className="text-lg font-semibold text-purple-700">{show.title}</p>
                <p className="text-sm text-gray-600">City: {show.city}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">Date: {show.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistDetail;
