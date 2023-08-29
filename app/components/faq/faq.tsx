"use client";

import React, { useState } from "react";

interface FAQEntry {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQEntry[] = [
    {
      question: "Do you do emergency call outs?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti explicabo facere, accusantium voluptates tempora laborum pariatur, autem neque praesentium officia recusandae voluptas aut necessitatibus quis incidunt. Expedita, blanditiis quod?",
    },
    {
      question: "How quick do you respond to call outs?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti explicabo facere, accusantium voluptates tempora laborum pariatur, autem neque praesentium officia recusandae voluptas aut necessitatibus quis incidunt. Expedita, blanditiis quod?",
    },
    {
      question: "How much do you charge?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti explicabo facere, accusantium voluptates tempora laborum pariatur, autem neque praesentium officia recusandae voluptas aut necessitatibus quis incidunt. Expedita, blanditiis quod?",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti explicabo facere, accusantium voluptates tempora laborum pariatur, autem neque praesentium officia recusandae voluptas aut necessitatibus quis incidunt. Expedita, blanditiis quod?",
    },
  ];

  /**
   * handleAccordionClick is a function that sets the activeIndex state variable to the index of the accordion that was clicked
   * @param index 
   */
  const handleAccordionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section
      className="text-black flex flex-col px-5 py-4 max-w-6xl m-auto"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-left sm:text-4xl py-5">
        Frequently Asked Questions
      </h2>
      <p className="py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-5">
          <div
            className="text-brandOrange text-lg sm:text-2xl font-bold text-left py-2 cursor-pointer flex justify-between items-center align-top"
            onClick={() => handleAccordionClick(index)}
          >
            {faq.question}
            <span className="text-brandOrange text-2xl sm:text-4xl self-start leading-none pl-5">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
}
