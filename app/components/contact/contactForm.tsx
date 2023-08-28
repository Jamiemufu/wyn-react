"use client";

import { useState } from "react";

export default function ContactForm() {

  //TODO: Add form validation onChange rather than submit
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: name ? "" : "Please enter your name",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "Invalid email address",
      number: number ? "" : "Phone number is required",
      message: message ? "" : "Message is required",
    };
    setErrors(newErrors);
    // return true if there are no errors
    return Object.values(newErrors).every((err) => !err);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      // update this to send the form data to the backend
      console.log(name, email, number, message);
    }
  };

  return (
    <section className="text-black flex flex-col p-5 pt-0 max-w-6xl m-auto">
      <h2 className="text-4xl font-bold text-left sm:text-6xl py-5">
        Contact Us
      </h2>
      <p className="sm:py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
        onSubmit={handleSubmit}
      >
        <div className="grid auto-rows-auto gap-5">
          <div className="grid grid-rows-2">
            <label htmlFor="name">Name:</label>
            {errors.name && (
              <p className=" text-red-600">{errors.name}</p>
            )}

            <input
              type="text"
              id="name"
              name="name"
              className="border-brandOrange border rounded p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-brandOrange border rounded p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-rows-2">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              id="number"
              name="number"
              className="border-brandOrange border rounded p-1"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="grid auto-rows-auto gap-5">
          <div className="grid grid-rows-5 self-start">
            <label htmlFor="message" className="row-span-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border-brandOrange border rounded row-span-4 p-1"
              rows={5}
              cols={50}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-brandOrange rounded p-4 text-white sm:mb-0">
            <p>Submit</p>
          </button>
        </div>
      </form>
    </section>
  );
}
