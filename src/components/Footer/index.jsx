import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

// import { Button, Img, Line, Text } from "components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <NavLink to="/" className="title">
              <div className="logo">tiffin mate</div>
            </NavLink>
            <div className="address">
              Address: 5-180, <br />
              Subhash Chandra Bose <br />
              Street, Ags Cinemas <br />
              Opposite, Madurvoyal, <br />
              Pincode - 600095.
            </div>

            <div className="sb__footer-links-div">
              <div className="socialmedia">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_facebook1.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_linkedin1.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_youtube1.png" alt="YouTube" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_twitter1.png" alt="Twitter" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_instagram1.png" alt="Instagram" />
                </a>
                <a
                  href="https://www.website.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/img_web1.png" alt="Website" />
                </a>
              </div>
            </div>
          </div>
          <div className="sb__footer-links-div">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/menu">
              <p>Menu</p>
            </NavLink>

            <NavLink to="/franchise">
              <p>Franchise</p>
            </NavLink>

            <NavLink to="/faq">
              <p>FAQ's</p>
            </NavLink>

            <NavLink to="/contactus">
              <p>Contact Us</p>
            </NavLink>
          </div>
          <div className="sb__footer-links-div">
            <NavLink to="/terms&conditions">
              <p>Terms & Conditions</p>
            </NavLink>

            <NavLink to="/privacypolicy">
              <p>Privacy Policy</p>
            </NavLink>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>© {currentYear} Tiffin Mate. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
