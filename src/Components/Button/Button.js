import React from "react";
import "./Button.css";

const Button = ({ onClick, children, className, type }) => {
  return (
      <button type={type} className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default Button;
