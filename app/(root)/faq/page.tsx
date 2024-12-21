"use client";
import AccordionItems from "@/app/components/Accordion/AccordionItems";
import { Footer } from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 bg-white text-black pt-24">
      <h1 className="text-3xl font-bold text-center mb-8 p-4">
        Frequently Asked Questions
      </h1>
      <AccordionItems />

      <Footer />
    </div>
  );
};

export default page;
