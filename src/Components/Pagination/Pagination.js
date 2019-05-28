import React from 'react'
import { ReactComponent as NextPage } from '../../Assets/next.svg'
import { ReactComponent as PrevPage } from '../../Assets/next.svg'

import './Pagination.css'


const Pagination = ({ handlePrev, handleNext }) => {
  return (
    <div className="pagination">
      <button onClick={handlePrev}>
        <PrevPage className='icon-page'/>
        Página anterior
      </button>
      <button onClick={handleNext}>
        Siguiente Página
        <NextPage className='icon-page'/>
      </button>
    </div>
  )
}

export default Pagination