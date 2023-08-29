"use client";

import { useState } from "react";
import { reviewsContent } from "./reviewsContent.js";
import ReviewsItem from "./reviewsItem";

export default function Reviews() {

  const [showAllReviews, setShowAllReviews] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const transitionTime = 300;
  const buttonText = showAllReviews ? "Show less..." : "Show more...";
  
  // If showAllReviews is true, then visibleReviews is the entire reviewsContent array
  const visibleReviews = showAllReviews ? reviewsContent : reviewsContent.slice(0, 3);

  /**
   * toggleOpacity is a function that sets the opacity to 1 after a delay of transitionTime
   * This is a workaround for the fact that the transition property doesn't work with display: none
   * @returns {void}
   */
  const toggleOpacity = () => {
    setTimeout(() => {
      setOpacity(1);
    }, transitionTime);
  };

  /**
   * toggleReviews is a function that sets the opacity to 0, then after a delay of transitionTime
   * it toggles the showAllReviews state variable
   * This causes the reviews to fade out, then fade back in with the new state
   * This is a workaround for the fact that the transition property doesn't work with display: none
   * @returns {void}
   */
  const toggleReviews = () => {
    setOpacity(0);
    setTimeout(() => {
      toggleOpacity();
      setShowAllReviews((prevState) => !prevState);
    }, transitionTime);
  };

  return (
    <section className="text-black flex flex-col px-5 py-4 max-w-6xl m-auto">
      <h2 className="text-4xl font-bold text-left py-5">
        What customers say...
      </h2>
      <p className="sm:py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <div
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-10 mt-10"
        style={{
          transitionProperty: "opacity",
          transitionTimingFunction: "ease-in-out",
          transitionDuration: transitionTime + "ms",
          opacity: opacity,
        }}
      >
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
