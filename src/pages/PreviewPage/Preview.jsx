import './preview.scss'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../components/headerPage/header';
import CarPreview from './CarPreview/CarPreview';
import Footer from '../../components/Footer/Footer';

const Preview = () => {

    

    return (
        <>
            <Header />
            <div className="preview">
                <div className="leftsidebar">
                    <div className="name">
                        <h1>2023 Mercedes-Benz CLA 250</h1>
                    </div>
                    <h3>Vehicle Highlights:</h3>
                    <div className="viewhighlight">
                        <p>36 Highway MPG and 25 City MPG, Voice Activated Dual Zone Front Automatic Air Conditioning,
                            Trunk Rear Cargo Access for added convenience, 7-Speed Dual Clutch with shift paddles for
                            smooth driving experience</p>
                    </div>
                    <hr />
                    <h3>Vehicle Feature:</h3>
                    <div className="vehicalsfeature">

                        <div className="feature1">
                            <span>Price: $45000</span>
                            <span>Year: 2022</span>
                            <span>Trim: 250</span>
                        </div>
                        <div className="feature1">
                            <span>Transmission: Automatic</span>
                            <span>Mileage: 2,745 miles</span>
                            <span>Interior color: Tan</span>
                        </div>
                        <div className="feature1">
                            <span>Fuel type: Gasoline </span>
                            <span>Exterior color: White</span>
                            <span>Drivetrain: Front-Whee</span>
                        </div>
                    </div>
                    <hr />
                    <h3>Vehicle details:</h3>
                    <Accordion className='cardetails' defaultActiveKey="0">

                        <div className='cardes1'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Exterior </Accordion.Header>
                                <Accordion.Body>
                                    <span> ➱ Remote Panic Alarm </span><br></br>
                                    <span>  ➱  Security System </span> <br></br>
                                    <span> ➱  Rain Sensing Wipers </span> <br></br>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Interior</Accordion.Header>
                                <Accordion.Body>
                                    <span>➱  Siriusxm Satellite Radio </span><br></br>
                                    <span> ➱  Rain Sensing Wipers</span><br></br>
                                    <span>➱  Trip Computer </span> <br></br>
                                    <span> ➱  Exterior Parking Camera Rear </span> <br></br>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>

                        <div className='cardes1'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Mechanical </Accordion.Header>
                                <Accordion.Body>
                                    <span> ➱ Digital Signal Processor</span> <br></br>
                                    <span>  ➱  Electronic Parking Brake</span> <br></br>
                                    <span> ➱ Hill Start Assist   </span> <br></br>
                                    <span> ➱  Trip Odometer      </span> <br></br>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Technology </Accordion.Header>
                                <Accordion.Body>
                                    <span> ➱ Siriusxm Satellite Radio </span> <br></br>
                                    <span>  ➱  Trip Computer</span> <br></br>
                                    <span> ➱Exterior Parking Camera Rear    </span> <br></br>
                                    <span> ➱  Rain Sensing Wipers     </span> <br></br>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='cardes1'>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Seller notes </Accordion.Header>
                                <Accordion.Body>
                                    ➱Scores 36 Highway MPG and 25 City MPG! This
                                    Mercedes-Benz CLA delivers a Intercooled
                                    Turbo Premium Unleaded I-4 2.0 L/121
                                    engine powering this Automatic
                                    transmission. Wheels: 18' Multi-Spoke Alloy,
                                    Voice Activated Dual Zone Front Automatic Air Conditioning, Urethane Gear Shifter Material.
                                    This Mercedes-Benz CLA
                                    Features the Following Options Turn-By-Turn Navigation Directions, Trunk Rear Cargo Access, Trip Computer,
                                    Transmission: 7-Speed Dual Clutch -inc: shift paddles, Transmission w/Driver Selectable Mode and Sequential
                                    Shift Control w/Steering Wheel Controls, Tracker System, Tires: All-Season, Tires: 225/45R18, Tire Specific Low Tire Pressure Warning,
                                    Systems Monitor. Visit Us Today For a must-own Mercedes-Benz CLA come see us at Mercedes-Benz of Walnut Creek, 1301 Parkside Dr,
                                    Walnut Creek, CA 94596. Just minutes away! Mercedes-Benz of Walnut Creek Market Price Guarantee Our commitment to you is the
                                    price you see here is guaranteed to be at or below the current market value for this vehicle based on year, miles, equipment and availability.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>

                    <hr />
                </div>
                <div className="rightsliderbar">
                    <CarPreview />
                </div>
                
                <div className='clr'></div>
            </div>
            <div className='endgame'>
                <Footer />
            </div>
        </>
    )
}

export default Preview