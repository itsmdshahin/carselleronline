import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './register.scss';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Header from '../headerPage/header';
import Footer from '../Footer/Footer';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [mobile, setMobile] = useState('');


  

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, conpassword, mobile }),
      });

      if (response.ok) {
        // Registration successful
        alert('Registration successful!');
      } else {
        // Registration failed
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    // alert(`Submitted: ${name} ${email} ${password} ${mobile}`);
  };

  return (
    <>
      <Header />
      <div className="register">
        <div className="containerdiv">
          <div className="logo">
            <img width="300px" src={LOGO} alt="img" />
          </div>

          <form className="froms">
            <div className="column">
              <div className="form" id="div1">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="con-password"
                  id="con-password"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />

                <label>Mobile:</label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="Loginurl text-center pt-2">
          <p className="text-light pt-2">Already Have An Account?</p>{' '}
          <Link to="../../Login">Log-in</Link>
        </div>
        <div className="submit" onClick={handleRegister}>
          <Button>Register</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
