import { WrenchIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const WhyMetalberg = () => {
  return (
    <section className="bg-slate-300 pb-10 mt-6">
      <h1 className="py-8 text-3xl font-bold text-center text-black">
        Why Choose MetalBerg?
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 w-full max-w-7xl text-center text-slate-900">
          {/* Grid Item 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center justify-center ">
            <div className="p-4 mb-10 bg-slate-300 rounded-full inline-flex">
              <WrenchIcon height={50} width={50} color="#1C1464" />
            </div>

            <h2 className="text-2xl font-bold mb-3">Craftsmanship</h2>
            <p className="w-5/6">
              Our artisans bring years of experience and skill to every piece
              they create.
            </p>
          </div>
          {/* Grid Item 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center ">
            <div className="p-4 mb-10 bg-slate-300 rounded-full inline-flex">
              <StarIcon height={50} width={50} color="#1C1464" />
            </div>

            <h2 className="text-2xl font-bold mb-3">Excellence</h2>
            <p className="w-5/6">
              We strive for perfection in every detail, ensuring the highest
              quality products.
            </p>
          </div>
          {/* Grid Item 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center ">
            <div className="p-4 mb-10 bg-slate-300 rounded-full inline-flex">
              <CurrencyDollarIcon height={50} width={50} color="#1C1464" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Affordable Luxury</h2>
            <p className="w-5/6">
              Experience luxury without breaking the bank with our competitively
              priced products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMetalberg;
