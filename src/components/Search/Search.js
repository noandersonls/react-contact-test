import React from "react";
import PropTypes from "prop-types";
//Import Icon
import { ReactComponent as IconSearch } from "../../assets/iconsearch.svg";
//Import Styles
import "./Search.css";

// Receives a value props and apply to onChange's prop function for proceed searching
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

// PropTypes for TypeChecking
Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Search;
