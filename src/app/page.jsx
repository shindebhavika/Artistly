import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import Round from "@/components/Home/Round";
import ArtistList from "@/components/Home/ArtistList";
import ArtistFilter from "@/components/Home/ArtistFilter";
// import ArtistDetail from "@/components/Common/ArtistDetail";
import AutoCarousel from "@/components/Common/AutoCarousel";
import { Metadata } from "next";
// import ArtistOnboardingForm from "../components/Auth/ArtistOnboardingForm";

export const metadata = {
  title: "Artistly",
  description: "Discover and book top artists across genres with Artistly – your ultimate artist management and booking platform.",
  icons: {
    icon: "/star.png", // ✅ Remove '/public' since 'public' is the root
  },
};


export default function Home() {
  return (
    <main>
    
      <Hero />
      {/* <ArtistOnboardingForm/> */}
      {/* <ArtistDetail/> */}
   <ArtistList />
<Round/>
   <ArtistFilter />
      <Features />
      {/* <Cook /> */}
      <Expert />
      <Gallery />
      <Newsletter />
    </main>
  );
}
