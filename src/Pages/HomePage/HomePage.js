import React from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import ServicesList from "../../components/ServicesList/ServicesList";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage-grid-container">
      <MainVideo />
      <ServicesList />
      <h2>
        Follow us on{" "}
        <a
          className="social-media-links"
          href="https://www.instagram.com/farrellfitness17/"
        >
          Instagram
        </a>{" "}
        and{" "}
        <a
          className="social-media-links"
          href="https://www.facebook.com/farrellfitness17/"
        >
          Facebook
        </a>{" "}
        to keep up to date. . .
      </h2>
    </div>
  );
};

export default HomePage;
