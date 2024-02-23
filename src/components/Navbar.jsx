import React from "react";
import image1 from "../images/signature .png";




function NavBar() {
  return (
    <div className="nav-bar-container">
      <img src={image1} alt=""></img>
      <p onClick={true}>Home</p>
      <p>Services</p>
      <p>Skills</p>
      <p>Resume</p>
      <p>Contact</p>
    </div>
  );
}

export default NavBar;
