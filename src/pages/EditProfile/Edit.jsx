import React, { useState, useEffect } from 'react';
import Header from '../../components/headerPage/header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './edit.scss';

const Edit = () => {
  
  const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setUserData(data);
        } else {
          console.error('Error fetching profile data:', response.status);
        }
      } catch (error) {
        console.error('Error during profile data fetch:', error);
      }
    };

    fetchData();
  }, [token, userId]);

  return (
    <>
      <Header />
      <h1>{userData.userId}</h1>
      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <div className='edit'>
        <div className='editone'>
          <h1 className='editoneh1'>Edit Profile</h1>
        </div>
        <div className="edittwo">
          <form action="" className='editform'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Name' value={userData.name} />
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder='Email' value={userData.email} />
            <label for="profile-pic">Change Profile Picture:</label>
            <input type="file" id="profile-pic" name="profile-pic" />
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