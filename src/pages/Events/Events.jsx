import React, { useState } from "react";

// import './events.css'
import './events.scss';
import video from '../../assets/videos/carsellerevent.mp4'
import { MdLocationPin } from "react-icons/md"
import { IoIosCloseCircle } from "react-icons/io";
import Header from "../../components/headerPage/header";
import { Footer } from "../../components/headerPage/footer";


const Events = () => {
    const apiURL = `http://localhost:5000`; // || `https://carseller-server.onrender.com` 

    const [showPopup, setShowPopup] = useState(false);   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to submit the form data
    const registerEvent = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await fetch(`${apiURL/api/eventregistrations}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                // Handle successful registration here (e.g., showing a success message)
                setShowPopup(false); // Close the popup after successful registration
            } else {
                // Handle server errors or unsuccessful registration here
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Failed to register:', error);
        }
    };
 
    const registerForEvent = async (e) => {
        e.preventDefault(); // Prevent the default form submit action

        // Collect form data
        const name = document.querySelector('.name').value;
        const email = document.querySelector('.email').value;
        const phone = document.querySelector('.phone').value;

        // Construct the request body
        const requestBody = {
            name,
            email,
            phone
        };

        try {
            // Send a POST request to your backend endpoint
            const response = await fetch(`${apiURL/api/eventregistrations}`, { // Use the correct endpoint for event registration
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Failed to register for the event');
            }

            // Handle success
            const result = await response.json();
            console.log(result);
            alert('Registration successful!');
            setShowPopup(false); // Close the popup on successful registration
        } catch (error) {
            console.error('Error registering for the event:', error);
            alert('Failed to register for the event.');
        }
    };



    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (

        <>
            {/* <Header />
        <div className="mainevent">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted />

        <> */}
            <Header />
            <div className="mainevent">
                <div className="overlay"></div>
                <video src={video} autoPlay loop muted />


                <div className="content">
                    <h1>Welcome To  CarSeller Online</h1>
                    <p>Join our events and grab 5% off in your first purchase</p>

                    <div className="location">
                        <h4><MdLocationPin />Sylhet</h4>
                        <h4><MdLocationPin />Dhaka</h4>
                        <h4><MdLocationPin />Dinajpur</h4>
                        <h4><MdLocationPin />Chittagong</h4>
                    </div>
                    <div className="register">
                        <button className="btn1" onClick={togglePopup} >Event Register</button>
                        <button className="btn2">Free Courses</button>
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">
                                    <span className="close" onClick={togglePopup}><IoIosCloseCircle /></span>
                                    <div className="form-container">
                                        <form className="form" onSubmit={registerEvent}>
                                            <input type="text" name="name" className="name" placeholder="Name" onChange={handleInputChange} />
                                            <input type="email" name="email" className="email" placeholder="Email" onChange={handleInputChange} />
                                            <input type="number" name="phone" className="phone" placeholder="Phone" onChange={handleInputChange} />
                                            <button type="submit" className="submit">Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="free">

                    </div>
                </div>

                <section className="container">

                    <div className="card">
                        <div className="upcoming-btn">
                            <button className="upcoming">Upcoming Event</button>
                        </div>
                        <div className="card-img img1">

                        </div>

                        <div className="body11">
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis aliquam adipisci quod placeat eaque eveniet magnam reiciendis illo quos, maiores optio sunt excepturi in doloribus. Accusamus harum maxime eum.</p>
                            <button className="btn3">Register </button>
                        </div>


                    </div>


                    <div className="card">
                        <div className="upcoming-btn">
                            <button className="upcoming">Upcoming Event</button>
                        </div>
                        <div className="card-img img2">

                        </div>
                        <div className="body11">
                            <h2>Title</h2>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis aliquam adipisci quod placeat eaque eveniet magnam reiciendis illo quos, maiores optio sunt excepturi in doloribus. Accusamus harum maxime eum.</p>
                            <button className="btn3">Register </button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="upcoming-btn">
                            <button className="upcoming">Upcoming Event</button>
                        </div>
                        <div className="card-img img3 ">

                        </div>
                        <div className="body11">
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis aliquam adipisci quod placeat eaque eveniet magnam reiciendis illo quos, maiores optio sunt excepturi in doloribus. Accusamus harum maxime eum.</p>
                            <button className="btn3">Register </button>
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </>
    )
}
export default Events;