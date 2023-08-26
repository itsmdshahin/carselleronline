 
import { NavLink, useNavigate } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import "./nav.scss";




const Nav = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const nagivate = useNavigate();
    const handleLogout = () => {
        console.log("LOGIN-IN");
        localStorage.removeItem('token');
        nagivate('/');
    }
    
const onSubmit = () =>{
    
document.getElementsByClassName("menu-toggle")[0].addEventListener("click", () => {
    const navBar = document.querySelector(".navbar-ul");
    navBar.classList.toggle("active");
});
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
                            <NavLink className="nav-link" to="/profile">
                                Profile
                            </NavLink>
                        </li>
                        <li className="navbar-list">
                            <NavLink className="nav-link" to="/login" onClick={handleLogout}>
                                LogOut
                            </NavLink>
                            {/* <button onClick={handleLogout}>Logout</button> */}
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

            <div class="menu-toggle" onClick={onSubmit}><FaAlignJustify/></div>
            
        </div>
    )
}

export default Nav