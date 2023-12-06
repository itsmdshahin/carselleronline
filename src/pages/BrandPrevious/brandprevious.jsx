import React, { useEffect, useState } from 'react'
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";
import { FaAngleDown } from 'react-icons/fa';
import CarDetailsModal from './CarDetailsModal';
import "./brandprevious.scss";

const BrandPrevious = () => {

  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cars');
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  const openCarDetails = (car) => {
    setSelectedCar(car);
  };

  const closeCarDetails = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <Header />

      <div className='brandprevious'>
        {/* This is Car showing strating  */}
        <div className='thirddiv'>
          <h2 className='thirddivh3'>Best Deals First <a href=""><FaAngleDown className='logo' /></a></h2>

          <div className='thirdone'>
            <div className="thirdtwo">
              <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
              <div className="thirdthree">
                <h3>2015 Marcedes-Benz Sprinter Cab {cars.name}</h3>


                <div className='thirdfour'>
                  <div className='thirdfourone'>
                    <p className='thirdp'>$25,500</p>
                    <p className='thirdp'>163,383 mile</p>
                    <p className='thirdp'>Clarksville,MD</p>
                    <p className='thirdpp'>(880)1234567</p>
                  </div>

                  <div className='thirdfourtwo'>
                    <p>$9,730 below market</p>
                  </div>
                </div>

                <div className='thirdfive'>
                  <div className='thirdfiveone'>
                    <button className="btn2">Request Info</button>
                  </div>
                  <div className='thirdfiveone'>
                    <button className="btn">Start Purchasing</button>
                  </div>
                </div>
              </div>
            </div>
 
          </div>

        </div>

      </div>

      <Footer />
      {/* Render the modal when selectedCar is not null */}
      {selectedCar && (
        <CarDetailsModal car={selectedCar} onClose={closeCarDetails} />
      )}

    </>
  )
}

export default BrandPrevious;