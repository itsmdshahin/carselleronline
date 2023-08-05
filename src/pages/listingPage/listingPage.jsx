
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from "../../components/Listing/Listing";
import "./listingPage.scss";
import { FaRegHandshake, FaCheck } from "react-icons/fa";
import { BiBookmarkAlt, BiSearch, BiDollarCircle, BiSolidBell } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';

import Slider from "react-slick";
import Header from "../../components/headerPage/header";
import { Footer } from "../../components/headerPage/footer";

const data = [
  {
    id: 1,
    types: "Mercedes-Benz CLA 250",
    netprice: "30000",
    year: "2019",
    price: "50,000",

  },
  {
    id: 2,
    types: "BMW",
    netprice: "80000",
    year: "2020",
    price: "90,000",
  },
  {
    id: 3,
    types: "Toyota",
    netprice: "30000",
    year: "2018",
    price: "40,000",
  },
  {
    id: 4,
    types: "Mercedes-Benz CLA 250",
    netprice: "30000",
    year: "2015",
    price: "50,000",
  },
  {
    id: 5,
    types: "Nissan",
    netprice: "10000",
    year: "2017",
    price: "40,000",
  },
  {
    id: 6,
    types: "Range Rover",
    netprice: "110000",
    year: "2021",
    price: "120,000",
  },
]


const ListingPage = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Header />


      <div className='firstPart'>

        <div className='forthPart'>
          <div>
            <h7><BiBookmarkAlt /> Buy(206)</h7>
          </div>
          <div>
            <h7><BiSearch />Off Market(206)</h7>
          </div>
          <div>
            <h7><BiDollarCircle />Invest</h7>
          </div>
          <div className='bn3'>
            <button type="button" className="btn3"><h7><BiSolidBell />Create Alert</h7></button>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark rounded-pill" id="dropdown-basic">
                Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <hr />
        <div className='secondPart m-5'>
          <h5> <span><FaRegHandshake /> </span>Get Deal First. 21 Days Before the Rest.</h5>
          <p> Gain an edge and beat the competition. Did you know? 67% of businesses go under offer within the first 21 days. <a href="">Learn More</a></p>

          <div className='button p-2'>
            <button type="button" className="btn btn-dark  rounded-pill"><h6>Get First Access</h6></button>
            <button type="button" className="btn btn-dark rounded-pill"><h6>View 20 More First Access Listings</h6> </button>
          </div>

          <div className='thirdPart'>
            <div className='carsauol'>

              <Slider {...settings}>
                {
                  data.map((item) => (
                    <div className='box text-center'>
                      <h6 className='p-3'>First Access Ends in <a href="">10days</a></h6>
                      <button type="button" className="btn btn-dark rounded-pill"><h7>Verified Listing <FaCheck /></h7></button>
                      <div className='pt-3 text-center'>
                        <p className='mb-1 text-dark'>Types</p>
                        <h6>{item.types}</h6>
                      </div>
                      <div className='pt-2 text-center'>
                        <p className='mb-1 text-dark'>Net Price</p>
                        <h6>USD ${item.netprice}</h6>
                      </div>
                      <div className='pt-2 text-center'>
                        <p className='mb-1 text-dark'>Year</p>
                        <h6>{item.year}</h6>
                      </div>
                      <div className='pt-2 text-center'>
                        <h6>USD ${item.price}</h6>
                      </div>
                      <div className=' pt-2 text-center'>
                        <button type="button" className="col-lg-6 col-md-8 col-sm-12 btn2 btn btn-dark rounded-pill"><h7 className="p-2">View Listing</h7></button>
                      </div>
                    </div>
                  ))
                }

              </Slider>

            </div>
          </div>

        </div>
      </div>
      <Listing />
      <Footer />
    </>
  )
}

export default ListingPage