import React, { Component } from 'react'
import axios from 'axios'
import ContactList from './Components/ContactList/ContactList'
import Header from './Components/Header/Header'

import './App.css'

const API_URL = 'http://localhost:3000/api/users/'
const API_SEARCH = '?q='


class App extends Component {
  state = {
    query: '',
    results: []
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


  render() {
    return (
      <div className="container">
        <Header onChange={value => this.handleInputChange(value)} />
        <ContactList contacts={this.state.results} deleteUser={this.onDeleteUser} />
      </div>
    )
  }
}

export default App
