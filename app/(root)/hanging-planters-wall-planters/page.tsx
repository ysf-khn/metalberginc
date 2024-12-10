import React from "react";
import { hangingPlantersWallPlanters } from "./data";

const page = () => {
  return (
    <section className=" bg-white text-black pt-[7rem]">
      <h2 className="font-bold text-3xl text-center mb-[4rem]">
        Table Top Planters & Pots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-8 p-8">
        {hangingPlantersWallPlanters.map(({ id, name, src }) => {
          return (
            <div
              key={id}
              className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg"
            >
              <img
                src={src}
                alt={name}
                className="w-[300px] h-[300px] object-cover"
              />
              <h3 className="text-xl font-bold uppercase text-center mb-2">
                {name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
