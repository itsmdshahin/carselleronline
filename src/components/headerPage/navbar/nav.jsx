
import { NavLink, useNavigate } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import "./nav.scss";




const Nav = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const nagivate = useNavigate();
    const handleLogout = () => {
        console.log("LOGIN-IN");
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('loglevel');
        sessionStorage.removeItem();

        nagivate('/');
    }

    const onSubmit = () => {

        document.getElementsByClassName("menu-toggle")[0].addEventListener("click", () => {
            const navBar = document.querySelector(".navbar-ul");
            navBar.classList.toggle("active");
        });
    }
    return (
        <div className="menuIcon nav">
            <ul className='navbar-ul'>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../">Home</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../Brandshow">Brand Car</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../listing">Buy Old</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../sellmycar">Sell</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../Blog">Blog</NavLink>
                </li>
                <li className='navbar-list'>
                    <NavLink className="nav-link" to="/../events">Events</NavLink>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className="navbar-list">
                            <NavLink className="nav-link" to="/profile">
                                Profile
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <NavLink className="nav-link" onClick={handleLogout}>
                                LogOut
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <div className="logoutcode">
                        <li className="navbar-list">
                            <NavLink className="nav-link" to="/../login">
                                Login/Signup
                            </NavLink>
                        </li>
                    </div>
                )}

            </ul>

            <div class="menu-toggle" onClick={onSubmit}><FaAlignJustify /></div>

        </div>
    )
}

export default Nav;