import Image from "next/image";
import React, { forwardRef, useState } from "react";

const categories = [
  {
    id: 1,
    name: "Table Top Planters & Pots",
    description: "Elegant planters for your tabletop decor",
    image: "/MB087bg.png",
    link: "/table-top-planters-pots",
  },
  {
    id: 2,
    name: "Floor Planters & Stand Planters",
    description: "Stylish planters to enhance your floor space",
    image: "/MB065bg.png",
    link: "floor-planters-stand-planters",
  },
  {
    id: 3,
    name: "Hanging Planters & Wall Planters",
    description: "Creative solutions for vertical gardening",
    image: "/MB080bg.png",
    link: "hanging-planters-wall-planters",
  },
  {
    id: 4,
    name: "Planters Iron Stand",
    description: "Sturdy and elegant iron stands for your plants",
    image: "/MB086_3bg.png",
    link: "planters-iron-stand",
  },
  {
    id: 5,
    name: "Table Vases (Aluminium)",
    description: "Sleek aluminium vases for modern interiors",
    image: "/MB002-removebg-preview.png",
    link: "table-vases-aluminium",
  },
  {
    id: 6,
    name: "Table Vases (Iron)",
    description: "Rustic iron vases for a classic touch",
    image: "/MB038__3_-removebg-preview.png",
    link: "table-vases-iron",
  },
  {
    id: 7,
    name: "Floor Vases (Iron)",
    description: "Statement pieces to elevate your space",
    image: "/MB009-removebg-preview.png",
    link: "floor-vases-iron",
  },
];

const Products = forwardRef<HTMLElement>((props, ref) => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  return (
    <section ref={ref} id="products" className="max-w-7xl mx-auto">
      <h1 className="py-8 text-3xl font-bold text-center text-black">
        Our Product Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
            h-[450px] flex-shrink-0 m-6 relative overflow-hidden bg-slate-500 rounded-lg shadow-lg 
             transition-all duration-300 ease-in-out
             ${hoveredCardId === category.id ? "scale-105 shadow-2xl" : ""}
           `}
            onMouseEnter={() => setHoveredCardId(category.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <svg
              className={`
               absolute bottom-0 left-0 mb-8 
               transition-transform duration-300 ease-in-out
               ${hoveredCardId === category.id ? "-translate-y-4" : ""}
             `}
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className={`
                 block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3
                 transition-transform duration-300 ease-in-out
                 ${
                   hoveredCardId === category.id
                     ? "scale-110 -translate-y-4"
                     : ""
                 }
               `}
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <Image
                width={300}
                height={300}
                className={`
                 relative transition-transform duration-300 ease-in-out
                 ${hoveredCardId === category.id ? "-translate-y-6" : ""}
               `}
                src={category.image}
                alt={category.name}
              />
            </div>
            {/* Content container positioned at the bottom */}
            <div
              className={`
               absolute bottom-0 left-0 w-full bg-slate-700 bg-opacity-75 text-white px-6 py-4
               transition-all duration-300 ease-in-out
               ${hoveredCardId === category.id ? "translate-y-2" : ""}
             `}
            >
              <span className="block opacity-75">{category.description}</span>
              <div className="flex justify-between mt-2">
                <span className="block font-semibold text-xl">
                  {category.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Products.displayName = "Products";

export default Products;
