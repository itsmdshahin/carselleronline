import { useState } from 'react';
import './Login.scss';
import LOGO from '../../assets/logo.png';
import Header from '../headerPage/header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:5000/forgot-password', {email})
      .then(res => {
          if(res.data.Status === "Success") {
              navigate('/login')
             
          }
      }).catch(err => console.log(err))
  };

  return (
    <>
      <Header />
      <div className="Login">
      {/* <h1>Forgot Password</h1> */}
        <div className="containerdiv">
        
          <div className="logo">
            <img width="300px" src={LOGO} alt='img' />
          </div>
         
          <form className="froms">
            <div className="column">
              <div className="form" id="div1">
              
                <label>Email :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
              </div>
            </div>
          </form>
        </div>
        <div className="submit" >
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;