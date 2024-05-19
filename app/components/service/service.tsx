"use client";

import { useState } from "react";
import ServiceItem from "./serviceItem";

export default function Service() {

  return (
    <section className="text-black flex flex-col px-5 py-4 max-w-6xl m-auto"
    id="reviews">
      <h2 className="text-4xl font-bold text-left py-5">
        Services...
      </h2>
      <p className="sm:py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
       <div
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-10 mt-10"
      >
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
       <ServiceItem/>
      </div>
      {/* <div
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-10 mt-10"
      >
        {visibleReviews.map((review, index) => (
          <ReviewsItem key={index} review={review} />
        ))}
      </div>
      <div className="text-right font-bold py-5">
        <button onClick={toggleReviews}>{buttonText}</button>
      </div> */}
    </section>
  );
}
