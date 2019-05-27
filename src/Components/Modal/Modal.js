import React from 'react'
import './Modal.css'


const Modal = ({ handleClose, show, submitUser, children }) => {
  return (
    <div>
      <div className="backdrop"
        onClick={handleClose}
      >
      </div>
      <div className="modal-container modal">
        {children}
      </div>
    </div>
    );
  };
  
  export default Modal
  
