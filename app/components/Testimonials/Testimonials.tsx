import React from "react";

const reviews = [
  {
    name: "Sameer",
    review:
      "The floor planters I purchased are stunning and have added a whole new level of sophistication to my home. They're sturdy and beautifully designed.",
  },
  {
    name: "Aisha",
    review:
      "I've been searching for the perfect hanging planters, and these exceeded my expectations. They bring life to my balcony garden.",
  },
  {
    name: "Ayan",
    review:
      "The iron stands I bought are both elegant and durable. It's rare to find something that combines style with functionality so well. I'm beyond satisfied.",
  },
  {
    name: "Sania",
    review:
      "The table top vases are sleek, modern, and fit perfectly with my decor. The quality speaks for itself, and I couldn't be happier with my choice.",
  },
  {
    name: "Aryan",
    review:
      "The floor vases have become a statement piece in my home. They're beautifully crafted, and the attention to detail is remarkable. A truly great find!",
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
