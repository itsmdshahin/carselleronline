import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.scss";

const Nav = ({ isLoggedIn, handleLogout }) => {
    const [showBuyDropdown, setShowBuyDropdown] = useState(false);

    const toggleBuyDropdown = () => {
        setShowBuyDropdown(!showBuyDropdown);
    }
    return (
        <div className="menuIcon nav">
            <ul className='navbar-ul'>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../listing">Buy</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../sellmycar">Sell</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../Blog">Vlog</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../research">Research</NavLink>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className="navbar-list">
                            <NavLink className="nav-link" to="/../admin/profile">
                                Profile
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <li className="navbar-list">
                        <NavLink className="nav-link" to="/../login">
                            Login/Signup
                        </NavLink>
                    </li>
                )}
                {/* <li className='navbar-list'>
            <NavLink className="nav-link" to="/../login">Login/Signup</NavLink>
        </li> */}
            </ul>
        </div>
    )
}

export default Nav