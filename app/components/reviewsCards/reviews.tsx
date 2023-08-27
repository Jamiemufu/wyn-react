"use client";

import { useState } from "react";
import { reviewsContent } from "./reviewsContent.js";
import ReviewsItem from "./reviewsItem";

export default function Reviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const visibleReviews = showAllReviews ? reviewsContent : reviewsContent.slice(0, 3);
  const buttonText = showAllReviews ? "Show less..." : "Show more...";

  const toggleReviews = () => {
    setShowAllReviews(prevState => !prevState);
  };

  return (
    <section className="text-black flex flex-col p-5 pt-0 max-w-6xl m-auto">
      <h2 className="text-4xl font-bold text-left sm:text-6xl py-5">
        What customers say...
      </h2>
      <p className="sm:py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-10 mt-10">
        {visibleReviews.map((review, index) => (
          <ReviewsItem key={index} review={review} />
        ))}
      </div>
      <div className="text-right font-bold py-5">
        <button onClick={toggleReviews}>{buttonText}</button>
      </div>
    </section>
  );
}
