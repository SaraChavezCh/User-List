import React from 'react'
import popUp from '../assets/css/popUp.css'

function UserCreated({isOpen, setIsOpen}) {
  return (
    <>
    {
        isOpen ? (
            <div className="popUp-Container">
                <div className='pop'>

                <h1 className='checked'><i class="fa-solid fa-circle-check"></i></h1>
                <p className='message'>User created succesfully</p>
                <button 
                className='close-modal' 
                onClick={()=>setIsOpen(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>      
        ) : (null)
    }
   
                </>
  )
}

export default UserCreated;
