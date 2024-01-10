import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './carpreview.scss';
import PROFILEPIC from '../../../assets/usersprofileimg/itsmdshahinpro.png';
import { Link, useParams } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';

const CarPreview = () => {
    const { carId } = useParams();
    console.log(carId);

    const [carData, setCarData] = useState({});
    const [userIdInfo, setUserIdInfo] = useState({});
    const [bidisEnd, setBidisEnd] = useState(null);

    const calculateRemainingTime = () => {
        const createdAtDate = new Date(carData.createdAt);
        const expiresInMs =
            createdAtDate.getTime() + 30 * 24 * 60 * 60 * 1000 - Date.now();

        if (expiresInMs <= 0) {
            setBidisEnd(true);
        }

        const days = Math.floor(expiresInMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (expiresInMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );

        return `Listing closes in ${days} days, ${hours} hours`;
    };

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/getcalldatalisting/${carId}`)
            .then((response) => {
                console.log(response.data, 'CarData');
                setCarData(response.data.carProfile);
                const userId = response.data.carProfile.userId;
                axios
                    .get(`http://localhost:5000/profile/${userId}`)
                    .then((userResponse) => {
                        console.log(userResponse.data, 'UserData');
                        setUserIdInfo(userResponse.data);
                        console.log(
                            'ALL DATE FOUND USER!' + userResponse.data
                        );
                    })
                    .catch((userError) => {
                        console.error('Error fetching user data:', userError);
                    });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [carId]);

    console.log('This is :' + carData);

    const winnerUserId = carData.bidderUserId; // Assuming you have the winner's user ID in carData

    return (
        <>
            <div className="carpreview">
                <img src="../../../../images/ca6.jpg" alt="carpreview" />
                <div className="askingprice">
                    <h3>Asking Price (Auction)</h3>
                    <h3>BDT {carData.price} </h3>
                </div>
                <hr />
                <div className="allprice">
                    <p>32 bids</p>
                    <p>Reserve Price: $50,000</p>
                    <p>
                        {bidisEnd === null
                            ? calculateRemainingTime()
                            : 'Car is Sucessfully Sold!'}
                    </p>
                </div>
                {bidisEnd === null && (
                    <div className="button">
                       <button><Link to='/Buynow'>Buy Now</Link></button>

                        <button>
                            <Link to={`/bidding/${carId}`}>Place A Bid</Link>
                        </button>
                    </div>
                )}
                <button>
                    <Link to={`/bidding/${carId}`}>Place A Bid</Link>
                </button>
            </div>
            <div className="carpreview">
                <div className="headeradmin">
                    <img
                        width="100px"
                        src={PROFILEPIC}
                        alt="profile"
                    />
                    <div className="headerdes">
                        <h3>
                            {userIdInfo.name}{' '}
                            {userIdInfo.isVerified ? (
                                <FaRegCheckCircle className="logo1" />
                            ) : (
                                <button>Not Verified</button>
                            )}
                        </h3>
                        <h4>Sylhet, Bangladesh</h4>
                    </div>
                </div>

                <div className="desadmin">
                    <button>
                        <Link to={`mailto:${userIdInfo.email}`}>
                            Message me
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default CarPreview;
