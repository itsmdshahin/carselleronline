// CarDetailsModal.js
import React from 'react';

const CarDetailsModal = ({ car, onClose }) => {
  return (
    <div className="car-details-modal">
      <div className="modal-content">
        <h3>{car.year} {car.brand} {car.model}</h3>
        <p>Price: ${car.price}</p>
        <p>Mileage: {car.mileage} miles</p>
        <p>Location: {car.location}</p>
        <p>Contact: {car.contact}</p>
        <p>Description: {car.description}</p>
        {/* Add more details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CarDetailsModal;
