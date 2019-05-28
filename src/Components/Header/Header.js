import React from 'react'
import './Header.css'
import { ReactComponent as AddUser } from '../../Assets/iconadd.svg'
import Search from '../Search/Search'
import Button from '../Button/Button';


const Header = ({ onChange, showModal, onClick }) => {
  return (
    <div className="header-top" >
      <h2 className="header-title"><span>Test</span> <b>Beetrack</b></h2>
      <div className="flex-header">
        <Search onChange={onChange} />
        <Button className="btne" onClick={onClick}>
          <AddUser className="icon-add" />
          Nuevo Contacto
        </Button>
      </div>
    </div>
  )
}

export default Header