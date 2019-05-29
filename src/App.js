import React, { Component } from "react";
import axios from "axios";
import ContactList from "./components/ContactList/ContactList";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ContactForm from "./components/ContactForm/ContactForm";
import Pagination from "./components/Pagination/Pagination";

import "./App.css";

const API_URL = "http://localhost:3000/api/users/";
const API_SEARCH = "?q=";

class App extends Component {
  state = {
    query: "",
    results: [],
    modal: false,
    page: 1,
    limit: 5
  };

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.getInfo();
    }
  }

  getInfo = () => {
    const { query, page, limit } = this.state;
    const QUERY =
      query.length > 0
        ? `${API_URL}${API_SEARCH}${query}`
        : `${API_URL}?_page=${page}&_limit=${limit}`;
    axios.get(QUERY).then(({ data }) => {
      this.setState({
        results: data
      });
    });
  };

  onDeleteUser = id => {
    axios.delete(`${API_URL}${id}`).then(() => {
      this.getInfo();
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onSubmit = newUser => {
    const headers = { "Content-Type": "application/json" };
    axios.post(`${API_URL}`, newUser, { headers }).then(() => {
      this.getInfo();
      this.handleToggle();
    });
  };

  previousPage = () => {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  nextPage = () => {
    const { results, limit } = this.state;
    const lastPage = results.length !== limit;
    if (!lastPage) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    const { results, modal, page, limit } = this.state;
    const disabledprev = page <= 1;
    const disablednext = results.length !== limit;

    return (
      <div className="container">
        <Header
          onSearch={value => this.setState({ query: value })}
          onToggleModal={this.handleToggle}
        />
        {modal && (
          <Modal onClose={this.handleToggle}>
            <ContactForm onSubmit={this.onSubmit} />
          </Modal>
        )}
        <ContactList contacts={results} onDelete={this.onDeleteUser} />
        <Pagination
          handlePrev={this.previousPage}
          handleNext={this.nextPage}
          disablePrev={disabledprev}
          disableNext={disablednext}
        />
      </div>
    );
  }
}

export default App;
