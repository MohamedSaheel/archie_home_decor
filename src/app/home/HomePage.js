"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
function HomePage() {
  const slides = [
    { id: 1, image: "/assets/images/carousel/1.png", content: "Slide 1" },
    { id: 2, image: "/assets/images/carousel/2.png", content: "Slide 2" },
    { id: 3, image: "/assets/images/carousel/3.png", content: "Slide 3" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  useEffect(() => {
    // Start automatic slideshow
    slideInterval.current = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(slideInterval.current);
  }, []);
  return (
    <div className="h-screen w-full">
      <div className="flex flex-wrap justify-between w-full  lg:space-x-0 space-y-6 p-6">
        <div className="md:text-6xl text-4xl font-bold w-[300px] lg:leading-[80px]">
          <span className="text-8xl">A</span>rchitecture. Planning. Design.
        </div>
        <div>
          <div className="flex bg-primary p-2 text-white items-center justify-center space-x-10 rounded-3xl">
            <div>Get in touch</div>

            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
            </svg>
          </div>
          <div className="flex justify-evenly mt-3 space-x-4">
          <a href="https://wa.me/917825915899" target="_blank">
              <img
                src="/assets/icons/whatsapp-icon.png"
                alt="Whatsapp Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.instagram.com/archie_home_decors?igsh=d293dnlnY3Q0ZHR3"
              target="_blank"
            >
              <img
                src="/assets/icons/insta-icon.png"
                alt="Instagram Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.facebook.com/nanba.nanba.75873"
              target="_blank"
            >
              <img
                src="/assets/icons/facebook-icon.png"
                alt="Facebook Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="mailto:archiehomedecors@gmail.com">
              <img
                src="/assets/icons/mail-icon.png"
                alt="Mail Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="tel:917825915899">
              <img
                src="/assets/icons/phone-icon.png"
                alt="Phone Image"
                width="30px"
                height="30px"
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div id="controls-carousel" className="relative w-full py-6">
          <div className="relative h-56 overflow-hidden md:h-96">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide
                    ? "block transform transition-transform duration-700 ease-in-out"
                    : "hidden"
                } absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
              >
                <img src={slide.image} className="block w-full" alt="..." />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevSlide}
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4  dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={handleNextSlide}
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4  dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
