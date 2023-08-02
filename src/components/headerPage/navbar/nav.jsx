import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss";

const Nav = () => {
  return (
    <div className="menuIcon nav">
     <ul className='navbar-ul'>
        <li className='navbar-list'>
            <NavLink className="nav-link" to="/../buyPage/buy">Buy</NavLink>
        </li>
        <li className='navbar-list'>
            <NavLink className="nav-link" to="/../sellPage/sell">Sell</NavLink>
        </li>
        <li className='navbar-list'>
            <NavLink className="nav-link" to="/../Blog">Vlog</NavLink>
        </li>
        <li className='navbar-list'>
            <NavLink className="nav-link" to="/../research">Research</NavLink>
        </li>
        <li className='navbar-list'>
            <NavLink className="nav-link" to="/../login">Login/Signup</NavLink>
        </li>
     </ul>
    </div>
  )
}

export default Nav