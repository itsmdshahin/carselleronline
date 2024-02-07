import React, { useState } from 'react';
import axios from 'axios';

const CarValuation = () => {
    const [vin, setVin] = useState('');
    const [vehicleValue, setVehicleValue] = useState(null);
    const [error, setError] = useState('');

    const apiKey = 'YOUR_CARSXE_API_KEY'; // Replace with your actual CarsXE API key
    const apiUrl = 'https://api.carsxe.com/marketvalue';

    const handleVinChange = (e) => {
        setVin(e.target.value);
    };

    const getVehicleValue = async () => {
        try {
            const response = await axios.get(apiUrl, {
                params: {
                    key: apiKey,
                    vin: vin,
                },
            });
            setVehicleValue(response.data);
            setError('');
        } catch (e) {
            console.error(e);
            setError('Failed to fetch vehicle data. Please check the VIN and try again.');
            setVehicleValue(null);
        }
    };

    return (
        <div>
            <h2>Car Valuation</h2>
            <input type="text" value={vin} onChange={handleVinChange} placeholder="Enter VIN" />
            <button onClick={getVehicleValue}>Get Vehicle Value</button>

            {vehicleValue && (
                <div>
                    <h3>Vehicle Market Value</h3>
                    <p>Retail: {vehicleValue.retail}</p>
                    <p>Trade-In: {vehicleValue.tradeIn}</p>
                    {/* Display other vehicle value details as needed */}
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default CarValuation;
