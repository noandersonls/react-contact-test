import React from "react";
import PropTypes from "prop-types";
// Import styles
import "./Button.css";

const Button = ({ onClick, children, className, type }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

// PropTypes for typechecking
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  clasName: PropTypes.string,
  type: PropTypes.string
};

export default Button;
