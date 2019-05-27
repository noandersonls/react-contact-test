import React from 'react'
import './Modal.css'


const Modal = ({ handleClose, show, submitUser, children}) => {
  return (
    <div className='modal'>
      <div className="modal-container">          
          {children}
      </div>
    </div>
  );
};

export default Modal

