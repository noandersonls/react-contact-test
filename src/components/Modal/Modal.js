import React from "react";
import PropTypes from "prop-types";

// Import styles
import "./Modal.css";

// Simple modal effect with onClose's props through onClick in div for closing it
const Modal = ({ onClose, children }) => {
  return (
    <div>
      <div className="outside-click" onClick={onClose} />
      <div className="modal">{children}</div>
    </div>
  );
};

// PropType for typechecking
Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired
};

export default Modal;
