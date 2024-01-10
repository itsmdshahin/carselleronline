import React from 'react'
import Header from '../../components/headerPage/header'
import { Footer } from '../../components/headerPage/footer'
import './payment.scss';

const Error = () => {
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')
    return (
        <>
            <Header />
            <div className='mainpayment'>payment {message}</div>
            <Footer />
        </>
    )
}

export default Error