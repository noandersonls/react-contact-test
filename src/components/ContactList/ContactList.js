import React from "react";
import PropTypes from "prop-types";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => (
  <table className="contact-list">
    <thead>
      <tr>
        <td>
          <b>Nombre</b>
        </td>
        <td>
          <b>Descripción</b>
        </td>
      </tr>
    </thead>
    <tbody>
      {contacts.map(user => (
        <tr key={user.id} className="flex-contact">
          <td>
            <div className="user-detail contact-list">
              <div className="contact-list">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="image-detail"
                />
                <strong className="user-name">{user.name}</strong>
              </div>
              <button
                className="user-delete contact-list"
                onClick={() => onDelete(user.id)}
              >
                Eliminar
              </button>
            </div>
          </td>
          <td>
            <p>{user.description}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
