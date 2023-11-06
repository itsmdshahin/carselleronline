// import { Button } from 'bootstrap'
import './carpreview.scss'
import PROFILEPIC from '../../../assets/usersprofileimg/itsmdshahinpro.png';
import { Link } from 'react-router-dom';

const CarPreview = () => {
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
                        <h3>Md Shahinur Rahman</h3>
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