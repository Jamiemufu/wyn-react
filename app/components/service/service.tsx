"use client";

import { useState } from "react";
import ServiceItem from "./serviceItem";

export default function Service() {

  return (
    <section className="text-black flex flex-col px-5 py-4 pt-0 max-w-6xl m-auto"
    id="services">
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
    </section>
  );
}
