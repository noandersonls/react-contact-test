import React from 'react'

import './Header.css'

import Search from '../Search/Search'
import Button from '../Button/Button';


const Header = ({ onChange, showModal, onClick}) => {
  return (
    <div className="header-top" >
      <h2 className="header-title"><span>Test</span> <b>Beetrack</b></h2>
      <Search onChange={onChange}/>
      <Button className='header-btn' onClick={onClick}>Nuevo Contacto</Button>
    </div >
  )
}

export default Header