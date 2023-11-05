
import { useEffect, useState } from 'react';
import './ProfileShow.scss';
import axios from 'axios';




const ProfileShow = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint URL
    axios.get('/api/users/:userId') // Use the correct endpoint URL
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <>
      <div className="mainn">
        <div className="logo">
          <h4>TOYOTA</h4>
          <img src="../../../../images/ca7.jpg" alt="Logo" />
        </div>
        <div className="left1">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident sometimes on purpose (injected humour and the like).
          </p>
          <br />
          <div className="left2">
            <p>
              12420 Auto Drive clarksville, MD 21029 <br />
              <a className="address" href="http://www.antwerpentoyota.com">Maps & Directions</a> <br />
              Sales: <a className="cell">(880)12345678</a> <br />
              Services: <a className="cell">(880)123456</a>
            </p>
          </div>
        </div>
        <div className="right">
          <p>Today 9.00 AM-7.00 PM(Closed Now) <br /></p>
          <p className="link">Show Business Hour</p>
        </div>
      </div>
      <br />
      <div className="deals">
        <h3>Best Deals First</h3>
        <div className="gallery">
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>

        </div>
        <div className="gallery2">
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>
          <div className="img1">
            <div className="card">
              <button className="btn">Start Purchasing</button>
              <img src="../../../../images/ca6.jpg" alt="Car" />
              <h3>2015 Mercedes-Benz Sprinter Cab</h3>
              <p>$25,500 <br />
                163,383 mi <br /> Clarksville, MD
              </p>
              <a className="cell2">(880)12345678</a> <br />
              <button className="btn2">Request Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileShow;