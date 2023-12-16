import React, { useState } from "react";

// import './events.css'
import './events.scss';
import video from '../../assets/videos/carsellerevent.mp4'
import { MdLocationPin } from "react-icons/md"
import { IoIosCloseCircle } from "react-icons/io";
import Header from "../../components/headerPage/header";
import { Footer } from "../../components/headerPage/footer";


const Events = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <>
            <Header />
            <div className="mainforeventonly">
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
                                    <h2></h2>
                                    <div className="form-container">


                                        <form className="form">

                                            <input type="text" className="name" placeholder="Name" />
                                            <input type="email" className="email" placeholder="Email" />
                                            <input type="number" className="phone" placeholder="Phone" />

                                            <button type="btn" className="submit">Register</button>
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