// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";
import React, { useState } from "react";
import { floorPlantersStandPlanters } from "./data";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsRequestSubmitted(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setFormData({ name: "", email: "", phone: "", quantity: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productName: selectedProduct.name,
        }),
      });

      if (response.ok) {
        setIsRequestSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: "",
          message: "",
        });
      } else {
        alert("Failed to submit the request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <section className="bg-white text-black pt-[7rem]">
      <h2 className="font-bold text-3xl text-center mb-[4rem]">
        Table Top Planters & Pots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-8 p-8">
        {floorPlantersStandPlanters.map(({ id, name, src }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-8 bg-slate-100 p-3 rounded-lg"
          >
            <img
              src={src}
              alt={name}
              className="w-[300px] h-[400px] object-cover"
            />
            <h3 className="text-xl font-bold uppercase text-center">{name}</h3>
            <button
              onClick={() => handleOpenModal({ id, name })}
              className="bg-blue-950 w-fit text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              More Info
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            {!isRequestSubmitted ? (
              <>
                <h3 className="text-xl font-bold mb-4">
                  Info about product: {selectedProduct.name}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)"
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity (Optional)"
                    className="border p-2 rounded"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message (Optional)"
                    className="border p-2 rounded"
                    rows="4"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <h3 className="text-xl font-bold mb-4 text-center">
                Request Submitted!
              </h3>
            )}
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
