import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            corrupti esse numquam recusandae corporis voluptatem quia sapiente?
            Ut molestiae iure maxime provident! Quae at vitae in doloribus,
            maxime sit neque?
          </p> */}
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 98765 43210</li>
            <li>info@tomato.com</li>
          </ul>
        </div>
      </div>
       <hr /> 
       <p className="footer-copyright">© 2026 Tomato. Crafted with ❤️ for food lovers.</p>
    </div>
  );
};

export default Footer;
