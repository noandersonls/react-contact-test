import React from 'react'
import Search from '../Search/Search'
import Button from '../Button/Button';
import './Header.css'


const Header = ({ onChange, showModal, onClick}) => {
  return (
    <div className="top" >
      <h2 className="title"><span>Test</span> <b>Beetrack</b></h2>
      <Search onChange={onChange}/>
      <Button className='btn' onClick={onClick}>Nuevo Contacto</Button>
    </div >
  )
}

export default Header