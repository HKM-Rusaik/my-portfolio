import React from "react";
import ProfilePic from "../images/new profile.png";

function ProfileSection(props) {
  return (
    <section className="profile-container">
      <div>
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="animated-text">
        <h1>I'm <span id="name">Mohamed Rusaik</span> :</h1>
        <h1>as <span id="title"></span></h1>
      </div>
    </section>
  );
}
export default ProfileSection;
