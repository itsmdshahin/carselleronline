import React, { useState } from 'react';
import './profile.scss';

const Profile = () => {
  const [userId, setUserId] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [userBids, setUserBids] = useState([]);

  const fetchUserData = async () => {
    try {
      // Fetch user profile
      const profileResponse = await fetch(`http://localhost:5000/profile/${userId}`);
      if (!profileResponse.ok) throw new Error('User profile fetch failed');
      const profileData = await profileResponse.json();
      setUserProfile(profileData);

      // Fetch user bids
      const bidsResponse = await fetch(`http://localhost:5000/api/get-all-bids?bidderUserId=${userId}`);
      if (!bidsResponse.ok) throw new Error('User bids fetch failed');
      const bidsData = await bidsResponse.json();
      setUserBids(bidsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    fetchUserData();
  };

  return (
    <div className="profile">
      <h1>Admin User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          required
        />
        <button type="submit">Search</button>
      </form>

      {userProfile && (
        <div className="userDetails">
          <h2>User Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          {/* Display other user details as needed */}
        </div>
      )}

      <h2>User Bids</h2>
      <div className="userBids">
        {userBids.length > 0 ? (
          userBids.map((bid, index) => (
            <div key={index} className="bid">
              <p>Car ID: {bid.carId}</p>
              <p>Bid Amount: {bid.bidAmount}</p>
              <p>Bid Time: {new Date(bid.bidTime).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No bids found for this user.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
