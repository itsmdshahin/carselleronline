
import { FaAngleDown, FaRegCheckCircle } from "react-icons/fa";
import "./profilee.scss";
import axios from 'axios';
import { Link } from "react-router-dom";
import Edit from "../EditProfile/Edit";
import sendOTPRequest from "../../../../carseller-server/controllers/otpService";
import { useEffect, useState } from "react";
import Modal from 'react-modal';

const Profilee = () => {
    const [verify, setVerify] = useState(false);
    const [userProfile, setUserProfile] = useState({});
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');
    const [otp, setOtp] = useState('');
    const [showModal, setShowModal] = useState(false);


    console.log(userEmail + " " + userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/profile/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    const data = response.data;
                    setUserProfile(data);
                } else {
                    console.error('Error fetching profile data:', response.status);
                }
            } catch (error) {
                console.error('Error during profile data fetch:', error);
            }
        };

        fetchData();
    }, [token, userId]);

    const handleVerifyNowClick = () => {
        sendOTPRequest(userId, userEmail);
        setShowModal(true);
    };

    const handleVerifySubmit = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5000/verifyOTP',
                {
                    userId: userId,
                    otp: otp,
                }
            );

            if (response.status === 200) {
                // Update the state to indicate successful verification
                setVerify(true);
                setShowModal(false);
            } else {
                // Handle the case where OTP verification failed
                console.error('OTP verification failed:', response.data.message);
                // You can show an error message or take appropriate action
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            // Handle the error, e.g., show an error message to the user
        }
    };

    const [carList, setCarList] = useState([]);

    useEffect(() => {
        // Fetch car data from the API
        axios.get('http://localhost:5000/api/sellmycar')
            .then(response => {
                setCarList(response.data
                    .filter((user) => user.userId === userId));
            })
            .catch(error => {
                console.error('Error fetching car data:', error);
            });
    }, []);

    return (
        <>

            <div className='profilee'>

                <div className='firstdiv'>
                    <h1>
                        {userProfile.name} {userProfile.isVerified ?
                            <FaRegCheckCircle className='logo1' /> :
                            <button onClick={handleVerifyNowClick}>Verify Now</button>}
                    </h1>
                </div>

                <div className="seconddiv">
                    <div className='secondone'>
                        <img src="../../../../images/ca7.jpg" alt="Logo" />
                        <div className="editbtn">
                            {/* <button className="edit"><a href="">EDIT</a></button> */}
                            {/* <a href={`/edit/${userId}`} className="edit">EDIT</a> */}
                            <Link to={`/edit/${userId}`} className="edit">Edit</Link>
                        </div>
                    </div>

                    {/* OTP Verification Modal */}
                    <Modal
                        isOpen={showModal}
                        onRequestClose={() => setShowModal(false)}
                        contentLabel="OTP Verification"
                    >
                        <h2>Enter OTP</h2>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button onClick={handleVerifySubmit}>Verify</button>
                    </Modal>

                    <div className='secondtwo'>
                        <p className="email"> User Email: {userProfile.email}</p>


                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident sometimes on purpose (injected humour and the like).</p>

                        <div className='secondtwoone'>

                            <p className='one'>   12420 Auto Drive clarksville, MD 21029  </p>

                            <a className="two" href="http://www.antwerpentoyota.com">Maps & Directions</a>

                            <p className='three'> Sales: <a className="cell">(880)12345678</a> </p>
                            <p className='three'> Services: <a className="cell">(880)123456</a> </p>

                        </div>

                    </div>

                    <div className='secondthree'>
                        <h4 className='secondthreeone'>Today 9.00 AM-7.00 PM (Closed Now)</h4>

                        <h3 className='secondthreetwo'>Show business hours</h3>
                    </div>

                </div>

                <div className='thirddiv'>
                    <h2 className='thirddivh3'>Best Deals First <a href=""><FaAngleDown className='logo' /></a></h2>


                    <div className='thirdone'>
                        {carList.map((car, index) => (
                            <div className="thirdtwo" key={index}>
                                <img src={`../../../images/ca1.jpeg`} alt="Car" className='thirdimg' />
                                <div className="thirdthree">
                                    <h3>{car.name}  {car.year}</h3>

                                    <div className='thirdfour'>
                                        <div className='thirdfourone'>
                                            <p className='thirdp'>BDT : ৳{car.price} </p>
                                            <p className='thirdp'>Model : {car.model}</p>
                                            <p className='thirdpp'>({car.mileages})</p>
                                        </div>

                                        <div className='thirdfourtwo'>
                                            {/* You can display additional details or remove this part if not needed */}
                                            <p>{car.marketStatus}</p>
                                        </div>
                                    </div>

                                    <div className='thirdfive'>
                                        <div className='thirdfiveone'>
                                            <button className="btn2">Update Data</button>
                                        </div>
                                        <div className='thirdfiveone'>
                                            <button className="btn">Delete Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>

            </div>
        </>
    )
}

export default Profilee