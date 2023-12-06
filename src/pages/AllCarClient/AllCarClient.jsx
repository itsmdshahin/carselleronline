import { useEffect, useState } from "react";


const AllCarClient = () => {
    const [CARS, setCARS] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/CarDataFormClient', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` // Include the JWT token
            }
        })
            .then(response => response.json())
            .then(data => setCARS(data))
            .catch(error => {
                console.log('Error fetching data ' + error);
            });

    })


    const handleDelete = (id) => {
        // Implement logic to delete the car with the given id
        console.log(`Delete car with id ${id}`);
        const confirmDelete = window.confirm('Are you sure you want to delete this car?');

        if (!confirmDelete) {
            return;
        }

        // Make an API request to delete the car with the given ID
        fetch(`http://localhost:5000/api/sellmycar/${id}`, {
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
        <>
            <div className="maincontainer">
                <div className="firstdiv">ALL Client Car HOME</div>
                <div className="seconddiv">
                    {/* <h1>ALL CARS</h1>   */}
                    <ul>
                        {CARS.map(user => (
                            <li key={user._id}>
                                <h2>{user.id}</h2>
                                <h2>{user.name}</h2>
                                <p>Price : {user.price}</p>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AllCarClient