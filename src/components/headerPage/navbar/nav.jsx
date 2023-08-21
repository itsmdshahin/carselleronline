 
import { NavLink, useNavigate } from 'react-router-dom'
import "./nav.scss";

const Nav = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const nagivate = useNavigate();
    const handleLogout = () => {
        console.log("LOGIN-IN");
        localStorage.removeItem('token');
        nagivate('/');
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
        </div>
    )
}

export default Nav