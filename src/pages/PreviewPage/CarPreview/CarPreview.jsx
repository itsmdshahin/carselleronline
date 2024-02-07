import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './carpreview.scss';
import PROFILEPIC from '../../../assets/usersprofileimg/itsmdshahinpro.png';
import { Link, useParams } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';

const CarPreview = () => {
    const { carId } = useParams();
    const apiURL = `http://localhost:5000`; // || `https://carseller-server.onrender.com`

    const [carData, setCarData] = useState({});
    const [userIdInfo, setUserIdInfo] = useState({});
    const [bidisEnd, setBidisEnd] = useState(null);
    const [highestBid, setHighestBid] = useState(null); // Initialize as null
    const [WinnerInfo, setWinnerInfo] = useState({});
    const userId = localStorage.getItem('userId');

    const calculateRemainingTime = () => {
        const createdAtDate = new Date(carData.createdAt);
        const expiresInMs = createdAtDate.getTime() + 30 * 24 * 60 * 60 * 1000 - Date.now();

        if (expiresInMs <= 0) {
            setBidisEnd(true);
        }

        const days = Math.floor(expiresInMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((expiresInMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

        return `Listing closes in ${days} days, ${hours} hours`;
    };

    useEffect(() => {
        axios.get(`${apiURL}/api/getcalldatalisting/${carId}`)
            .then((response) => {
                setCarData(response.data.carProfile);
                const userIds = response.data.carProfile.userId;
                return axios.get(`${apiURL}/profile/${userIds}`); // Chain the promise for better readability
            })
            .then((userResponse) => {
                setUserIdInfo(userResponse.data);
            })
            .catch((error) => {
                console.error('Error fetching car or user data:', error);
            });

        // Fetch the highest bid for the car
        axios.get(`${apiURL}/api/get-highest-bid/${carId}`)
            .then((highestBidResponse) => {
                setHighestBid(highestBidResponse.data);

                // Fetch the winner's information based on the winnerUserId
                if (highestBidResponse.data && highestBidResponse.data.bidderUserId) {
                    return axios.get(`${apiURL}/profile/${highestBidResponse.data.bidderUserId}`); // Chain the promise for better readability
                }
            })
            .then((winnerResponse) => {
                if (winnerResponse && winnerResponse.data) {
                    setWinnerInfo(winnerResponse.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching bid or winner data:', error);
            });
    }, [carId]);

    return (
        <>
            <div className="carpreview">
                <img src="../../../../images/ca6.jpg" alt="carpreview" />
                <div className="askingprice">
                    <h3>Asking Price (Auction)</h3>
                    <h3>BDT {carData.price}</h3>
                </div>
                <hr />
                <div className="allprice">
                    <p>32 bids</p>
                    <p>Reserve Price: $50,000</p>
                    <p>
                        {bidisEnd === null
                            ? calculateRemainingTime()
                            : (WinnerInfo && highestBid ? `${WinnerInfo.name} Bought by $${highestBid.bidAmount} dollars!` : 'Auction ended')}
                    </p>
                </div>
                {bidisEnd === null && (
                    <div className="button">
                        <button><Link to='/Buynow'>Buy Now</Link></button>
                        <button><Link to={`/bidding/${carId}`}>Place A Bid</Link></button>
                    </div>
                )}
                {userId === (highestBid && highestBid.bidderUserId) && (
                    <div className="button">
                        <button><Link to='/Buynow'>Buy Now</Link></button>
                    </div>
                )}
            </div>
            <div className="carpreview">
                <div className="headeradmin">
                    <img width="100px" src={PROFILEPIC} alt="profile" />
                    <div className="headerdes">
                        <h3>
                            {userIdInfo.name}{' '}
                            {userIdInfo.isVerified ? <FaRegCheckCircle className="logo1" /> : <button>Not Verified</button>}
                        </h3>
                        <h4>Sylhet, Bangladesh</h4>
                    </div>
                </div>
                <div className="desadmin">
                    <button><Link to={`mailto:${userIdInfo.email}`}>Message me</Link></button>
                </div>
            </div>
        </>
    );
};

export default CarPreview;
