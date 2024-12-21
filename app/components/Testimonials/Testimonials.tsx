import React from "react";

const reviews = [
  {
    name: "Sameer",
    review:
      "We ordered 50 floor planters for our hotel chain and they've transformed all our lobby spaces. The bulk pricing was excellent and the quality is consistent across all pieces. Our staff loves how sturdy they are for maintenance.",
  },
  {
    name: "Aisha",
    review:
      "As a landscape designer, I purchased 30 hanging planters for a large residential project. The wholesale process was smooth and every single piece met our quality standards. My client is thrilled with the unified look.",
  },
  {
    name: "Ayan",
    review:
      "Our restaurant group bought 25 iron stands for our outdoor seating areas. The bulk order arrived perfectly packaged and the volume discount made it a great value. They've held up beautifully across all our locations.",
  },
  {
    name: "Sania",
    review:
      "Ordered 100 table top vases for our event planning business. The wholesale pricing was competitive and the consistency in design is exactly what we needed. They're perfect for our corporate events.",
  },
  {
    name: "Aryan",
    review:
      "We furnished our entire office complex with 40 floor vases, and the impact is stunning. The bulk purchase process was efficient, and the quantity discount made it possible to outfit all six floors. Every piece has the same high-quality finish.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gray-100 py-12 text-slate-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden flex gap-8 ">
        <div className="flex justify-between items-center gap-8 flex-shrink-0 min-w-full animate-scroll hover:[animation-play-state:paused]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center w-[450px]"
            >
              <p className="italic text-gray-700 mb-4">{review.review}</p>
              <span className="text-lg font-semibold">{review.name}</span>
            </div>
          ))}
        </div>

        {/* Duplicate list to show infinite animation */}
        <div
          className="flex justify-between items-center gap-8 flex-shrink-0 min-w-full animate-scroll hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center w-[450px]"
            >
              <p className="italic text-gray-700 mb-4">{review.review}</p>
              <span className="text-lg font-semibold">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
