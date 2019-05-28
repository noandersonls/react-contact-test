import React from 'react'
import { ReactComponent as NextPage } from '../../Assets/next.svg'
import { ReactComponent as PrevPage } from '../../Assets/prev.svg'

import './Pagination.css'


const Pagination = ({ handlePrev, handleNext, disabledbtnprev, disabledbtnnext }) => {
  return (
    <div className="pagination"> 
      <button onClick={handlePrev} disabled={disabledbtnprev}>
        <PrevPage className='icon-page'/>
        Página anterior
      </button>
      <button onClick={handleNext} disabled={disabledbtnnext}>
        Siguiente Página
        <NextPage className='icon-page'/>
      </button>
    </div>
  )
}

export default Pagination