"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import AutoCarousel from "../../Common/AutoCarousel";
const Hero = () => {
  const [mainImage, setMainImage] = useState(
    "https://english.cdn.zeenews.com/sites/default/files/2023/02/20/1157171-tn.png"
  );

  const thumbnails = [
"https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/04/HD-wallpaper-arjith-singh-bollywood-singerITG-1745563735262.jpg?size=*:900",
    "https://blackhattalent.com/wp-content/uploads/2023/12/n6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnEH4O398McNeTJJLLxXZVE_wa0NIC2z18xQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx6_U1pyOqs8XUNOc2Z3cXz36ORj8NcBAPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaV5OK_S9xtyETTQAuFCcYIjKZkA4ecQUT8A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZurjnkWUad-nbNug-nAhjWYjaBYUh8j7z7g&s",
        "https://english.cdn.zeenews.com/sites/default/files/2023/02/20/1157171-tn.png"
  ];

  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-700 ">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="col-span-6">
            <h1 className="text-xl lg:text-7xl font-semibold mb-5 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent md:4px lg:text-start text-center">
              Discover and book the perfect celebrity for your event!
            </h1>

            <p className="text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center">
              We connect you with top-notch celebrities who will make you event
              an unforgettable success.
            </p>
            <div className="md:flex align-middle justify-center lg:justify-start">
              <Link
                href="#cook-section"
                className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary hover:text-primary lg:px-14 mr-6 border border-primary hover:bg-transparent"
              >
                Inquire Now
              </Link>
              <Link
                href="#about-section"
                className="flex border w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:text-white hover:bg-primary"
              >
                Explore now
              </Link>
            </div>
          </div>





         <div className="col-span-6 flex justify-center ">
               <AutoCarousel/>   
           
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
