import React, { useEffect, useState } from "react";
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";

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
        .then(data => setUsers(data))
        .catch(error => {
            console.log('Error fetching data ' + error);
        }); 
    
    })

    return (
        <>
            <Header />
            <h1>User Details</h1>
            <h2>Logged-in User: {currentUser?.name}</h2> {/* Display logged-in user */}
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <h2>{user.id}</h2>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        {/* ... other user properties */}
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    );
}

export default UserProfile;
