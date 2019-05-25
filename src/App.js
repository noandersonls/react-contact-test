import React, { Component } from 'react'
import ContactList from './Components/ContactList'
import axios from 'axios'

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

  componentDidUpdate() {
    
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

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  onDeleteUser = (id) => {
    axios.delete(`${API_URL}${id}`)
      .then(data => {
        this.setState({results: data})
        
      })
  }

  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
        <ContactList contacts={this.state.results} deleteUser={this.onDeleteUser} />
      </div>
    )
  }
}

export default App
