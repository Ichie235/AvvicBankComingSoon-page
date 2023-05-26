import React, { Component } from "react";
import "../comingSoon/coming.css";

// IMPORTED COMPONENTS
import RoundClock from "../../components/clock/clock";
import {Slide,Zoom } from "react-awesome-reveal";

// IMPORTED IMAGES AND ICON
import HeroClock from "../../assests/images/heroClock.png";
import HeroImage from "../../assests/images/hero-image.png";
import fastIcon from "../../assests/images/fastIcon.png";
import secureIcon from "../../assests/images/secureIcon.png";
import supportIcon from "../../assests/images/supportIcon.png";
import avvicLogo2 from "../../assests/images/avvicLogo-2.png";
import Facebook from "../../assests/images/Facebook.png";
import Instagram from "../../assests/images/Instagram.png";
import LinkedIn from "../../assests/images/LinkedIn.png";
import Twitter from "../../assests/images/Twitter.png";

export class comingSoon extends Component {
  render() {
    return (
      <div className="coming">
        <section className="hero-container">
          <div>
            <RoundClock />
            <div className="hero-content-container">
              <Slide>
              <p>OUR NEW SITE IS</p>
              </Slide>
              <Slide direction={"right"}>
              <h1 className="hero-content-heading">COMING <br/> SOON</h1>
              </Slide>
              <p className="hero-content">STAY TUNED</p>
            </div>
            {/* <figure>
              <img src={HeroClock} className="hero-clock"></img>
            </figure> */}
            {/* <div className="heroText">
              <p>
                We are working hard to improve our website and we’ll be ready to{" "}
                <br></br> launch soon!
              </p>
            </div>
            <div>
              <figure>
                <img src={HeroImage} className="hero-image"></img>
              </figure>
            </div> */}
          </div>
        </section>
        <section className="info-container">
          <div>
          <Slide>
            <h1 className="info-heading">Enjoy Seamless Banking </h1>
            <p className="info-heading2">
              We seek to offer you nothing but the best banking experience
            </p>
            </Slide>
          </div>
          <div class="info-content-container">
           
            <div class="column">
            <Zoom>
              <figure>
                <img src={secureIcon} className="icon"></img>
              </figure>
              <div>
                <h3 className="info-content-heading">Secure</h3>
                <p className="info-content">
                  We employ robust encryption protocols and <br /> stringent
                  security measures to safeguard your <br /> personal
                  information and transactions.
                </p>
              </div>
              </Zoom>
            </div>
            <div class="column">
            <Zoom>
              <figure>
                <img src={fastIcon} className="icon"></img>
              </figure>
              <div>
                <h3 className="info-content-heading">Fast</h3>
                <p className="info-content">
                  Our fast-paced operations ensure that you <br /> can carry out
                  your banking activities swiftly <br /> and conveniently,
                  saving you precious time.
                </p>
              </div>
              </Zoom>
            </div>
            <div class="column">
            <Zoom>
              <figure>
                <img src={supportIcon} className="icon"></img>
              </figure>
              <div>
                <h3 className="info-content-heading">Support</h3>
                <p className="info-content">
                  {" "}
                  our support team is available to provide <br /> prompt and
                  personalized assistance, ensuring <br /> you receive the best
                  possible customer <br /> experience.
                </p>
              </div>
              </Zoom>
            </div>
          </div>
        </section>
        <section className='avvic-logo-2-container'>
        <figure>
          <img src={avvicLogo2} className='avvic-logo-2'></img>
        </figure>
        </section>
        <section className="footer-container">
          <div className="footer-column">
          <Slide direction={"right"}>
            <h4 className="footer-heading">Subscribe</h4>
            <p className="footer-content">
              Join our newsletter to stay up to date on latest information
            </p>
            <div className="contact-us">
              <input
                typeof="email"
                placeholder="Enter your email"
                className="contact-form"
              ></input>
              <button className="contact-btn">Subscribe</button>
            </div>
            <p className="subscribe-content">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
            </Slide>
          </div>
          <div className="footer-column">
          <Slide>
            <h4 className="footer-heading">Address:</h4>
            <p className="footer-content">
              House B1, Rose Gardens Courts,Rangers Avenue, Enugu. Nigeria
            </p>
            <h4 className="footer-heading">Contact:</h4>
            <p className="footer-content">
              info@avvicgroup.com <br /> +2348149316300
            </p>
            <div className="footer-icons">
              <img src={Facebook}></img>
              <img src={Instagram}></img>
              <img src={LinkedIn}></img>
              <img src={Twitter}></img>
            </div>
            </Slide>
          </div>
          <div className="footer-column">
          <Slide>
            <h4 className="footer-heading">Quick Links</h4>
            <p className="footer-content">Home</p>
            <p className="footer-content">About us</p>
            <p className="footer-content">Open Account</p>
            <p className="footer-content">Careers</p>
            </Slide>
          </div>
        </section>
        <div className="divider-container">
          <div className="divider-content">
            <p className="divider-content-item">
              2023 Avvic Group. All rights reserved.
            </p>
            <p className="divider-content-item">Privacy Policy</p>
            <p className="divider-content-item">Terms of Service</p>
          </div>
        </div>
      </div>
    );
  }
}

export default comingSoon;