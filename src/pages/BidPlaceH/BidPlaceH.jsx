import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './bidplaceandhistory.scss';
import { Button } from 'react-bootstrap';

const BidPlaceH = ({ carId, bidMinAmount }) => {
    const [bidAmount, setBidAmount] = useState('');
    const bidderUserId = localStorage.getItem('userId');
    const [bidHistory, setBidHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust this value as needed

    const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 

    useEffect(() => {
        // Fetch bid history when the component mounts or when the currentPage changes
        fetchBidHistory();
    }, [currentPage]);

    const handleBidClick = async () => {
        try {
            console.log("Handling bidding place: " + bidAmount + " Car ID " + carId);

            const response = await fetch(`${apiURL}/api/place-bid`, {
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
                // Reset to the first page after placing a bid
                setCurrentPage(1);
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
            const response = await axios.get(`${apiURL}/api/get-all-bids`);
            const filteredBidHistory = response.data
                .filter((bid) => bid.carId === carId)
                .sort((a, b) => b.bidAmount - a.bidAmount);

            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const currentItems = filteredBidHistory.slice(indexOfFirstItem, indexOfLastItem);

            setBidHistory(currentItems);
        } catch (error) {
            console.error('Error fetching bid history:', error);
        }
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className='BidPlaceandHistory'>

            <div className="history">
                <h4>Total {bidHistory.length} bid's Placed</h4>
                <ul>
                    {bidHistory.map((bid, index) => (
                        <li key={index}>
                            Amount: {bid.bidAmount} Taka
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                <div>
                    <Button className='btn' onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <span>{currentPage}</span>
                    <Button className='btn' onClick={handleNextPage} disabled={bidHistory.length < itemsPerPage}>
                        Next
                    </Button>
                </div>
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
