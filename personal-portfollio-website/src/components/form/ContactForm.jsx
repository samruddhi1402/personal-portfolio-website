import "./ContactForm.css";

import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_zn3yk1z",
        "template_vwexvhz",
        event.target,
        "XAboAZG3XT_GJtjyU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the form fields
    event.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type="text" placeholder="your name" />
        <label>Email</label>
        <input type="email" placeholder="your email" />
        <label>Subject</label>
        <input type="text" placeholder="subject" />
        <label>message</label>
        <textarea type="text" placeholder="Type your message here  " />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
