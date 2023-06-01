import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
    try {
      const response = await fetch('https://avvic-project-api.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send email.');
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
        <h2 >Subcribe</h2>
        <p> Join our newsletter to stay up to date on latest information.</p>
        <div className="contact-us">
          <form onSubmit={handleSubmit}>
            <input
              typeof="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id={!isEmailValid? 'invalid':''}
              className='contact-form newsfeed-form'
            ></input>
              {!isEmailValid && <p className="error" style={{color:'red',textAlign:'center'}}>Please enter a valid email address.</p>}
            <button className="subscribe-btn" type='submit'>Subscribe</button>
          </form>
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
