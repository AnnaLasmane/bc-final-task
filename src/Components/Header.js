import { NavLink } from 'react-router-dom';
import Logo from '../Assets/Images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faComments, faUsers, faAddressCard } from '@fortawesome/free-solid-svg-icons'


function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow ">
                <div className="container-fluid">
                <NavLink className="navbar-brand fs-3 nav-link" exact to="/"> <img className="img-fluid w-25" src={Logo} alt="logo" />  </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" exact to="/"> <div>
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" to="/articles"> <div>
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </div>
                                Articles
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" to="/chat"> <div>
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                                Chat</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" exact to="/register"> <div>
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                                Register</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" exact to="/about-us"><div>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </div>
                                About Us</NavLink>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>            
        </div>
    )
}

export default Header