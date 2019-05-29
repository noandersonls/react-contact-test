import React from "react";
import PropTypes from 'prop-types'
import Search from "../Search/Search";
import Button from "../Button/Button";

import "./Header.css";
import { ReactComponent as AddUser } from "../../assets/iconadd.svg";

const Header = ({ onSearch, onToggleModal }) => {
  return (
    <div className="header-top">
      <h2 className="header-title">
        <a href="/">
          <span>Test</span> <b>Beetrack</b>
        </a>
      </h2>
      <div className="flex-header">
        <Search onChange={onSearch} />
        <Button className="header-btn" onClick={onToggleModal}>
          <AddUser className="icon-add" />
          Nuevo Contacto
        </Button>
      </div>
    </div>
  );
};

Header.propTypes ={
  onSearch: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired
}

export default Header;
