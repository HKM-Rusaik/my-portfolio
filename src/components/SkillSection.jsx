import React from "react";
import LogoBox from "./SkillLogoComponent";
import JavaLogo from "../images/icon _java original_.png";
import SpringBootLogo from "../images/icon _spring boot_.png";
import JSLogo from "../images/icon _javascript_ (1).png";
import ReactLogo from "../images/icon _react_.png";
import FigmaLogo from "../images/icon _figma_.png";
import NodeLogo from "../images/icon _file type node_.png";
import PythonLogo from "../images/icon _file type python_.png";
import MySQLLogo from "../images/icon _mysql original wordmark_.png";
import MongoDBLogo from "../images/icon _mongodb original_.png";
import GitHubLogo from "../images/icon _github_.png";

function SkillSection() {
  return (
    <div>
      <h1 id="section-heading">My Skills</h1>
      <div id="logos-container">
        <LogoBox logo={JavaLogo} />
        <LogoBox logo={SpringBootLogo} />
        <LogoBox logo={JSLogo} />
        <LogoBox logo={ReactLogo} />
        <LogoBox logo={FigmaLogo} />
        <LogoBox logo={NodeLogo} />
        <LogoBox logo={PythonLogo} />
        <LogoBox logo={MySQLLogo} />
        <LogoBox logo={MongoDBLogo} />
        <LogoBox logo={GitHubLogo} />
      </div>
    </div>
  );
}

export default SkillSection;
