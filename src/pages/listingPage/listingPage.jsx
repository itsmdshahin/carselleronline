
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    types: "Mercedes-Benz CLA",
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
    types: "Mercedes-Benz CLA",
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
        <hr />
        <div className='secondPart '>
          <h3> <FaRegHandshake className="icon" />Get Deal First. 21 Days Before the Rest.</h3>
          <p className="seconpartp"> Gain an edge and beat the competition. Did you know? 67% of businesses go under offer within the first 21 days. <a href="">Learn More</a></p>

          <div className='button'>
            <button type="button" className="bn1 "><h6>Get First Access</h6></button>
            <button type="button" className="bn1 "><h6>View 20 More First Access Listings</h6> </button>
          </div>

          <div className='thirdPart'>
            <div className='carsauol'>

              <Slider {...settings}>
                {
                  data.map((item) => (
                    <div className='box'>
                      <h6 className="bh6">First Access Ends in <a href="">10days</a></h6>
                      <div className="boxx">
                        <button type="button"><h7>Verified Listing <FaCheck /></h7></button>
                        <div className='box1'>
                          <div className="box3">
                            <p className="boxp">Types</p>
                            <h6 className="boh6">{item.types}</h6>
                          </div>
                          <div className="box3">
                            <p className="boxp">Net Price</p>
                            <h6 className="boh6">USD ${item.netprice}</h6>
                          </div>
                          <div className="box3">
                            <p className="boxp">Year</p>
                            <h6 className="boh6">{item.year}</h6>
                          </div>
                          <div className="box4">
                            <h6 className="boh6">USD ${item.price}</h6>
                          </div>
                        </div>
                        <div className=' box2'>
                          <button type="button" className="bt2"><h7>View Listing</h7></button>
                        </div>
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