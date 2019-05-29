import React from "react";
import PropTypes from 'prop-types'
import "./Modal.css";

const Modal = ({ onClose, children }) => {
  return (
    <div>
      <div className="outside-click" onClick={onClose} />
      <div className="modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
}



export default Modal;
