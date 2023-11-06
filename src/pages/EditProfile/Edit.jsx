import React from 'react';
import Header from '../../components/headerPage/header';

import './edit.scss';
const Edit = () => {
  return (
    <>
    <Header/>
    <div className='edit'>
       <div className='editone'>
         <h1 className='editoneh1'>Edit Profile</h1>
       </div>
       <div className="edittwo">
      <form action="" className='editform'>
      <label for="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name"/>
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email"/>
  <label for="profile-pic">Change Profile Picture:</label>
  <input type="file" id="profile-pic" name="profile-pic"/>

  <input type="submit" value="Save Changes"></input>
      </form>
    </div>
       <div>
        
       </div>
    </div>
    </>
  )
}

export default Edit