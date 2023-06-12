import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../components/subscribeForm/form.css";

function Form() {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsEmailValid(true);
      setEmail("");
    } else {
      setIsEmailValid(false);
      setTimeout(() => {
        setIsEmailValid(true);
      }, 4000);
      return;
    }
    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Email sent successfully!", {
              position: toast.POSITION.TOP_CENTER,
            });
          },
          (error) => {
            toast.warning("Email not sent", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        );
    } catch (error) {
      console.error(error);
      toast.warning("Failed to send email", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (
    <>
      {" "}
      <div className="contact-us">
        <form ref={form} onSubmit={handleSubmit}>
          <input
            typeof="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={!isEmailValid ? "invalid" : ""}
            className="contact-form"
          ></input>
          <button className="contact-btn">Subscribe</button>
          {!isEmailValid && (
            <p className="error" style={{ color: "red", textAlign: "center" }}>
              Please enter a valid email address.
            </p>
          )}
        </form>
        <ToastContainer />
      </div>
      <p className="subscribe-content">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from our <br /> company.
      </p>
    </>
  );
}

export default Form;
