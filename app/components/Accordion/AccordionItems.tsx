import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const faqData = [
  {
    question: "Are you a manufacturer or trader?",
    answer: "We are manufacturers ourselves.",
  },
  {
    question: "How old is your company?",
    answer:
      "Though our company is just 1 year old, we have been in this business for more than 80 years.",
  },
  {
    question: "Do you do drop shipping or Amazon packing?",
    answer:
      "Yes, we do mail order packing as well and also have a tempered glass option.",
  },
  {
    question: "Are you socially compliant?",
    answer: "Yes, we are ISO 9001 certified.",
  },
  {
    question: "What is your MOQ?",
    answer:
      "We do assorted orders as well. Our MOQ ranges from 25 to 100 pieces depending on the product.",
  },
  {
    question: "Do you handle LCL/small orders?",
    answer: "Yes, we do.",
  },
  {
    question: "Do you work on customized designs?",
    answer: "Yes, we do.",
  },
  {
    question: "Do you offer any warranty or guarantee?",
    answer: "Yes, we offer a guarantee on our products.",
  },
  {
    question: "What is your production lead time?",
    answer: "60 to 90 days.",
  },
  {
    question: "What is your sample lead time?",
    answer: "7 to 14 days.",
  },
  {
    question: "Do you have any dealers or branches?",
    answer: "No.",
  },
  {
    question: "Do you charge fees for samples or developments?",
    answer:
      "No, we do not charge for sample development. Up to 2 pieces are free on ex-works basis.",
  },
  {
    question: "How many machines do you have?",
    answer:
      "Very minimal machines are required for our products. The majority of work is done by hand.",
  },
  {
    question: "What is the easiest way to contact you?",
    answer: "By email or phone ( contact@metalberginc.com / +91 97209 99830).",
  },
  {
    question: "Do you participate in exhibitions?",
    answer: "Yes, we do.",
  },
  {
    question: "How do you pack your goods?",
    answer: "We use polystyrene, corrugation, foam, bubble sheets, etc.",
  },
  {
    question: "Do you do gift/colored boxes?",
    answer: "Yes, we do.",
  },
];

const AccordionItems = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-2 px-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <span
              className={`transform transition-transform duration-200 ${
                openItems.has(index) ? "rotate-180" : ""
              }`}
            >
              <ChevronDownIcon height={20} width={20} />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openItems.has(index) ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-gray-50 text-gray-600 border-t border-gray-200">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItems;
