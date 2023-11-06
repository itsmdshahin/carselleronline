
import { FaAngleDown, FaRegCheckCircle } from "react-icons/fa";
import "./profilee.scss";
import axios from 'axios';

import { useEffect, useState } from "react";


const Profilee = () => {

    const [userProfile, setUserProfile] = useState({});
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');

    console.log(userEmail+" "+userId);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/profile/${userId}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            });
    
            if (response.status === 200) {
              const data = response.data;
              setUserProfile(data);
            } else {
              console.error('Error fetching profile data:', response.status);
            }
          } catch (error) {
            console.error('Error during profile data fetch:', error);
          }
        };
    
        fetchData();
    }, [token, userId]);

    
    return (
        <>

            <div className='profilee'>

                <div className='firstdiv'>
                    <h1> 
                        {userProfile.name} <FaRegCheckCircle className='logo1' />
                    </h1>
                </div>

                <div className="seconddiv">
                    <div className='secondone'>
                        <img src="../../../../images/ca7.jpg" alt="Logo" />
                       <div className="editbtn">
                        <button className="edit">EDIT</button>
                       </div>
                    </div>

                    <div className='secondtwo'>
                        <p className="email">{userProfile.email}</p>

                        <p className="email">{userProfile.email}</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident sometimes on purpose (injected humour and the like).</p>

                        <div className='secondtwoone'>

                            <p className='one'>   12420 Auto Drive clarksville, MD 21029  </p>

                            <a className="two" href="http://www.antwerpentoyota.com">Maps & Directions</a>

                            <p className='three'> Sales: <a className="cell">(880)12345678</a> </p>
                            <p className='three'> Services: <a className="cell">(880)123456</a> </p>

                        </div>

                    </div>

                    <div className='secondthree'>
                        <h4 className='secondthreeone'>Today 9.00 AM-7.00 PM (Closed Now)</h4>

                        <h3 className='secondthreetwo'>Show business hours</h3>
                    </div>

                </div>

                <div className='thirddiv'>
                    <h2 className='thirddivh3'>Best Deals First <a href=""><FaAngleDown className='logo' /></a></h2>


                    <div className='thirdone'>
                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="thirdtwo">
                            <img src="../../../../images/ca6.jpg" alt="Car" className='thirdimg' />
                            <div className="thirdthree">
                                <h3>2015 Marcedes-Benz Sprinter Cab</h3>

                                <div className='thirdfour'>
                                    <div className='thirdfourone'>
                                        <p className='thirdp'>$25,500</p>
                                        <p className='thirdp'>163,383 mile</p>
                                        <p className='thirdp'>Clarksville,MD</p>
                                        <p className='thirdpp'>(880)1234567</p>
                                    </div>

                                    <div className='thirdfourtwo'>
                                        <p>$9,730 below market</p>
                                    </div>
                                </div>

                                <div className='thirdfive'>
                                    <div className='thirdfiveone'>
                                        <button className="btn2">Request Info</button>
                                    </div>
                                    <div className='thirdfiveone'>
                                        <button className="btn">Start Purchasing</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>







                </div>

            </div>
        </>
    )
}

export default Profilee