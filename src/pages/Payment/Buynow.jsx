import React from 'react'
import Header from '../../components/headerPage/header';
import { Footer } from '../../components/headerPage/footer';
import "./buynow.scss"
import axios from 'axios'
const Buynow = () => {

  const pay = async () => {
   try{
    
    const {data} = await axios.post('http://localhost:5000/api/bkash/payment/create', {amount:50, orderId:1},{withCredentials:true})
    window.location.href = data.bkashURL;
    console.log('hello my name amira')
    console.log(data)
   }catch(error){
    console.log( error.response.data);
   }
  }

  return (
    <>

    <div className='buynow'><button onClick={pay}><h1>Buy now</h1></button></div>

    </>
    
  )
}

export default Buynow