import React, { useEffect, useState } from "react";
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";

import ProfileShow from "../Profile/profileShow";


const UserProfile = () => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Include the JWT token
          }
        })
          .then(response => response.json())
          .then(data => {
            setUsers(data);
      
            // Find the logged-in user based on the stored user ID
            const loggedInUserId = localStorage.getItem('userId');
            const loggedInUser = data.find(user => user._id === loggedInUserId);
            setCurrentUser(loggedInUser);
          })
          .catch(error => {
            console.log('Error fetching data ' + error);
          });
      }, []);


    // useEffect(() => {
    //     fetch('http://localhost:5000/api/users', {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}` // Include the JWT token
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => setUsers(data))



    //     .catch(error => {
    //         console.log('Error fetching data ' + error);
    //     }); 
    
    // }, []);

   

    return (
        <>
            <Header />  
            <ProfileShow />
            <Footer />
        </>
    );
}

export default UserProfile;
