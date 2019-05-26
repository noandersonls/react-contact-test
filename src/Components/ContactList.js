import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'


const ContactList = ({ contacts, deleteUser }) => (
    <table className='contact-list'>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Descripción</td>
        </tr>
      </thead>
      <tbody>
        {contacts.map(user => {
          return (
            <tr key={user.id}>
              <td>
                <div className='user-detail contact-list'>
                  <div className='contact-list'>
                    <img src={user.photo} alt={user.name} className="image-detail" />
                    <strong className="user-name">{user.name}</strong>
                  </div>
                  <button
                    className='user-delete contact-list'
                    onClick={() => deleteUser(user.id)}
                  >
                    Eliminar
                    </button>
                </div>
              </td>
              <td><p>{user.description}</p></td>
            </tr>
          )
        })}
      </tbody>
    </table>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

export default ContactList