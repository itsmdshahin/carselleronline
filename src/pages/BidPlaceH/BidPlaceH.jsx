
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './bidplaceandhistory.scss';
import { Button } from 'react-bootstrap';

const BidPlaceH = ({ carId }) => {
    const [bidAmount, setBidAmount] = useState('');
    const bidderUserId = localStorage.getItem('userId');
    const [bidHistory, setBidHistory] = useState([]);

    useEffect(() => {
        // Fetch bid history when the component mounts
        fetchBidHistory();
    }, []);

    const handleBidClick = async () => {
        try {
            console.log("Handling bidding place: " + bidAmount + " Car ID " + carId);

            const response = await fetch('http://localhost:5000/api/place-bid', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    carId,
                    bidderUserId,
                    bidAmount,
                })
            });
            if (response.ok) {
                alert('BID PLACE Successful!');
                fetchBidHistory();
            } else {
                // Registration failed
                alert('failed!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchBidHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get-all-bids');
            const sortedBidHistory = response.data.sort((a, b) => b.bidAmount - a.bidAmount);
            setBidHistory(sortedBidHistory);
        } catch (error) {
            console.error('Error fetching bid history:', error);
        }
    };

    return (
        <div className='BidPlaceandHistory'> 

            <div className="history">
                <h4>History</h4>
                <ul>
                    {bidHistory.map((bid, index) => (
                        <li key={index}>
                            Amount: {bid.bidAmount} Taka
                        </li>
                    ))}
                </ul>
            </div>

            <div className="placeabid">
                <h4>Place a Bid</h4>
                <div className="placeabidinput">
                    <input
                        name='bid'
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        placeholder='10.20'
                    />
                </div>
                <Button className='btn' onClick={handleBidClick}>Bid Now</Button>
            </div>
        </div>
    );
};

export default BidPlaceH;