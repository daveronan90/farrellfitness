import React from "react";
import "./MainVideo.scss";

const MainVideo = () => {
  const mainVideo = {
    background: `url(./homePageVideo.png) no-repeat center fixed`,
    backgroundSize: "cover",
    height: "1200px",
  };
  return <div style={mainVideo} />;
};

export default MainVideo;
