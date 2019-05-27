import React, { Component } from 'react'
import axios from 'axios'
import ContactList from './Components/ContactList/ContactList'
import Header from './Components/Header/Header'
import Modal from './Components/Modal/Modal'
import ContactForm from './Components/ContactForm/ContactForm'


import './App.css'

const API_URL = 'http://localhost:3000/api/users/'
const API_SEARCH = '?q='


class App extends Component {
  state = {
    query: '',
    results: [],
    modal: false
  }

  componentDidMount() {
    this.getInfo()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.getInfo()
    }
  }

  getInfo = () => {
    const QUERY = this.state.query.length > 0 ? `${API_URL}${API_SEARCH}${this.state.query}` : API_URL
    axios
      .get(QUERY)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = query => this.setState({ query })
  onDeleteUser = (id) => {
    axios.delete(`${API_URL}${id}`)
      .then(() => {
        this.getInfo()
      })
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  onSubmit = (newUser) => {
    axios.post(`${API_URL}`, newUser).then(() => {
      this.getInfo();
      this.toggleModal();
    })
  }

  render() {
    const { results, modal } = this.state
    return (
      <div className="container">
        <Header onChange={value => this.handleInputChange(value)} onClick={this.toggleModal} />
        {modal && (
          <Modal show={modal} handleClose={this.toggleModal} submitUser={this.onSubmit}>
            <ContactForm submitUser={this.onSubmit} />
          </Modal>
        )}
        <ContactList contacts={results} deleteUser={this.onDeleteUser} />
      </div>
    )
  }
}

export default App
