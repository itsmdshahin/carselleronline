// import { Button } from 'bootstrap'
import './carpreview.scss'
import PROFILEPIC from '../../../assets/usersprofileimg/itsmdshahinpro.png';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CarPreview = () => {

    const { carId } = useParams();
    console.log(carId);

    const [carData, setCarData] = useState({});
    const [userIdInfo, setUserIdInfo] = useState({});
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
                    <h3>USD $240</h3>
                </div>
                <hr />
                <div className="allprice">
                    <p>32 bids</p>
                    <p>Reserve Price: $50,000</p>
                    <p>12 days left*</p>
                </div>
                <div className="button">
                    <button>Contact Seller</button>
                    <button>Place A Bid</button>
                </div>
            </div>
            <div className="carpreview">
                <div className="headeradmin">
                    <img width='100px' src={PROFILEPIC} alt="profile" />
                    <div className="headerdes">
                        <h3>{userIdInfo.name}</h3>
                        <h4>Sylhet, Bangladesh</h4>
                    </div>
                </div>

                <div className="desadmin">
                    <button><Link to=''>Message me</Link></button>
                    
                </div>
            </div>
        </>
    )
}

export default CarPreview