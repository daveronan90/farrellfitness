import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a className="circle" href="https://www.facebook.com/farrellfitness17/">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a
          className="circle"
          href="https://www.instagram.com/farrellfitness17/"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <h4>Find Us Here</h4>
      <h3>27 Woodbine Business Park, New Ross, Co. Wexford</h3>
    </footer>
  );
};

export default Footer;
