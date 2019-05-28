import React from "react";
import "./Header.css";
import { ReactComponent as AddUser } from "../../Assets/iconadd.svg";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Header = ({ onChange, onClick }) => {
  return (
    <div className="header-top">
      <h2 className="header-title">
        <a href="/">
          <span>Test</span> <b>Beetrack</b>
        </a>
      </h2>
      <div className="flex-header">
        <Search onChange={onChange} />
        <Button className="header-btn" onClick={onClick}>
          <AddUser className="icon-add" />
          Nuevo Contacto
        </Button>
      </div>
    </div>
  );
};

export default Header;
