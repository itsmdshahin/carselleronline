import { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import './Login.scss';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Header from '../headerPage/header';
import Footer from '../Footer/Footer';

const Login = () => {
  const [email, setemail] = useState('');

  const ConfirmSubmit = () => {
    alert("Submitted ");
  };

  return (
    <>
      <Header />
      <div className="Login">
        <div className="containerdiv">
          <div className="logo">
            <img width="300px" src={LOGO} alt='img' />
          </div>


          <form className="froms">
            <div className="column">
              <div className="form" id="div1">
                <label>Email :</label>
                <input type="email" name="email" id="email" />
                <label>Password :</label>
                <input type="password" name="password" id="password" />
              </div>
            </div>
          </form>
        </div>
        <div className="Loginurl text-center pt-2">
          <p className="text-light pt-2">Don't Have An Account?</p> <Link to="../Register">Register now</Link>
        </div>

        <div className="submit" onClick={ConfirmSubmit}>
          <Button>Log-In</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
