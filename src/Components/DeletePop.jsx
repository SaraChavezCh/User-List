import React from 'react'
import popUp from '../assets/css/popUp.css'

function DeletePop({isDeleteOpen, setIsDeleteOpen, }) {
  return (
<>
    {
        isDeleteOpen ? (
            <div className="popUp-Container">
                <div className='pop'>

                <h1 className='checked'><i class="fa-solid fa-circle-exclamation"></i></h1>
                <p className='message'>User deleted</p>
                <button 
                className='delete-modal' 
                onClick={()=>setIsDeleteOpen(false)}>Ok</button>
                </div>
            </div>      
        ) : (null)
    }
   
 </>)
}

export default DeletePop;
