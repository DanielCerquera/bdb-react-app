import React from "react";
import "./Button.scss";

const Button = ({ label, onClick, type = "primary" }) => {
  return <button className={`button button--${type}`} onClick={onClick}>{label}</button>;
};

export default Button;