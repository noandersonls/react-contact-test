import React, { Component } from 'react'
import axios from 'axios'
import ContactList from './Components/ContactList/ContactList'
import Header from './Components/Header/Header'
import Modal from './Components/Modal/Modal'
import ContactForm from './Components/ContactForm/ContactForm'
import Pagination from './Components/Pagination/Pagination'


import './App.css'

const API_URL = 'http://localhost:3000/api/users/'
const API_SEARCH = '?q='


class App extends Component {
  state = {
    query: '',
    results: [],
    modal: false,
    page: 1,
    limit: 4,
  }

  componentDidMount() {
    this.getInfo()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.getInfo();
    }
  }

  getInfo = () => {
    const {query, page, limit } = this.state
    const QUERY = query.length > 0 ? `${API_URL}${API_SEARCH}${query}` : `${API_URL}?_page=${page}&_limit=${limit}`
    axios
      .get(QUERY)
      .then(({ data }) => {
        this.setState({
          results: data,
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
    const headers = { "Content-Type": "application/json" }
    axios.post(`${API_URL}`, newUser, { headers }).then(() => {
      this.getInfo();
      this.toggleModal();
    })
  }


  previousPage = () => {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 })
    } 
  }

  nextPage = () => {
    if (this.state.page + 1 < this.state.results.length) {
      console.log('Hello')
      this.setState({ page: this.state.page + 1 })
    }
  }

  render() {
    const { results, modal} = this.state
    return (
      <div className="container">
        <Header onChange={value => this.handleInputChange(value)} onClick={this.toggleModal} />
        {modal && (
          <Modal show={modal} handleClose={this.toggleModal} submitUser={this.onSubmit}>
            <ContactForm submitUser={this.onSubmit} />
          </Modal>
        )}
        <ContactList contacts={results} deleteUser={this.onDeleteUser} />
        <Pagination handlePrev={this.previousPage} handleNext={this.nextPage}/>
      </div>
    )
  }
}

export default App
