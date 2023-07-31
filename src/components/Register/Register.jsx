import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './register.scss';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setemail] = useState('');

    const ConfirmSubmit = () => {
        alert("Submitted ");
    };

    return (
        <div className="register">
            <div className="containerdiv">
                <div className="logo">
                    <img width="300px" src={LOGO} alt='img' />
                </div>


                <form className="froms">
                    <div className="column">
                        <div className="form" id="div1">

                            <label>Full Name :</label>
                            <input type="text" name="fullname" id="fullname" />
                            <label>Email :</label>
                            <input type="email" name="email" id="email" />

                            <label>Password :</label>
                            <input type="password" name="password" id="password" />
                            <label>Confirm Password :</label>
                            <input type="password" name="con-password" id="con-password" />

                            <label>Mobile :</label>
                            <input type="num" name="mobile" id="mobile" />
                        </div>
                    </div>
                </form> 
            </div>
            <div className="Loginurl text-center pt-2">
                <p className="text-light pt-2">Already Have An Account?</p> <Link to="../../Login">Log-in</Link>
            </div>
            <div className="submit" onClick={ConfirmSubmit}>
                <Button>Register</Button>
            </div>
        </div>
    );
};

export default Register;
