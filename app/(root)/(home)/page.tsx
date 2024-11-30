"use client";

import { Footer } from "@/app/components/Footer/Footer";
import Hero from "@/app/components/HeroSection/Hero";
import Products from "@/app/components/Products/Products";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import WhyMetalberg from "@/app/components/WhyMetalberg/WhyMetalberg";
import React, { useRef } from "react";

const Page = () => {
  const productsRef = useRef<HTMLElement | null>(null);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="bg-slate-50">
      <Hero scrollToProducts={scrollToProducts} />
      <Products ref={productsRef} />
      <WhyMetalberg />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;
