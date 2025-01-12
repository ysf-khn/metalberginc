import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white" id="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">MetalBerg Inc.</h3>
            <p className="mt-4 text-gray-300">
              Crafting excellence in metal handicrafts
              <br />
              and home décor.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Categories
                </Link>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-300 hover:text-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">
                  Prince Road, Harpal Nagar, Moradabad, U.P. (India)
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">+91 97209 99830</span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-300">contact@metalberginc.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-500 text-center">
          <p className="text-gray-400">
            © 2024 MetalBerg Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
