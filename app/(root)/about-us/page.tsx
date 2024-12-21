import { Footer } from "@/app/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <section className="bg-white pt-24 text-black">
      <h1 className="text-center text-3xl font-bold pb-3">Metalberg Inc.</h1>
      <h3 className="text-xl text-center pb-6">Where Craft Meets Elegance!</h3>

      <article className="px-4 text-center">
        <p className="mb-4">
          Our journey began in 1940 when our grandfather established ASMA STEEL
          & PRAJA STORE, crafting fine metal cutlery and handicrafts with
          unmatched skill and dedication. This legacy of craftsmanship was
          carried forward by our father, who expanded the business into
          international markets, building a global reputation for quality and
          trust.
        </p>

        <p className="mb-4">
          In 2024, as the third generation, we established Metalberg Inc. in
          Moradabad, India&apos;s hub for metal artistry. Our factory combines
          traditional craftsmanship with modern innovation, creating a diverse
          range of premium home décor and giftware. With a clientele that
          includes large retailers, wholesalers, and distributors, we take pride
          in delivering pieces that blend beauty, functionality, and impeccable
          quality.
        </p>

        <p className="mb-4">
          {" "}
          Precision and innovation are at the heart of our work. Our in-house
          quality systems ensure every product meets the highest standards,
          while our designs bring both elegance and purpose to homes worldwide.
        </p>

        <p className="mb-8">
          Thank you for being part of our journey. Together, we continue to
          craft stories that last generations.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Promise to You</h3>
        <p className="mb-8">
          Our commitment extends beyond crafting exquisite products. It is a
          promise to our city, our nation, and most importantly, to you, our
          valued customers. We understand and anticipate your needs, delivering
          bespoke metal giftware and home decor that resonate with our
          dedication to quality and creativity.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Customer-Centric Approach
        </h3>
        <p className="mb-8">
          {" "}
          At Metalberg Inc, your satisfaction is our priority. We pride
          ourselves on our customer centric approach, offering customized
          products and samples for your approval. This ensures every piece we
          create meets your highest expectations, embodying reliability,
          creativity, and tradition.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Craftsmanship and Heritage
        </h3>
        <p className="pb-4">
          Each product from Metalberg Inc is a testament to our heritage and
          skilled craftsmanship. We seamlessly combine traditional techniques
          with modern design, ensuring every piece tells a unique story of
          elegance and precision.
        </p>
      </article>
      <Footer />
    </section>
  );
};

export default page;
