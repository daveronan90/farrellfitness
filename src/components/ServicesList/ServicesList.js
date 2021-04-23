import React from "react";
import ServiceCard from '../ServiceCard/ServiceCard'
import services from "../../fixtures/services";
import './ServicesList.scss'

const ServicesList = () => {
  return (
    <div className='services-list'>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
