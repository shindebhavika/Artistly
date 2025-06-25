import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";

import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";

import ArtistList from "@/components/Home/ArtistList";
import ArtistFilter from "@/components/Home/ArtistFilter";




export const metadata = {
  title: "Artistly | Book Top Artists Across India",
  description:
    "Discover and book top artists across genres with Artistly – your ultimate artist management and booking platform.",
  keywords: [
    "Artist booking",
    "Artistly",
    "Live performances",
    "Book DJ",
    "Hire singer",
    "Comedians India",
    "Event artists",
    "Artist manager",
  ],
  icons: {
    icon: "/star.png", // ensure star.png is in the /public folder
  },
  openGraph: {
    title: "Artistly | Book Top Artists Across India",
    description:
      "Discover singers, DJs, comedians, and more for your next big event. Artistly connects you with the best performers.",
    url: "https://yourdomain.com", // ✅ Replace with your actual URL
    siteName: "Artistly",
    images: [
      {
        url: "/og-image.png", // place an image in /public
        width: 1200,
        height: 630,
        alt: "Artistly - Book Top Artists",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly | Book Top Artists",
    description:
      "India’s top platform to discover and book artists for live shows, events, and celebrations.",
    images: ["/og-image.png"], // same image as above
    creator: "@artistlyofficial", // optional
  },
  metadataBase: new URL("https://yourdomain.com"), // replace with your actual domain
};



export default function Home() {
  return (
    <main>
    
      <Hero />
   
  
     
   <ArtistList />

   <ArtistFilter />
      <Features />
  
      <Gallery />
      <Newsletter />
    </main>
  );
}
