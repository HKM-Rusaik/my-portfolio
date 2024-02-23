import React from "react";

function Services(props) {
  return (
    <div className="service">
      <p className="service-heading">{props.heading}</p>
      <p className="service-description">{props.description}</p>
      <img src={props.icon} alt="logo" />
    </div>
  );
}

export default Services;
