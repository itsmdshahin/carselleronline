import { faBell, faCog, faEnvelope, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PROFILE from '../../assets/profile.png';
import LOGO from '../../assets/carlogo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const nagivate = useNavigate();
  return (
    <div className="navbar">
      <div className='logo'>
        <img width="100px" src={LOGO} alt='LOGO' />
        <h2>Admin</h2>
      </div>
      <div className='icons'>
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} className='icon' />
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faBell} className='icon' />
          <span>1</span>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
        </div>

        <div className="icon">
          <img src={PROFILE} alt="Profile" />
          {/* <FontAwesomeIcon icon={faUser} className='icon' /> */}
        </div>
        <div className="icon">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className='icon'
            onClick={() => {
              console.log("logout");
              localStorage.removeItem('token');
              nagivate('/');
            }}
          />
        </div>

        {/* Notification */}
        {/* Message Icon */}
        {/* Setting */}
      </div>
    </div>
  )
}

export default Navbar