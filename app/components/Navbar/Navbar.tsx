"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo on the left */}
        <Link
          href="/"
          className="text-white text-2xl font-bold p-2 bg-white/10 rounded-full backdrop-blur-sm"
        >
          <Image
            src="/logoTrans.png" // Replace with the path to your logo
            alt="Metalberg Logo"
            width={50} // Adjust size as needed
            height={50}
          />
        </Link>

        {/* Centered navbar items */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 bg-white/10 px-10 py-3 rounded-full backdrop-blur-sm">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#products" className="text-white hover:text-gray-300">
            Products
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
