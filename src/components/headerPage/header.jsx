import React from 'react'
import { NavLink } from 'react-bootstrap'
import Nav from './navbar/nav'
import "./header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <div className="mainheader">
      <Link to="/../">
      <img src="/images/mainlogo.png" alt="" className='logo' />
      </Link>
      <Nav/>
   
    </div>

  )
}

export default Header