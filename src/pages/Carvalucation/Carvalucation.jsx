import { Button, Form } from 'react-bootstrap';
import './addacar.scss';
import { useState } from 'react';
import Header from '../../components/headerPage/header';
import { Footer } from '../../components/headerPage/footer';
import { Link } from 'react-router-dom';

const Carvalucation = () => {

    const [formData, setFormData] = useState({
        name: '',
        model: '',
        year: '',
        color: '',
        bodytype: '',
        mileage: '',
        condition: '',
        vin: '',
        stocknumber: '',
        fueltype: '',
        gasmileage: '',
        fueltanksize: '',
        transmission: '',
        Engine: '',
        Horsepower: '',
        Doors: '',
        Brand: '',
        price: '',
        picture: null,
        gallery: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            picture: file,
        }));
    };

    const handleGalleryChange = (e) => {
        const files = e.target.files;
        setFormData((prevData) => ({
            ...prevData,
            gallery: Array.from(files),
        }));
    };
    const ConfirmSubmit = () => {
        alert("Submitted " + +" " + formData.name + " " + formData.model + " " + formData.year);
    }
    return (
        <>
            <Header />
            <div className='addacar'>
                <div className="header">
                    <h1>Car Valudation</h1>
                </div>
                <div >
                    <form className="froms">
                        <div class="column">
                            <div class="form" id="div1">
                                <label >Car Name :</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

                                <label >Car Model :</label>
                                <input type="text" name="model" id="model" value={formData.model} onChange={handleChange} />
                                <label >Year :</label>
                                <input type="text" name="year" id="year" value={formData.year} onChange={handleChange} />
                                <label >Exterior color :</label>
                                <input type="text" name="color" id="color" value={formData.color} onChange={handleChange} />
                                <label >Body type :</label>
                                <input type="text" name="bodytype" id="bodytype" value={formData.bodytype} onChange={handleChange} />

                                <label >Mileage :</label>
                                <input type="text" name="mileage" id="mileage" value={formData.mileage} onChange={handleChange} />
                                <label >Condition :</label>
                                <input type="text" name="condition" id="condition" value={formData.condition} onChange={handleChange} />
                                <label >VIN :</label>
                                <input type="text" name="vin" id="vin" value={formData.vin} onChange={handleChange} />
                                <label >Stock number :</label>
                                <input type="text" name="stocknumber" id="stocknumber" value={formData.stocknumber} onChange={handleChange} />

                            </div>
                        </div>

                        <div class="column">
                            <div class="form" id="div1">
                                <label >Stock number :</label>
                                <input type="text" name="stocknumber" id="stocknumber" value={formData.stocknumber} onChange={handleChange} />
                                <label >Fuel type: :</label>
                                <input type="text" name="fueltype" id="fueltype" value={formData.fueltype} onChange={handleChange} />

                                <label >Gas mileage :</label>
                                <input type="text" name="gasmileage" id="gasmileage" value={formData.gasmileage} onChange={handleChange} />
                                <label >Fuel tank size :</label>
                                <input type="text" name="fueltanksize" id="fueltanksize" value={formData.fueltanksize} onChange={handleChange} />
                                <label >Transmission :</label>
                                <input type="text" name="transmission" id="transmission" value={formData.transmission} onChange={handleChange} />

                                <label >Engine :</label>
                                <input type="text" name="Engine" id="Engine" value={formData.Engine} onChange={handleChange} />
                                <label >Horsepower :</label>
                                <input type="text" name="Horsepower" id="Horsepower" value={formData.Horsepower} onChange={handleChange} />
                                <label >Doors :</label>
                                <input type="text" name="Doors" id="Doors" value={formData.Doors} onChange={handleChange} />
                                <label >Brand :</label>
                                <input type="text" name="Brand" id="Brand" value={formData.Brand} onChange={handleChange} />

                            </div>
                        </div>
                    </form>
                    <div className="thepredictprice">
                        <h2>The Prediction Price is : $40505 </h2>
                    </div>
                    <div className="submit" >
                        <Button onClick={ConfirmSubmit}>
                            <Link to="/sellmycar">Sell My Car</Link>
                        </Button>
                    </div>


                </div>
            </div>
            <Footer />
        </>

    )
}

export default Carvalucation