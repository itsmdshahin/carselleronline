import { Link } from 'react-router-dom';
import './bidding.scss';
import { Button } from 'react-bootstrap';
import CAR from '../../../images/ca6.jpg';
import Header from '../../components/headerPage/header';
import Footer from '../../components/Footer/Footer';

const Bidding = () => {
    return (
        <>
            <div className="bidding">
                <Header />
                <div className="headercontainer">
                    <div className="leftside">
                        <img width="300px" src={CAR} alt="Pic" />
                        <Button className='viewlisting'>
                            <Link to="/preview">View Listing</Link>
                        </Button>
                    </div>
                    <div className="rightside">
                        <div className="cardivtitle">
                            <h2>Land Rover</h2>
                            <h3>Current Price : $49,000</h3>
                        </div>
                        <div className="cardivbody">
                            <p>London, United Kingdom</p>
                            <h3>Reserve Price: USD $58,000</h3>
                            <h4>
                                <Link to="/">3 bids</Link>
                            </h4>
                        </div>
                        <div className='cardivfotter'>
                            <p>
                                Public Auction has reached the reserve price
                                Listing closes in 15 days, 1 hour
                            </p>
                        </div>
                        <Link></Link>

                    </div>
                </div>
                <div className="footercontainer">

                    <div className="bidhistory">
                        <div className="bidtitle">
                            <h3>Bidding History</h3>
                        </div>
                        <hr />
                        <div className="listitems">
                            <span>Bidder 1</span>
                            <span>$260</span>
                            <span>2 hours ago</span>
                        </div>
                        <hr />
                        <div className="listitems">
                            <span>Bidder 2</span>
                            <span>$160</span>
                            <span>7 hours ago</span>
                        </div>
                        <hr />
                        <div className="listitems">
                            <span>Bidder 3</span>
                            <span>$60</span>
                            <span>10 hours ago</span>
                        </div>
                        <hr />
                        <p>
                            <Link to="/bidhistory">View more</Link>
                        </p>
                    </div>
                    <div className="placeoption">
                        <div className="placetitle">
                            <h2>Place a bid</h2>
                        </div>
                        <div className="placeabid">
                            <input
                                type='text'
                                name='bid'
                                placeholder='place a bid'
                            />
                        </div>
                        <div className="btn">
                            <Button>Bid</Button>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bidding;
