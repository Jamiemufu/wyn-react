"use client";

import { useState } from "react";
import ContactInput from "./contactInput";

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
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-rows-6 gap-5">
        <ContactInput
          label="Name:"
          name={name}
          stateSet={setName}
          error={errors.name}
          type="text"
        />
        <ContactInput
          label="Email Address:"
          name={email}
          stateSet={setEmail}
          error={errors.email}
          type="email"
        />
        <ContactInput
          label="Phone Number:"
          name={number}
          stateSet={setNumber}
          error={errors.number}
          type="number"
        />
      </div>
      <div className="grid grid-rows-6 gap-5">
        <ContactInput
          label="Message:"
          name={message}
          stateSet={setMessage}
          error={errors.message}
          type="textarea"
        />
         <button className="bg-brandOrange rounded p-4 text-white sm:mb-0 row-span-1">
          <p>Submit</p>
        </button>
       
      </div>
    </form>
  );
}
