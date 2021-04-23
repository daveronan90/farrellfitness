import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import titleImg from "./title-img.png";
import NavMenu from "../NavMenu/NavMenu";

const Header = ({ setNavShown, navShown }) => {
  const [showNav, setShowNav] = useState(false);

  const onHandleClickNav = () => {
    setShowNav(!showNav);
    setNavShown(!navShown);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-title-container">
          <img src={titleImg} alt="" />
        </div>
      </div>
      <div className="social-media-container">
        <div className="nav-items">
          <a href="https://www.facebook.com/farrellfitness17/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="nav-items">
          <a href="https://www.instagram.com/farrellfitness17/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="nav-items">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
        <div className="nav-items" onClick={onHandleClickNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {showNav && <NavMenu onHandleClickNav={onHandleClickNav} />}
    </header>
  );
};

export default Header;
