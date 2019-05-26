import React from 'react'
import './Search.css'

const Search = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        value={value}
        placeholder="Buscar contacto..."
        onChange={({ target: { value }}) => {
          onChange(value);
        }}
      />
    </div>
  )
}

export default Search