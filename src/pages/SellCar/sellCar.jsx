import "./sellCar.css"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function updateInputField() {

    const dropdown = document.getElementById('dropdown');

    const purpose = document.getElementById('purpose');


    const selectedValue = dropdown.value;

    purpose.value = selectedValue;

}

document.getElementById('dropdown').addEventListener('change', updateInputField);


function SellCar() {

    return (

        <Tabs
            defaultActiveKey="sellcar"
            id="sellCarForm"
            className="tab"
        >
            <Tab eventKey="details" title="Details">
                <br />

                <div class="column">
                    <div class="form" id="div1">

                        <h3>Sell My Car</h3> <br />
                        <p>Get fair and unbiased price quote for your used car using our second hand car valuation
                            calculator. You can also list, sell and buy your car on CarSeller's portal to sell at the best price.
                            Listing an old car on our portal is absolutely  <br /> <br /> Find out the details of a car </p>

                        <label for="dropdown">Purpose:</label>
                        <input type="text" name="purpose" id="purpose" />
                        <select id="dropdown" name="dropdown" >
                            <option value="Rent">Rent</option>
                            <option value="Personal">Personal</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Model:</label>
                        <input type="text" name="model" id="model" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">BMW</option>
                            <option value="Option 2">TOYOTA</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Year:</label>
                        <input type="text" name="year" id="year" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Latest</option>
                            <option value="Option 2">previous</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Trim:</label>
                        <input type="text" name="trim" id="trim" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Rent</option>
                            <option value="Option 2">Personal</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Transmission:</label>
                        <input type="text" name="trans" id="trans" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Rent</option>
                            <option value="Option 2">Personal</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Location:</label>
                        <input type="text" name="location" id="location" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Dhaka</option>
                            <option value="Option 2">Sylhet</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Zip:</label>
                        <input type="text" name="zip" id="zip" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">3100</option>
                            <option value="Option 2">2800</option>
                        </select>


                        <br /> <br />
                        <label for="dropdown">Miledge:</label>
                        <input type="text" name="mile" id="mile" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">500kmh</option>
                            <option value="Option 2">500kmh+</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Photo:</label>
                        <input type="file" name="img" id="img" />
                    </div>


                    <br /> <br />
                    <div class="form2" id="div2">
                        <br /> <br /> <br /> <br />
                        <br /> <br /> <br /> <br />

                        <label for="dropdown">Color:</label>
                        <input type="text" name="clr" id="clr" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Black</option>
                            <option value="Option 2">white</option>
                        </select>

                        <br /> <br />

                        <label for="dropdown">By:</label>
                        <input type="text" name="zip" id="zip" />
                        <select id="dropdown" name="  dropdown">
                            <option value="Option 1">Gas</option>
                            <option value="Option 2">Petrol</option>
                        </select>


                        <br /> <br />
                        <label for="dropdown">Seat Material:</label>
                        <input type="text" name="seat" id="sm" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Leather</option>
                            <option value="Option 2">hard</option>
                        </select>
                        <br /> <br />
                        <label for="dropdown">Keys:</label>
                        <input type="text" name="key" id="keys" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">1k</option>
                            <option value="Option 2">2</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Tool pack:</label>
                        <input type="text" name="tp" id="tp" />
                        <select id="dropdown" name="  dropdown">
                            <option value="Option 1">Included</option>
                            <option value="Option 2">Excluded</option>
                        </select>


                        <br /> <br />
                        <label for="dropdown">Plate:</label>
                        <input type="text" name="plt" id="plt" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Yes</option>
                            <option value="Option 2">No</option>
                        </select>
                        <br /> <br />
                        <label for="dropdown">Services:</label>
                        <input type="text" name="clr" id="clr" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Times</option>
                            <option value="Option 2">None</option>
                        </select>

                        <br /> <br />
                        <label for="dropdown">Asking Price:</label>
                        <input type="text" name="price" id="price" />
                        <select id="dropdown" name="dropdown">
                            <option value="Option 1">Leather</option>
                            <option value="Option 2">hard</option>
                        </select>




                    </div>


                    <br /><br />

                </div>
            </Tab>

            <Tab eventKey="Add" title="Additional">
                <br />
                <h3>Some additional features you may like</h3>
                <div class="option">
                    <br />

                    <input type="checkbox" name="wheels" id="wheels" />  Leather Seats <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Navigation System <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Blind test monitoring <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Heated seat <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Android auto <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Blutooth <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Camera <br />
                    <input type="checkbox" name="wheels" id="wheels" />  Premium package <br />

                </div>


            </Tab>
        </Tabs>
    );
}
export default SellCar;
