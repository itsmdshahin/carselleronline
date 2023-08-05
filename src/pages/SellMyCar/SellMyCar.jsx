import { Button } from 'react-bootstrap';
import Header from '../../components/headerPage/header';
import Footer from '../../components/Footer/Footer';
import LOGO from '../../assets/logo.png';
import './sellmycar.scss';
import { Link } from 'react-router-dom';

const SellMyCar = () => {
    return (
        <>
            <Header />
            <div className="sellmycar">

                <div className="leftsidefrom">
                    <label>Full Name :</label>
                    <input type="text" name="fullname" id="fullname" />

                </div>
                <div className="seperater">|</div>
                <div className="rightsidefrom">
                    <label>Full Name :</label>
                    <input type="text" name="fullname" id="fullname" />

                </div>

                <div className="submitfrom">
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellMyCar