import React from 'react'
import { useState } from 'react'
import created from '../assets/css/created.css'

function Created({}) {
    const[isOpen , setIsOpen] = useState(false)

const openModal= (setIsOpen)=>{
setIsOpen(true)
}
const closeModal = ()=> {
    isOpen(false)
   alert("cerre el modal")
}
  return (
    
    
    <div className='modal-check'>
      <h1 className='checked'><i class="fa-solid fa-circle-check"></i></h1>
      <p>User created succesfully</p>
      <button className='close-modal' onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
    </div>

        
    
    
  )
}

export default Created
