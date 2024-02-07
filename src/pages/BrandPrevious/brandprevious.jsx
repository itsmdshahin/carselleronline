import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";
import { FaAngleDown } from 'react-icons/fa';
import Modal from 'react-modal'; // Using react-modal for simplicity
import "./brandprevious.scss";

Modal.setAppElement('#root'); // Properly set the app element for accessibility

const BrandPrevious = () => {
  const navigate = useNavigate();
  const apiURL = `http://localhost:5000`;
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${apiURL}/api/CarDataFormAdmins`);
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [apiURL]);

  const handleRequestInfo = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleStartPurchasing = (price) => {
    navigate('/Buynow', { state: { amount: price } });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <>
      <Header />
      <div className='brandprevious'>
        <div className='thirddiv'>
          <h2 className='thirddivh3'>Best Deals First <FaAngleDown className='logo' /></h2>
          <div className='thirdone'>
            {cars.map((car, index) => (
              <div className="thirdtwo" key={index}>
                <img src={car.imageURL || "../../../../images/ca6.jpg"} alt="Car" className='thirdimg' />
                <div className="thirdthree">
                  <h3>{car.name} - {car.year}</h3>
                  <div className='thirdfour'>
                    <div className='thirdfourone'>
                      <p className='thirdp'>${car.price}</p>
                      <p className='thirdp'>{car.mileage} mile</p>
                      <p className='thirdp'>{car.location}</p>
                      <p className='thirdpp'>{car.contact}</p>
                    </div>
                    <div className='thirdfourtwo'>
                      <p>{car.marketStatus}</p>
                    </div>
                  </div>
                  <div className='thirdfive'>
                    <div className='thirdfiveone'>
                      <button className="btn2" onClick={() => handleRequestInfo(car)}>Request Info</button>
                    </div>
                    <div className='thirdfiveone'>
                      <button className="btn" onClick={() => handleStartPurchasing(car.price)}>Start Purchasing</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Car Details Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>{selectedCar?.name}</h2>
        {/* Display car details */}
        <p>Model: {selectedCar?.model}</p>
        <p>Price: ${selectedCar?.price}</p>
        <p>Mileage: {selectedCar?.mileage}</p>
        <p>Location: {selectedCar?.location}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default BrandPrevious;
