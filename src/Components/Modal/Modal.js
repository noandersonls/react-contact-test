import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import './Modal.css'


const Modal = ({ handleClose, show, submitUser}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">          
          {<ContactForm submitUser={submitUser} handleClose={handleClose}/>}
      </div>
    </div>
  );
};

export default Modal

