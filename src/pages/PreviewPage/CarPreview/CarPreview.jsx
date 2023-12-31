// import { Button } from 'bootstrap'
import './carpreview.scss'
import PROFILEPIC from '../../../assets/usersprofileimg/itsmdshahinpro.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegCheckCircle } from 'react-icons/fa';

const CarPreview = () => {

    const { carId } = useParams();
    console.log(carId);

    const [carData, setCarData] = useState({});
    const [userIdInfo, setUserIdInfo] = useState({});

    const calculateRemainingTime = () => {
        const createdAtDate = new Date(carData.createdAt);
        const expiresInMs = createdAtDate.getTime() + 30 * 24 * 60 * 60 * 1000 - Date.now();

        if (expiresInMs <= 0) {
            return "Listing has ended";
        }

        const days = Math.floor(expiresInMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((expiresInMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

        return `Listing closes in ${days} days, ${hours} hours`;
    };


    useEffect(() => {
        // Fetch the car details based on the id using axios
        axios.get(`http://localhost:5000/api/getcalldatalisting/${carId}`)
            .then((response) => {
                console.log(response.data, "CarData");
                setCarData(response.data.carProfile); // Assuming name is in response.data
                const userId = response.data.carProfile.userId;
                // Make a new API request to get user details
                axios.get(`http://localhost:5000/profile/${userId}`)
                    .then((userResponse) => {
                        // Assuming user name is in userResponse.data
                        console.log(userResponse.data, "UserData");
                        // Update state with user details
                        setUserIdInfo(userResponse.data);
                        console.log("ALL DATE FOUND USER!" + userResponse.data);
                    })
                    .catch((userError) => {
                        console.error('Error fetching user data:', userError);
                        // Handle error, e.g., show a user-friendly message
                    });

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle error, e.g., show a user-friendly message
            });
    }, [carId]); // Include id in the dependency// Include id in the dependency array to refetch data when id changes

    console.log("This is :" + carData);

    return (
        <>
            <div className='carpreview'>
                <img src='../../../../images/ca6.jpg' alt='carpreview' />
                <div className="askingprice">
                    <h3>Asking Price (Auction)</h3>
                    <h3>BDT {carData.price} </h3>
                </div>
                <hr />
                <div className="allprice">
                    <p>32 bids</p>
                    <p>Reserve Price: $50,000</p>
                    <p>
                        {calculateRemainingTime()}
                    </p>
                </div>
                <div className="button">
                    <button>Buy Now</button>
                    <button> <Link to={`/bidding/${carId}`}>Place A Bid</Link></button>
                </div>
            </div>
            <div className="carpreview">
                <div className="headeradmin">
                    <img width='100px' src={PROFILEPIC} alt="profile" />
                    <div className="headerdes">
                        <h3>{userIdInfo.name} {userIdInfo.isVerified ?
                            <FaRegCheckCircle className='logo1' /> :
                            <button>Not Verified</button>}
                        </h3>
                        <h4>Sylhet, Bangladesh</h4>
                    </div>
                </div>

                <div className="desadmin">
                    <button><Link to={`mailto:${userIdInfo.email}`}>Message me</Link></button>

                </div>
            </div>
        </>
    )
}

export default CarPreview