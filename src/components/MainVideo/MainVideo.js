import React from "react";
import "./MainVideo.scss";

const MainVideo = () => {
  const mainVideo = {
    background: `url(${process.env.PUBLIC_URL}/homePageVideo.png) no-repeat center fixed`,
    backgroundSize: "cover",
    height: "900px",
  };
  return <div style={mainVideo} />;
};

export default MainVideo;
