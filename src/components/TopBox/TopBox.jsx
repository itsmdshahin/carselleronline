import React, { useState, useEffect } from 'react';
import './topBox.scss';

const TopBox = () => {
    const [topBidders, setTopBidders] = useState([]);

    useEffect(() => {
        const fetchTopBidders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/get-top-bidders');
                const data = await response.json();
                setTopBidders(data);
            } catch (error) {
                console.error('Failed to fetch top bidders:', error);
            }
        };

        fetchTopBidders();
    }, []);

    return (
        <div className='topBox'>
            <h1>Top Bidders</h1>
            <div className="list">
                {topBidders.map((bidder, index) => (
                    <div className="listItems" key={index}>
                        <span className='username'>User ID: {bidder._id}</span>
                        <span className='amount'>Total Bid: ${parseFloat(bidder.bidAmount).toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBox;
