import axios from 'axios'
import React, { useState } from 'react'
import stylesUserList from '../assets/css/stylesUserList.css'
import profileimage from '../assets/images/profileimage.png'

function UsersList( {users, selectedUser, getUsers, setIsDeleteOpen}) {

const [isPasswordvisible , setIsPasswordVisible] = useState (false);


    const deleteUser= (id) =>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(getUsers)
        setIsDeleteOpen(true)
      }
      

  return (
    <div>
      <h1 className='list-title'>Users</h1>
      
      <ul className='users-list'>
        {
            users.map(user =>(
                <li className='user' key={user.id}>
                    <img className='profile-img' src={profileimage} />

                    <div className='info email'> 
                        <b>Email: </b>
                        <p>{user.email}</p>
                    </div>
    

                    <div className='info '> 
                        <b>Password: </b>
                        <p className='user-name'> {isPasswordvisible ? (user.password) : ("******") } </p>
                        <button className='password-visible' onClick={()=> setIsPasswordVisible(!isPasswordvisible)}> <i className="fa-solid fa-eye-low-vision"></i> </button>
                        
                    </div>
                  
                    
                    <div className='info '> 
                        <b>First Name: </b>
                        <p className='user-name'>{user.first_name}</p>
                    </div>

                    <div className='info '> 
                        <b>Last Name: </b>
                        <p className='user-name'>{user.last_name}</p>
                    </div>

                    <div className='info '> 
                        <b>Birthday: </b>
                        <p>{user.birthday}</p>
                    </div>

                    <button className='delete' 
                    onClick={()=>deleteUser(user.id)}
                    >
                        <i className="fa-solid fa-trash"></i></button>
                    <button className='edit' onClick={()=> selectedUser (user)}><i className="fa-solid fa-user-pen"></i></button>
                </li>
            ))

        }
      </ul>
    </div>
  )
}

export default UsersList
