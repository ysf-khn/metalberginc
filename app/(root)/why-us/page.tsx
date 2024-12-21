import { Footer } from "@/app/components/Footer/Footer";
import React from "react";

const page = () => {
  const values = [
    "CRAFTSMANSHIP",
    "EXCELLENCE",
    "AFFORDABLE LUXURY",
    "ETHICAL",
    "RELIABLE",
    "GLOBAL REACH",
    "FLEXIBLE PAYMENTS",
    "INNOVATIVE",
    "EXHIBITIONS",
    "LARGE PRODUCTION CAPACITY",
    "ON-TIME DELIVERY",
    "YEARS OF EXPERIENCE",
    "QUALITY CONTROL",
    "EASY CUSTOMIZATIONS",
    "COMPETITIVE PRICING",
    "COMPLIANT PRODUCTS",
    "EASY COMMUNICATION",
  ];

  return (
    <section className="w-full pt-24 bg-white text-black">
      <h1 className="text-center text-3xl font-bold pb-8">
        Why Choose Metalberg?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8 mb-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="aspect-square bg-black rounded-lg flex items-center justify-center p-4"
          >
            <p className="text-white text-center font-bold text-2xl md:text-base">
              {value}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default page;
