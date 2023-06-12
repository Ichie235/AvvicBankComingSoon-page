import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../modalBox/modal.css";

const Modal = ({ isOpen, onClose }) => {
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
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Subscribe</h2>
        <p> Join our newsletter to stay up to date on latest information.</p>
        <div className="contact-us">
          <form ref={form} onSubmit={handleSubmit}>
            <input
              typeof="email"
              placeholder="Enter your email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id={!isEmailValid ? "invalid" : ""}
              className="contact-form newsfeed-form"
              required
            ></input>
            {!isEmailValid && (
              <p
                className="error"
                style={{ color: "red", textAlign: "center" }}
              >
                Please enter a valid email address.
              </p>
            )}
            <button className="subscribe-btn" type="submit">
              Subscribe
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Modal;
