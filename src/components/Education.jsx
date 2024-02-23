import React from "react";
import EducationList from "./EduList";
function EducationInfo() {
  return (
    <div>
      <EducationList title="O/L" location="V/Vavuniya Muslim Maha Vidyalaya" />
      <EducationList title="A/L" location="V/Vavuniya Muslim Maha Vidyalaya" />
      <EducationList
        title="Bsc (Hons) Information Technology"
        location="University of Kelaniya"
      />
    </div>
  );
}

export default EducationInfo;
