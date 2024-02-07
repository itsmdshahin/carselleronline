import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './payment.scss';

const Buynow = () => {
    const { state } = useLocation(); // Access the location state
    const amount = state?.amount; 

    const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 

    const payBkash = async () => {
        try {
            const { data } = await axios.post(`${apiURL}/api/bkash/payment/create`, { amount, orderId: 1 }, { withCredentials: true });
            window.location.href = data.bkashURL;
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const payCard = async () => {
        try {
            // Use your Braintree API endpoint for card payments
            const { data } = await axios.post(`${apiURL}/api/braintree/card/payment/create`, { amount: 50, orderId: 1 }, { withCredentials: true });
            // Redirect to the Braintree hosted UI or handle the response as needed
            console.log(data); // Handle the response from Braintree
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const payPayPal = async () => {
        try {
            // Use your Braintree API endpoint for PayPal payments
            const { data } = await axios.post(`${apiURL}/api/braintree/paypal/payment/create`, { amount: 50, orderId: 1 }, { withCredentials: true });
            // Redirect to the Braintree hosted UI or handle the response as needed
            console.log(data); // Handle the response from Braintree
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const payBkashRocket = async (method) => {
        try {
            const { data } = await axios.post(`${apiURL}/api/${method}/payment/create`, { amount: 50, orderId: 1 }, { withCredentials: true });
            // Redirect to the respective payment gateway URL or handle the response as needed
            console.log(data); // Handle the response from Bkash or Rocket
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className='makepaymentcontainer'>
        <button className='bkash-button' onClick={payBkash}>Pay with Bkash</button>
        <button className='card-button' onClick={payCard}>Pay with Card</button>
        <button className='paypal-button' onClick={payPayPal}>Pay with PayPal</button>
        <button className='rocket-button' onClick={() => payBkashRocket('rocket')}>Pay with Rocket</button>
    </div>
    );
};

export default Buynow;
