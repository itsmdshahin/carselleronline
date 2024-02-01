import { Link, useParams } from 'react-router-dom';
import './bidding.scss';
import { Button } from 'react-bootstrap';
import CAR from '../../../images/ca6.jpg';
import Header from '../../components/headerPage/header';
import Footer from '../../components/Footer/Footer';
import BidHistory from './BidHistory';
import PlaceABid from './placeABid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BidPlaceH from '../BidPlaceH/BidPlaceH';

const Bidding = () => {

    const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 
    const { carId } = useParams();
    console.log(carId);

    const [carData, setCarData] = useState({});
    const [userIdInfo, setUserIdInfo] = useState({});
    useEffect(() => {

        axios.get(`${apiURL}/api/getcalldatalisting/${carId}`)
            .then((response) => {
                console.log(response.data, "CarData");
                setCarData(response.data.carProfile);
                const userId = response.data.carProfile.userId;


            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [carId]);

    console.log("This is :" + carData);
    // Assuming you have the `months` and `weekdays` arrays defined somewhere in your code
    // Assuming these values are defined somewhere in your code
    const calculateRemainingTime = () => {
        const createdAtDate = new Date(carData.createdAt);
        const expiresInMs = createdAtDate.getTime() + 30 * 24 * 60 * 60 * 1000 - Date.now();
        
        if (expiresInMs <= 0) {
          return "Listing has ended";
        }
    
        const days = Math.floor(expiresInMs / (24 * 60 * 60 * 1000));
        const hours = Math.floor((expiresInMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    
        return `Listing closes in ${days} days, ${hours} hours`;
      };
    
    
    return (
        <>
            <div className="bidding">
                <Header />
                <div className="headercontainer">
                    <div className="leftside">
                        <img width="300px" src={CAR} alt="Pic" />
                        <Button className='viewlisting'>
                            <Link to={`/preview/${carId}`}>View Listing</Link>
                        </Button>
                    </div>
                    <div className="rightside">
                        <div className="cardivtitle">
                            <h2>{carData.name} </h2>
                            <h3>Starting Price : {carData.price}</h3>
                        </div>
                        <div className="cardivbody">
                            <p>London, United Kingdom</p>
                            <h3>Reserve Price: USD $58,000</h3>
                            {/* <h4>
                                <Link to="/">3 bids</Link>
                            </h4> */}
                        </div>
                        <div className='cardivfotter'>
                            <p>
                            {calculateRemainingTime()} 
                            </p>
                        </div>
                        <Link></Link>

                    </div>
                </div>
                <div className="footercontainer">
 

                    <BidPlaceH carId ={carId} bidMinAmount={carData.price} />

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Bidding;
