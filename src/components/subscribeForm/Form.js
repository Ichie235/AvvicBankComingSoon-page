import React, { useState } from "react";
import "../../components/subscribeForm/form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showBorder, setShowBorder] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      setTimeout(() => {
        setIsEmailValid(true);
      }, 4000);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setEmail("");
        setShowSuccessPopup(true);

        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);

        setTimeout(() => {
          setShowBorder(false);
        }, 2000);
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
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
        <form onSubmit={handleSubmit}>
          <input
            typeof="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={!isEmailValid ? "invalid" : ""}
            className="contact-form"
          ></input>

          {!isEmailValid && (
            <p className="error" style={{ color: "red", textAlign: "center" }}>
              Please enter a valid email address.
            </p>
          )}
          <button className="contact-btn">Subscribe</button>
        </form>
      </div>
      {showSuccessPopup && (
        <div className={`success-popup ${showBorder ? "" : "hide-border"}`}>
          <p>Email sent successfully!</p>
        </div>
      )}
      <p className="subscribe-content">
        By subscribing you agree to with our Privacy Policy and provide consent
        to receive updates from  our <br/> company.
      </p>
    </>
  );
}

export default Form;
