import React from "react";

function EducationList(props) {
    return (
        <div className="edu-section">
            <li id="edu-title">{props.title}</li>
            <li id="location">{props.location}</li>
        </div>
    )
}

export default EducationList;