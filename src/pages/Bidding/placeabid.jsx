import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const PlaceABid = ({ carId }) => {
  const userId = localStorage.getItem('userId');
  const [bidAmount, setBidAmount] = useState("");
  const [currentBid, setCurrentBid] = useState(0);

  const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 
  const handleBidSubmit = async () => {
    try {
      // Fetch car data
      const carResponse = await axios.get(`${apiURL}/api/getcalldatalisting/${carId}`);
      const carData = carResponse.data.carProfile;

      // Update the price on the server
      await axios.put(`${apiURL}/api/getcalldatalisting/${carId}`, {
        price: bidAmount, // Assuming you want to update the price
      });

      // Place bid history to MongoDB
      await axios.post(`${apiURL}/api/place-bid`, {
        carId: carId,
        userId: userId,
        bidAmount: bidAmount,
      });

      // Update state or perform any other actions as needed
      setCurrentBid(bidAmount);
      setBidAmount("");  // Clear the input field

    } catch (error) {
      console.error('Error:', error);
      // Handle errors as needed
    }
  };

  // Adding useEffect to fix the Invalid Hook Call error
  useEffect(() => {
    // Your async code here if needed
  }, []);

  return (
    <>
      <div className="placeoption">
        <div className="placetitle">
          <h2>Place a bid</h2>
        </div>
        <div className="placeabid">
          <input
            type='number'
            name='bid'
            step="0.01"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder={`Minimum bid: $${currentBid + 0.01}`}
          />
        </div>
        <div className="btn">
          <Button onClick={handleBidSubmit}>Bid</Button>
        </div>
      </div>
    </>
  );
}

export default PlaceABid;
