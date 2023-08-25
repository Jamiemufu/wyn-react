"use client";

import { useState, useEffect } from "react";
import { reviewsContent } from "./reviewsContent.js";
import ReviewsItem from "./reviewsItem";

export default function reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const reviewCount = reviewsContent.length;
  const transitionTime = 500;

  const toggleOpacity = () => {
    setTimeout(() => {
      setOpacity(1);
    }, transitionTime);
  };

  const nextReview = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviewCount);
      toggleOpacity();
    }, transitionTime);
  };

  useEffect(() => {
    const reviewTimer = setTimeout(nextReview, 10000);

    return () => {
      clearTimeout(reviewTimer);
    };
  }, [currentReview]);

  return (
    <section className="text-black flex flex-col justify-center items-center p-5 pt-0">
      <h2 className="text-6xl p-5 text-center font-bold">What customers say...</h2>
      <p className="sm:w-1/2 text-center p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit molestias voluptate similique distinctio veritatis natus obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi magni cum error dolores illum.</p>
      <div
      className="transition-opacity ease-in-out"
        style={{
          opacity: opacity,
          transitionDuration: transitionTime + "ms",
        }}
      >
        <ReviewsItem review={reviewsContent[currentReview]} />
      </div>
    </section>
  );
}
