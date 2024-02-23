import React, { useState } from "react";
import EducationInfo from "./Education";
import Qualification from "./Qualification";

function ResumeBar() {
  const [selectedCategory, setSelectedCategory] = useState("Education");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="bar-container">
        <div>
          <div
            className={`resume-category ${
              selectedCategory === "Education" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Education")}
          >
            Education
          </div>
          <div
            className={`resume-category ${
              selectedCategory === "Qualification" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Qualification")}
          >
            Qualification
          </div>
          <div
            className={`resume-category ${
              selectedCategory === "Projects" ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick("Projects")}
          >
            Projects
          </div>
        </div>
      </div>
      <div className="content-container">
        {selectedCategory === "Education" && <EducationInfo />}
        {selectedCategory === "Qualification" && <Qualification />}
        {selectedCategory === "Projects" && <div>Hi</div>}
      </div>
    </div>
  );
}
export default ResumeBar;
