import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <input
      className="input-box"
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      readOnly={props.readOnly ? true : false}
      autoComplete = {props.autoComplete ? props.autoComplete : ''}
    />
  );
};

export default Input;
