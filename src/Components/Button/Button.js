import React from "react";
import "./Button.css";

const Button = ({ onClick, children, className }) => {
  return (
    <div>
      <button className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
