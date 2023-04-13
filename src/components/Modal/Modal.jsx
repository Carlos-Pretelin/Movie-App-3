import React from 'react'

import "./Modal.scss"

const Modal = ({openModal, setOpenModal}) => {


    
  return (
    <div className='Modal'>
        <h3>Titulo</h3>
        <span>Title Tags</span>

        <p>Descripcion o Sipnosis</p>
    </div>
  )
}

export default Modal