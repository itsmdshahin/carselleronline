import { Button, Form } from 'react-bootstrap';
import './addacar.scss';
import { useState } from 'react';
import Header from '../../components/headerPage/header';
import { Footer } from '../../components/headerPage/footer';

const SellMyCar = () => {

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [bodytype, setBodytype] = useState('');
    const [mileages, setMileages] = useState('');
    const [gasmileages, setGasmileages] = useState('');
    const [condition, setCondition] = useState('');
    const [vin, setVin] = useState('');
    const [stocknumber, setStocknumber] = useState('');
    const [fueltype, setFueltype] = useState('');
    const [fueltanksize, setFueltanksize] = useState('');
    const [transmission, setTransmission] = useState('');
    const [Engine, setEngine] = useState('');
    const [Horsepower, setHorsepower] = useState('');
    const [Doors, setDoors] = useState('');
    const [Brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState(null);
    const [gallery, setGallery] = useState([]);
 

    const ConfirmSubmit = async () => {
        

        try {
            const response = await fetch('http://localhost:5000/api/sellmycar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, model, year, color, bodytype, mileages, condition, vin, stocknumber, fueltype, gasmileages, fueltanksize, transmission, Engine, Horsepower, Doors, Brand, price, picture, gallery }),
            });
            console.log(response.ok);

            alert(`Submitted: ${name} ${model} ${response.ok} ${response.status} `);
            if (response.ok) {
                // Registration successful
                alert('Car added successfully!');
            } else {
                // Registration failed
                console.log(response);
                alert('Failed to add car!');
            }
        } catch (error) {
            console.error('Error while adding car:', error);
        }
    };


    return (
        <>
            <Header />
            <div className='addacar'>
                <div className="header">
                    <h1>Sell My Car</h1>
                </div>
                <div >
                    <form className="froms">
                        <div className="column">
                            <div className="form" id="div1">
                                <label >Car Name :</label>
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                                <label >Car Model :</label>
                                <input type="text" name="model" id="model" value={model} onChange={(e) => setModel(e.target.value)} />
                                <label >Year :</label>
                                <input type="text" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                                <label >Exterior color :</label>
                                <input type="text" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
                                <label >Body type :</label>
                                <input type="text" name="bodytype" id="bodytype" value={bodytype} onChange={(e) => setBodytype(e.target.value)} />

                                <label >Mileage :</label>
                                <input type="text" name="mileages" id="mileages" value={mileages} onChange={(e) => setMileages(e.target.value)} />
                                <label >Condition :</label>
                                <input type="text" name="condition" id="condition" value={condition} onChange={(e) => setCondition(e.target.value)} />
                                <label >VIN :</label>
                                <input type="text" name="vin" id="vin" value={vin} onChange={(e) => setVin(e.target.value)} />
                                <label >Stock number :</label>
                                <input type="text" name="stocknumber" id="stocknumber" value={stocknumber} onChange={(e) => setStocknumber(e.target.value)} />
                                <label >Fuel type: :</label>
                                <input type="text" name="fueltype" id="fueltype" value={fueltype} onChange={(e) => setFueltype(e.target.value)} />

                            </div>
                        </div>

                        <div className="column">
                            <div className="form" id="div1">
                                <label >Gas mileage :</label>
                                <input type="text" name="gasmileages" id="gasmileages" value={gasmileages} onChange={(e) => setGasmileages(e.target.value)} />
                                <label >Fuel tank size :</label>
                                <input type="text" name="fueltanksize" id="fueltanksize" value={fueltanksize} onChange={(e) => setFueltanksize(e.target.value)} />
                                <label >Transmission :</label>
                                <input type="text" name="transmission" id="transmission" value={transmission} onChange={(e) => setTransmission(e.target.value)} />

                                <label >Engine :</label>
                                <input type="text" name="Engine" id="Engine" value={Engine} onChange={(e) => setEngine(e.target.value)} />
                                <label >Horsepower :</label>
                                <input type="text" name="Horsepower" id="Horsepower" value={Horsepower} onChange={(e) => setHorsepower(e.target.value)} />
                                <label >Doors :</label>
                                <input type="text" name="Doors" id="Doors" value={Doors} onChange={(e) => setDoors(e.target.value)} />
                                <label >Brand :</label>
                                <input type="text" name="Brand" id="Brand" value={Brand} onChange={(e) => setBrand(e.target.value)} />

                                <label>Car Picture:</label>
                                <input
                                    type="file"
                                    name="picture"
                                    id="picture"
                                   /* value={picture} */
                                    onChange={(e) => setPicture(e.target.files[0])}
                                />
                                <label>Car Gallery:</label>
                                <input
                                    type="file"
                                    name="gallery"
                                    id="gallery"
                                    multiple
                                    /*value={gallery} */
                                    onChange={(e) => setGallery(e.target.files)}
                                />

                                <label >Car Price :</label>
                                <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

                            </div>

                        </div>
                    </form>
                    <div className="submit" >
                        <Button onClick={ConfirmSubmit}>Sell Now</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default SellMyCar