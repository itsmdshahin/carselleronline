import React from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import './Login.scss';
import LOGO from '../../assets/logo.png';

const Login = () => {
  const ConfirmSubmit = () => {
    alert("Submitted ");
  };

  return (
    <div className="Login">
      <div className="containerdiv">
        <div className="logo">
          <img width="300px" src={LOGO} alt='img' />
        </div>

        <Tabs
           defaultActiveKey="profile"
           id="fill-tab-example"
           className="mb-3"
           fill
        >
          <Tab eventKey="login" title="Login">
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
          </Tab>

          <Tab eventKey="register" title="Register">
            <form className="froms">
              <div className="column">
                <div className="form" id="div2">
                  <label>Email :</label>
                  <input type="email" name="email" id="email" />
                  <label>Password :</label>
                  <input type="password" name="password" id="password" />
                </div>
              </div>
            </form>
          </Tab>
        </Tabs>
      </div>
      <div className="submit" onClick={ConfirmSubmit}>
        <Button>Log-In</Button>
      </div>
    </div>
  );
};

export default Login;
