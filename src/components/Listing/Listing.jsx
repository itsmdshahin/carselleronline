import React from 'react';
import "./listing.scss";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLocationDot, FaRegEyeSlash } from "react-icons/fa6";
const data = [
  {
    id: 1,
    img: "../../images/ca10.jpg",
    carName: "Range Rover",
    location: "United State",
    transmission: "Automatic With Manual Mode",
    askingPrice: "50,000",
    currentPrice: "38,000",
    engine: "2.0L V8",
    power: "518 hp",
  },
  {
    id: 2,
    img: "../../images/ca10.jpg",
    carName: "BMW",
    location: "United Arab",
    transmission: "Automatic With Manual Mode",
    askingPrice: "50,000",
    currentPrice: "38,000",
    engine: "2.0L V8",
    power: "518 hp",
  },
  {
    id: 3,
    img: "../../images/ca10.jpg",
    carName: "Toyota",
    location: "Bangladesh",
    transmission: "Automatic With Manual Mode",
    askingPrice: "50,000",
    currentPrice: "38,000",
    engine: "2.0L V8",
    power: "518 hp",
  },
  {
    id: 4,
    img: "../../images/ca10.jpg",
    carName: "Ferari",
    location: "United State",
    transmission: "Automatic With Manual Mode",
    askingPrice: "50,000",
    currentPrice: "38,000",
    engine: "2.0L V8",
    power: "518 hp",
  },
]

const Listing = () => {
  return (
    <div className='listing'>

      <h1 className='headerlist'>Listing</h1>

      {
        data.map((item) => (

          <div className='listDiv'>
            <img width="350px" src={item.img} alt="Pic" />

            <div className='listRow'>

              <div className='first'>
                <h1>{item.carName}</h1>
                <p><FaLocationDot />{item.location}</p>
              </div>
              <div className='first'>
                <h4>Transmission</h4>
                <p>{item.transmission}</p>

                <div className='second'>
                  <div className='min'>
                    <h4>Engine</h4>
                    <p>{item.engine}</p>
                  </div>
                  <div className='min'>
                    <h4>Power</h4>
                    <p>{item.power}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='listRow'>

              <div className='third'>
                <p>Asking Price</p>
                <h2>USD ${item.askingPrice}</h2>
              </div>
              <div className='first'>
                <p>Net Price</p>
                <h2>USD ${item.currentPrice}</h2>
              </div>

              <div className='btnrow'>
                <button type="button"> <FaRegEyeSlash className='icon' />
                  <Link to="/bidding">Bid Now</Link>
                </button>
                <button type="button">
                <Link to="/preview">View Listing</Link>  
                </button>
              </div>

            </div>



          </div>))
      }


    </div>


  )
}

export default Listing