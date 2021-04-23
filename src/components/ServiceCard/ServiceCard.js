import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.scss";

const ServiceCard = ({ service }) => {
  const imgStyle = {
    backgroundImage: `url(./${service.imageUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: "80%",
  };
  return (
    <div className={`service-card${service.id} service-card`}>
      <Link
        to={`${service.routeUrl}`}
        className={`cardImg${service.id}`}
        style={imgStyle}
      />
      <h3 className={`cardTitle${service.id}`}>{service.title}</h3>
    </div>
  );
};

export default ServiceCard;
