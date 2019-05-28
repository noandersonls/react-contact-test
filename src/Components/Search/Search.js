import React from "react";
import { ReactComponent as IconSearch } from "../../Assets/iconsearch.svg";
import "./Search.css";

const Search = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <IconSearch className="icon-search" />
      <input
        className="search-input"
        value={value}
        placeholder="Buscar contacto..."
        onChange={({ target: { value } }) => {
          onChange(value);
        }}
      />
    </div>
  );
};

export default Search;
