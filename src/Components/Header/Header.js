import React from 'react'
import Search from '../Search/Search'
import './Header.css'

const Header = ({onChange}) => {
  return (
    <div className="top" >
      <h2 className="title"><span>Test</span> <b>BeeTrack</b></h2>
      <Search onChange={onChange}/>
    </div >
  )
}

export default Header