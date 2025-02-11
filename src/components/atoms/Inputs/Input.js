import React from "react";
import "./Input.scss";

const Input = ({ type = "text", name, placeholder, value, onChange }) => {
  return (
    <input
      className={`input input--${type}`}
      type={type}
      name={name} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};


export default Input;