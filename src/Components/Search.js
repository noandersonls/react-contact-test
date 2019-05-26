import React from 'react'

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        placeholder="Search for..."
        onChange={({ target: { value }}) => {
          onChange(value);
        }}
      />
    </div>
  )
}

export default Search