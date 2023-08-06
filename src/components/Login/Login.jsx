import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Login.scss';
import LOGO from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Header from '../headerPage/header';
import Footer from '../Footer/Footer'; 


const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  


  const handleLogin = async () => { 
    

    console.log(email+" "+password);
    const data = {
      email:email,
      password:password
    };
    console.log(email+" "+password);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      console.log("this is a res "+ response.ok);
      
      if (response.status === 200) {
        // Login successful
        const data = await response.json();
        
        const token = data.token; // Assuming the server returns the JWT as 'token'
        localStorage.setItem('jwtToken', token); // Store the JWT in local storage
        window.localStorage.setItem("token", data.data);
        // location.href('../../pages/Home/Index.jsx');
        // window.location.href("/");
        // alert('Login Successful!');
        if(email === "admin" ){
          window.open("/admin");
        }else{
          window.open("/");
        }
        
        // Redirect to Admin.jsx if email and password are "admin"
        
      } else {
        // Login failed
        alert('Login failed!');
      }

      
    } catch (error) {
      console.error('Error during login:', error);
    }
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
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <label>Password :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}

                />
              </div>
            </div>
          </form>
        </div>
        <div className="Loginurl text-center pt-2">
          <p className="text-light pt-2">Don't Have An Account?</p> <Link to="../Register">Register now</Link>
        </div>

        <div className="submit" >
          <Button onClick={handleLogin} >Log-In</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
