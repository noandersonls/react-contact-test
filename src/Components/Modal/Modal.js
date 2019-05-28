import React from 'react'
import './Modal.css'


const Modal = ({ handleClose, children }) => {
  return (
    <div>
      <div className="outside-click"
        onClick={handleClose}
      >
      </div>
      <div className="modal">
        {children}
      </div>
    </div>
    );
  };
  
  export default Modal
  
