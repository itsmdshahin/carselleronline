import { faBell, faCog, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PROFILE from '../../assets/profile.png';
import LOGO from '../../assets/carlogo.png';


function Navbar() {
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
          <FontAwesomeIcon icon={faCog} className='icon' />
        </div>

        {/* Notification */}
        {/* Message Icon */}
        {/* Setting */}
      </div>
    </div>
  )
}

export default Navbar