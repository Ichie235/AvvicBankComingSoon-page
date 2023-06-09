import React from 'react'
import "../footer/footer.css"

import { Slide} from "react-awesome-reveal";
import FotterIcon from "../footerIcons/FotterIcon"
import Form from '../subscribeForm/Form';


const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer