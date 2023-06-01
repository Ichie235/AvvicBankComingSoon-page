import React from "react";
import '../footerIcons/icons.css'

import {
    UilFacebookF,
    UilTwitterAlt,
    UilInstagram,
    UilLinkedinAlt,
  } from "@iconscout/react-unicons";
  

function FotterIcon() {
  return (
    <>
      <div className="footer-icons">
        <a
          href="https://web.facebook.com/avvicconsults/?_rdc=1&_rdr"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <UilFacebookF color="#000000" />{" "}
        </a>
        <a
          href="https://twitter.com/avvicgroup"
          target={"_blank"}
          rel="noreferrer"
        >
          <UilTwitterAlt color="#000000" />
        </a>
        <a
          href="https://www.instagram.com/avvicgroup/"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <UilInstagram color="#000000" />
        </a>
        <a
          href="https://www.linkedin.com/in/avvic-group-1b2b81231/"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          <UilLinkedinAlt color="#000000" />
        </a>
      </div>
    </>
  );
}

export default FotterIcon;
