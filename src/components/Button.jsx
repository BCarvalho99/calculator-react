import React from "react";
import "./Button.css";

export default (props) => {
  return (
    <button
      onClick={e => props.click(props.label)}
      className={`button 
      ${props.operator ? "operator" : ""}
      ${props.duo ? "duo" : ""}
      ${props.three ? "three" : ""}`}
    >
      {props.label}
    </button>
  );
};
