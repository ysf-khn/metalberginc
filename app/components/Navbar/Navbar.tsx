"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

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

  // Handle scroll locking
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "#products", label: "Products" },
    { href: "/why-us", label: "Why Us" },
    { href: "/faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold p-2 bg-white/10 rounded-full backdrop-blur-sm z-50"
        >
          <Image
            src="/logoTrans.png"
            alt="Metalberg Logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 bg-black/50 px-10 py-3 rounded-full backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <XMarkIcon height={24} width={24} className="text-white" />
          ) : (
            <div className=" bg-white rounded-full backdrop-blur-sm p-4">
              <Bars3Icon height={24} width={24} />
            </div>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/90 h-screen backdrop-blur-lg transition-transform duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
