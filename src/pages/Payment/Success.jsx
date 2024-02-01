import React from 'react'
import './payment.scss'
import Header from '../../components/headerPage/header'
import { Footer } from '../../components/headerPage/footer'

const Success = () => {
    return (
        <> 
        <Header />
            <div className='mainpayment'>Success</div>
            <Footer />
        </>
    )
}

export default Success