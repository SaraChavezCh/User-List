import React from 'react'
import popUp from '../assets/css/popUp.css'

function PopEdit({isEditOpen2, setIsEditOpen2}) {
    return(
<>
    {
        isEditOpen2 ? (
            <div className="popUp-Container">
                <div className='pop'>

                <h1 className='checked'><i class="fa-solid fa-circle-check"></i></h1>
                <p className='message'>User edited succesfully</p>
                <button 
                className='close-modal' 
                onClick={()=>setIsEditOpen2(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>      
        ) : (null)
    }
   
 </>
    )
}

export default PopEdit;
