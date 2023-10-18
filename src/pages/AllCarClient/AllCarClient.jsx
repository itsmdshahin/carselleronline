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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AllCarClient