import React from "react";
import PropTypes from "prop-types";

// Import Custom Component
import Button from "../Button/Button";

// Import Styles
import "./ContactForm.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: "",
      name: "",
      description: ""
    };
  }

  // State setting with the data when Form Inputs calls it
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Send the newUser data through onSubmit's props and prevent the default Form beheaviour
  submitUser = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { photo, name, description } = this.state;
    return (
      <div>
        <div className="form-header">
          <h2>Agregar nuevo contacto</h2>
        </div>
        <div className="form-body">
          <form onSubmit={this.submitUser}>
            <label className="form-label">
              URL imagen de perfil<span className="required-element">*</span>
            </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="photo"
              value={photo}
              required
            />
            <label className="form-label">
              Nombre<span className="required-element">*</span>
            </label>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              value={name}
              required
            />
            <label className="form-label">
              Descripción<span className="required-element">*</span>
            </label>
            <textarea
              onChange={this.handleInputChange}
              name="description"
              value={description}
              required
            />
            <Button type="submit" className="form-btn">
              Guardar
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

// PropTypes for typechecking
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;
