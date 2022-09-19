import axios from 'axios'
import React from 'react'
import stylesUserList from '../assets/css/stylesUserList.css'
import profileimage from '../assets/images/profileimage.png'

function UsersList( {users, selectedUser, getUsers}) {
    const deleteUser= (id) =>{
        
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(getUsers)
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
                        <b>{user.email}</b>
                    </div>
                    <div className='info '> 
                        <b>{user.password}</b>
                    </div>
                    <div className='info '> 
                        <b className='user-name'>{user.first_name}</b>
                    </div>
                    <div className='info '> 
                        <b className='user-name'>{user.last_name}</b>
                    </div>
                    <div className='info '> 
                        <b>{user.birthday}</b>
                    </div>
                    <button className='delete' onClick={()=>deleteUser(user.id)}><i class="fa-solid fa-trash"></i></button>
                    <button className='edit' onClick={()=> selectedUser (user)}><i class="fa-solid fa-user-pen"></i></button>
                </li>
            ))

        }
      </ul>
    </div>
  )
}

export default UsersList
