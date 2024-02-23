import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  console.log(props);

  return (
    <div>
      <input placeholder={props.placeholder} required />
      <span>Its an error</span>
      <span>Its an error</span>
      <span>Its an error</span>
    </div>
  );
};

export default FormInput;
