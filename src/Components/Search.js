import React from 'react'

const Search = ({ contacts }) => {
  return (
    <form>
      <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
      />
    </form>
  )
}

export default Search