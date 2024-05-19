"use client";

import { useEffect, useState } from "react";
import ContactInput from "./contactInput";

export default function ContactForm() {

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

  const setNameError = (value: string) => {
    setName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: value === "" || value.length < 3 ? "Please enter a valid name" : "",
    }));
  };

  const setEmailError = (value: string) => {
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) === false || value === "" ? "Please enter a valid email address" : "",
    }));
  };

  const setNumberError = (value: string) => {
    setNumber(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      number: value === "" || value.length < 6 ? "Please enter a valid phone number" : "",
    }));
  };

  const setMessageError = (value: string) => {
    setMessage(value);
   setErrors((prevErrors) => ({
      ...prevErrors,
      message: value === "" || value.length < 10 ? ("Please enter a valid message") : "",
    }));
  };

  // validate field on change
  const validateField = (value: any, inputName: string) => {
    switch (inputName) {
      case "name":
        setNameError(value);
        break;
      case "email":
        setEmailError(value);
        break;
      case "number":
        setNumberError(value);
        break;
      case "message":
        setMessageError(value);
        break;
    }
  };
  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // validate all fields
    validateField(name, "name");
    validateField(email, "email");
    validateField(number, "number");
    validateField(message, "message");
    
    // if all fields are valid, submit form
    if (Object.values(errors).every((err) => err !== "")) {
      console.log("form submitted");
    } else {
      console.log("form invalid");
    }

  };
  
  // if all fields are empty, set errors to empty
  useEffect(() => {
    if (name === "" && email === "" && number === "" && message === "") {
      setErrors({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
  }, [name, email, number, message]);

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-5"
      onSubmit={handleSubmit}
      id="contactForm"
    >
      <div className="grid grid-rows-6 gap-5">
        <ContactInput
          label="Name:"
          name="name"
          validate={validateField}
          error={errors.name}
          type="text"
          value={name}
        />
        <ContactInput
          label="Email Address:"
          name="email"
          validate={validateField}
          error={errors.email}
          type="email"
          value={email}
        />
        <ContactInput
          label="Phone Number:"
          name="number"
          validate={validateField}
          error={errors.number}
          type="number"
          value={number}
        />
      </div>
      <div className="grid grid-rows-6 gap-5">
        <ContactInput
          label="Message:"
          name="message"
          validate={validateField}
          error={errors.message}
          type="textarea"
          value={message}
        />
        <button
          className="bg-brandOrange rounded p-4 text-white sm:mb-0 row-span-1 disabled:bg-brandGray"
          disabled={Object.values(errors).some((err) => err !== "")}
        >
          <p>Submit</p>
        </button>
      </div>
    </form>
  );
}
