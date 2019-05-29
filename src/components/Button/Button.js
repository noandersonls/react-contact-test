import React from "react";
import PropTypes from 'prop-types'
import "./Button.css";

const Button = ({ onClick, children, className, type }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  clasName: PropTypes.string,
  type: PropTypes.string,
}


export default Button;
