import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = ({ onHandleClickNav }) => {
  return (
    <div className="nav-menu">
      <div className="exit-nav" onClick={onHandleClickNav}>
        <div className="exit-circle">X</div>
      </div>
      <div className="nav-list" onClick={onHandleClickNav}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/classes" className="nav-item">
          Classes
        </Link>
        <Link to="/golf" className="nav-item">
          Golf Training
        </Link>
        <Link to="/shop" className="nav-item">
          Merchandise
        </Link>
        <Link to="/nutrition" className="nav-item">
          Nutrition
        </Link>
        <Link to="/personaltraining" className="nav-item">
          Personal Training
        </Link>
        <Link to="/physicaltherapy" className="nav-item">
          Physical Therapy
        </Link>
        <Link to="/styku" className="nav-item">
          Styku
        </Link>
        <Link to="/teams" className="nav-item">
          Team Training
        </Link>
        <Link to="/transformations" className="nav-item">
          10 Week Transformations
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
