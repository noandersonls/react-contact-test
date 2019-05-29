import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as IconSearch } from "../../assets/iconsearch.svg";
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

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Search;
