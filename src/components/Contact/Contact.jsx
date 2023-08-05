import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import "./contact.scss";

const Contact = () => {
    return (
        <div>
            <div className='contact'>
                <Container className=' contactContainer'>
                    <Row className='contactRow'>
                        <Col className='contactCol'>
                            <div className='contactDiv'>
                                <h1> Be the first to know about new listing</h1>
                                <div className="contact1">
                                    <input type="text" id="form" placeholder='Email Address' />
                                    <button type="button">Submit</button>
                                </div>
                            </div>
                            <div className='contacticon'>
                                <h5 className='contacth5'> Connect With Us</h5>
                                <div className='icondiv'>
                                    <span>
                                        <FaFacebook className="icon" />
                                    </span>
                                    <span>
                                        <FaTwitter className="icon" />
                                    </span>
                                    <span>
                                        <FaInstagram className="icon" />
                                    </span>
                                    <span>
                                        <FaLinkedinIn className="icon" />
                                    </span>
                                    <span>
                                        <FaPinterest className="icon" />
                                    </span>

                                </div>


                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Contact;