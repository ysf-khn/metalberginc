import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

interface Hero {
  scrollToProducts: () => void; // Function to scroll to the products section
}

const Hero = ({ scrollToProducts }: Hero) => {
  return (
    <div
      className="h-screen p-6"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-center h-full text-white">
        <div>
          <h1 className="hidden md:block md:text-6xl font-bold">
            Trusted Manufacturer and Exporter
          </h1>
          <h1 className="hidden md:block md:text-6xl font-bold">
            of Fine Metal Handicrafts and Home Décor
          </h1>
          <h1 className="md:hidden text-3xl font-bold">
            Trusted Manufacturer and Exporter of Fine Metal Handicrafts and Home
            Décor
          </h1>
          <h3 className="text-xl mt-3">
            Renowned for Craftmanship, Excellence and Affordable Luxury
          </h3>

          <button
            className="backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full mt-6"
            onClick={scrollToProducts}
          >
            Explore Products{" "}
            <ArrowLongRightIcon height={20} width={20} className="inline" />
          </button>
        </div>
      </div>
    </div>

    // <div className="relative h-screen flex items-center justify-center">
    //   {/* Background Video */}
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute inset-0 w-full h-full object-cover"
    //   >
    //     <source src="/herovideo.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>

    //   {/* Overlay for dimming */}
    //   <div className="absolute inset-0 bg-black/50"></div>

    //   {/* Content */}
    //   <div className="relative z-10 text-center">
    //     <h1 className="text-white text-4xl font-bold">
    //       Welcome to Our Showcase
    //     </h1>
    //     <p className="text-white text-lg mt-4">Discover our amazing products</p>
    //     <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    //       Explore Now
    //     </button>
    //   </div>
    // </div>
  );
};

export default Hero;
