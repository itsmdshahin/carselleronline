// BidHistory.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const BidHistory = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    socket.on("newBid", (bid) => {
      setBids((prevBids) => [...prevBids, bid]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bidhistory">
        <div className="bidtitle">
          <h3>Bidding History</h3>
        </div>
        <hr />
        {bids.map((bid, index) => (
          <div key={index} className="listitems">
            <span>{`Bidder ${index + 1}`}</span>
            <span>{`$${bid.amount}`}</span>
            <span>{new Date(bid.timestamp).toLocaleString()}</span>
          </div>
        ))}
        <hr />
        <p>
          <Link to="/bidhistory">View more</Link>
        </p>
      </div>
    </>
  );
}

export default BidHistory;
