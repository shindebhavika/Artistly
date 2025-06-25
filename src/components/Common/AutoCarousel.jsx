
"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
"https://i.pinimg.com/736x/8b/fe/8e/8bfe8e046a0f3c05f34ee9b788854783.jpg",

"https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/04/HD-wallpaper-arjith-singh-bollywood-singerITG-1745563735262.jpg?size=*:900",
    "https://blackhattalent.com/wp-content/uploads/2023/12/n6.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx6_U1pyOqs8XUNOc2Z3cXz36ORj8NcBAPg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaV5OK_S9xtyETTQAuFCcYIjKZkA4ecQUT8A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZurjnkWUad-nbNug-nAhjWYjaBYUh8j7z7g&s",
        "https://english.cdn.zeenews.com/sites/default/files/2023/02/20/1157171-tn.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcocJR3FafKjU-kY7dAbCM_drOjucLxw3uAxsdg_N65ebzTdP_gLHjwY5wTyHOlE9K7E&usqp=CAU"
  
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startCarousel();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
        <Image
                  key={idx}
                  src={src}
              
              loading="lazy"
                   alt="main"
              width={1000}
              height={805}
              className="rounded-xl w-[1000px] h-[450px] object-center object-cover"
                />
         
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
