import React from "react";

function LogoBox(props) {
  return (
    <div id="logo-container">
      <img src={props.logo} alt="Skill Logo" />
    </div>
  );
}

export default LogoBox;
