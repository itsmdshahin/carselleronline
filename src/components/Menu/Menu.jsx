import { Link } from 'react-router-dom'
import './menu.scss'
import { faAdd, faCar, faCog, faFile, faHome, faMoneyBill, faUser, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu() {
  return (
    <div className="menu">
      <div className="item">
        <spain className="title">Main</spain>
        <Link to="/admin" className='listitem'>
          <FontAwesomeIcon icon={faHome} className='icon' />
          <span>Home Page</span>
        </Link>
        <Link to="/admin/Profile" className='listitem'>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <span>Profile</span>
        </Link>
      </div>
      <div className="item">
        <spain className="title">User info</spain>
        <Link to="/admin/Users" className='listitem'>
          <FontAwesomeIcon icon={faUsersCog} className='icon' />
          <span>Users</span>
        </Link>
        <Link to="/admin/Transaction" className='listitem'>
          <FontAwesomeIcon icon={faMoneyBill} className='icon' />
          <span>Transaction</span>
        </Link>
        <Link to="/admin/allcar" className='listitem'>
          <FontAwesomeIcon icon={faCar} className='icon' />
          <span>All Car</span>
        </Link>
      </div>
      <div className="item">
        <spain className="title">Admin info</spain>
        <Link to="/admin/addacar" className='listitem'>
          <FontAwesomeIcon icon={faAdd} className='icon' />
          <span>Add a Car</span>
        </Link>
        <Link to="/admin/showallcars" className='listitem'>
          <FontAwesomeIcon icon={faFile} className='icon' />
          <span>Show all Cars</span>
        </Link>
        <Link to="/admin/Setting" className='listitem'>
          <FontAwesomeIcon icon={faCog} className='icon' />
          <span>Setting</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu