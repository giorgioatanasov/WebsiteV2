import React from "react";
import "./Tab.css";

const Tab = (props) => {
  return (
    <div id={props.id} class="tabcontent">
      <h3 class="jobTitle">
        {props.jobTitle}
        <span class={props.spanClass}>{props.spanText}</span>
      </h3>
      <h4 class="dates">{props.duration}</h4>
      <ul>
        <li>{props.description1}</li>
        <li>{props.description2}</li>
      </ul>
    </div>
  );
};

Tab.defaultProps = {
  spanClass: "",
  spanText: "",
};

export default Tab;
