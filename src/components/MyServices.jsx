import React from "react";
import Services from "./ServiceComponents";
import image1 from "../images/Google Code.png";
import image2 from "../images/Mobile.png";
import image3 from "../images/Web Design.png";
function ServicesProviding() {
  return (
    <div id="service-section">
      <h1 id="section-heading">My Services</h1>
      <div className="services-container">
        <Services
          heading="WEB DEVELOPMENT"
          description="Build the responsive web applications to make your innovative to innovation "
          icon={image1}
        />
        <Services
          heading="MOBILE DEVELOPMENT"
          description="Develop mobile application with user--friendly and using cutting edge technologies"
          icon={image2}
        />
        <Services
          heading="UI/UX DESIGN"
          description="Making your innovative idea into incredible intercative design to develop."
          icon={image3}
        />
      </div>
    </div>
  );
}

export default ServicesProviding;
