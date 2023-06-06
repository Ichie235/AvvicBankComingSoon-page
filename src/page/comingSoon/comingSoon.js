import React, { Component } from "react";
import "../comingSoon/coming.css";
// IMPORTED COMPONENTS
import RoundClock from "../../components/clock/clock";
import { Slide, Zoom } from "react-awesome-reveal";
import Form from "../../components/subscribeForm/Form";
import FotterIcon from "../../components/footerIcons/FotterIcon";

// IMPORTED IMAGES AND ICON
import fastIcon from "../../assests/images/fastIcon.png";
import secureIcon from "../../assests/images/secureIcon.png";
import supportIcon from "../../assests/images/supportIcon.png";
import avvicLogo2 from "../../assests/images/avvicLogo-2.png";
import {
  UilFacebookF,
  UilTwitterAlt,
  UilInstagram,
  UilLinkedin,
  UilWhatsapp,
} from "@iconscout/react-unicons";

export class comingSoon extends Component {
  render() {
    return (
      <div className="coming">
        <section className="hero-container">
          <div>
            {/* Below is the Analog Clock Component */}
            <RoundClock />

            <div className="hero-content-container">
              <Slide>
                <p className="hero-content">
                  SOMETHING <br />  AWESOME IS
                </p>
              </Slide>
              <Slide direction={"right"}>
                <h1 className="hero-content-heading">
                  COMING <br />{" "}
                  <span className="hero-content-heading"style={{ letterSpacing: "2px" }}> SOON!!</span>
                </h1>
              </Slide>
              <Slide>
              <p className="hero-content stay-tuned">STAY TUNED</p>
              </Slide>
            </div>
          </div>
          <div className="social-mediaIcon-container">
            <div className="social-column">
              {" "}
              <Zoom>
                <a
                  href="https://web.facebook.com/avvicconsults/?_rdc=1&_rdr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <UilFacebookF color="#CDDAD5" size="30"  />
                </a>
              </Zoom>
            </div>
            <div className="social-column">
              {" "}
              <Zoom>
                <a
                  href="https://api.whatsapp.com/send/?phone=2348101098488&text&type=phone_number&app_absent=0"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <UilWhatsapp color="#CDDAD5" size="30" />
                </a>
              </Zoom>
            </div>
            <div className="social-column">
              <Zoom>
                <a
                  href="https://www.instagram.com/avvicgroup/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <UilInstagram color="#CDDAD5" size="30" />
                </a>
              </Zoom>
            </div>
            <div className="social-column">
              <Zoom>
               
                <a
                  href="https://www.linkedin.com/in/avvic-group-1b2b81231/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <UilLinkedin color="#CDDAD5" size="30.2" />
                </a>
              </Zoom>
            </div>
            <div className="social-column">
              <Zoom>
              <a
                  href="https://twitter.com/avvicgroup"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <UilTwitterAlt color="#CDDAD5" size="30" />
                </a>
              </Zoom>
            </div>
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
                  <img
                    src={secureIcon}
                    className="icon"
                    alt="secure transaction icon"
                  ></img>
                </figure>
                <div>
                  <h3 className="info-content-heading">Secure</h3>
                  <p className="info-content">
                    We employ robust encryption protocols and stringent security
                    measures to safeguard your personal information and
                    transactions.
                  </p>
                </div>
              </Zoom>
            </div>
            <div class="column">
              <Zoom>
                <figure>
                  <img
                    src={fastIcon}
                    className="second-icon"
                    alt="fast transaction icon"
                  ></img>
                </figure>
                <div>
                  <h3 className="info-content-heading">Fast</h3>
                  <p className="info-content">
                    Our fast-paced operations ensure that you can carry out your
                    banking activities swiftly and conveniently, saving you
                    precious time.
                  </p>
                </div>
              </Zoom>
            </div>
            <div class="column">
              <Zoom>
                <figure>
                  <img
                    src={supportIcon}
                    className="icon"
                    alt="bank support"
                  ></img>
                </figure>
                <div>
                  <h3 className="info-content-heading">Support</h3>
                  <p className="info-content">
                    {" "}
                    Our support team is available to provide prompt and
                    personalized assistance, ensuring you receive the best{" "}
                    possible customer experience.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
        </section>
        {/* THE SECTION BELOW IS FOR THE SECOND AVVIC LOGO DESIGN */}
        <section className="avvic-logo-2-container">
          <figure>
            <img
              src={avvicLogo2}
              className="avvic-logo-2"
              alt="Avvic logo for footer"
            ></img>
          </figure>
        </section>
        <section className="footer-container">
          <div className="footer-column">
            <Slide direction={"right"}>
              <h4 className="footer-heading">Subscribe</h4>
              <p className="footer-content">
                Join our newsletter to stay up to date on latest information
              </p>
              {/* FORM COMPONENT IS HERE BELOW */}
              <Form />
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
            </Slide>
          </div>
          <div className="footer-column">
            <Slide>
              <h4 className="footer-heading footer-links">Quick Links</h4>
              <FotterIcon />
            </Slide>
          </div>
        </section>
        <div className="divider-container"> </div>
        <div className="divider-content">
          <p className="divider-content-item">
            2023 Avvic Group. All rights reserved.
          </p>
          <p className="divider-content-item privacy">Privacy Policy</p>
          <p className="divider-content-item terms">Terms of Service</p>
        </div>
      </div>
    );
  }
}

export default comingSoon;
