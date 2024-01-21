import { useEffect, useState } from 'react';
import DELETE from "../../assets/deletelogo.svg";

import VIEW from "../../assets/delete.svg";
import './allcar.scss';

export default function Allcar() {
  const [CARS, setCARS] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedCarData, setUpdatedCarData] = useState({});
  const [selectedCarId, setSelectedCarId] = useState(null);

  const apiURL =  `http://localhost:5000`; // || `https://carseller-server.onrender.com` 
  useEffect(() => {
    fetch(`${apiURL}/api/addacar`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCARS(data))
      .catch((error) => {
        console.log('Error fetching data ' + error);
      });
  }, []);

  // update code start here :
  const handleUpdate = (id) => {
    // Show the update modal
    setShowUpdateModal(true);
    setSelectedCarId(id);
  };

  const handleCloseUpdateModal = () => {
    // Close the update modal
    setShowUpdateModal(false);
    setUpdatedCarData({});
    setSelectedCarId(null);
  };

  const handleInputChange = (e) => {
    // Update the state with the input values
    setUpdatedCarData({
      ...updatedCarData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = () => {
    // Make an API request to update the car with the given ID
    fetch(`${apiURL}/api/addacar/${selectedCarId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(updatedCarData),
    })
      .then((response) => response.json())
      .then((updatedCar) => {
        // Update the local state with the updated car
        const updatedCars = CARS.map((car) =>
          car._id === selectedCarId ? updatedCar : car
        );
        setCARS(updatedCars);
        console.log('Car updated successfully:', updatedCar);

        // Close the update modal
        handleCloseUpdateModal();
      })
      .catch((error) => {
        console.error('Error updating car:', error);
      });
  };



  const handleDelete = (id) => {
    // Implement logic to delete the car with the given id
    console.log(`Delete car with id ${id}`);
    const confirmDelete = window.confirm('Are you sure you want to delete this car?');

    if (!confirmDelete) {
      return;
    }

    // Make an API request to delete the car with the given ID
    fetch(`${apiURL}/api/addacar/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted car from the local state
          const updatedCars = CARS.filter((car) => car._id !== id);
          setCARS(updatedCars);
          console.log('Car deleted successfully');
        } else {
          console.error('Error deleting car:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting car:', error);
      });
  };

  return (
    <div className="allcar">
      <div className="header">All Car</div>
      <div className="froms">
        <ul>
          {CARS.map((car) => (
            <li key={car._id}>
              <h2>{car.id}</h2>
              <h2>{car.name}</h2>
              <p>Price : {car.price}</p>
              <button className='delete' onClick={() => handleUpdate(car._id)}><img src={VIEW} alt="logo" /></button>
              
              <button className='delete' onClick={() => handleDelete(car._id)}><img src={DELETE} alt="logo" /></button>
            </li>
          ))}
        </ul>
      </div>
      {/* Update Modal */}
      {showUpdateModal && (
        <div className="update-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseUpdateModal}>
              &times;
            </span>
            <h2>Update Car</h2>
            <form>
              {/* Include input fields for each property you want to update */}
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={updatedCarData.name || ''}
                onChange={handleInputChange}
              />
              {/* Add similar input fields for other properties */}

              <button type="button" onClick={handleUpdateSubmit}>
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
