import React, { useState } from "react";
import "../modalBox/modal.css";
//import axios from 'axios'

const Modal = ({ isOpen, onClose }) => {
  // THE COMMENTED CODE BELOW IS NOT IN USE
  // const [name,setName] =  useState("")

  // async function postName(e){
  //   e.preventDefault()
  //   try{
  //     await axios.post("http://localhost:5000/post_name",{
  //       name
  //     })
  //   }catch (error){
  //       console.log(error)
  //   }
  // }
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
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Subscribe</h2>
        <p> Join our newsletter to stay up to date on latest information.</p>
        <div className="contact-us">
          <form onSubmit={handleSubmit}>
            <input
              typeof="email"
              placeholder="Enter your email"
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
          {showSuccessPopup && (
            <div className={`success-popup ${showBorder ? "" : "hide-border"}`}>
              <p>Email sent successfully!</p>
            </div>
          )}
          {/* THE COMMENTED CODE BELOW IS NOT IN USE */}
          {/* <form onSubmit={postName} style={{position:'relative',zIndex:'99999999'}}>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button type="submit">Send name</button>
      </form> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
