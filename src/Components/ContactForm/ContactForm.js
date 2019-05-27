import React from 'react'
import Button from '../Button/Button'
import './ContactForm.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: '',
      name: '',
      description: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  submitUser = () => {
    let newUser = this.state;
    this.props.submitUser(newUser)
  }

  render() {
    const { photo, name, description } = this.state
    return (
      <div className='form-container'>
        <div className='form-header'>
          <h2>Agregar nuevo contacto</h2>
        </div>
        <div className='form-body'>
          <form>
            <label className='form-label'>
              URL imagen de perfil<span>*</span>
              <input
                onChange={this.handleInputChange}
                type="text"
                name="photo"
                value={photo}
              />
            </label>
            <label className='form-label'>
              Nombre<span>*</span>
              <input
                onChange={this.handleInputChange}
                type="text"
                name="name"
                value={name}
                placeholder='Ejemplo: Michael Scott'
                required
              />
            </label>
            <label className='form-label'>
              Descripción<span>*</span>
              <textarea
                onChange={this.handleInputChange}
                name="description"
                value={description}
              >
              </textarea>
            </label>
            <Button
              type={"submit"}
              onClick={this.submitUser}
              className='form-btn'
            >
              Guardar
            </Button>
          </form>
        </div>
      </div>
    )
  }

}


export default ContactForm