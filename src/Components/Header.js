import { NavLink } from 'react-router-dom';
import Logo from '../Assets/Images/logo.jpeg';



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
                            <NavLink className="nav-link text-center mx-3" exact to="/"> 
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" to="/articles"> 
                                Articles
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" to="/chat"> 
                                Chat</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" exact to="/register"> 
                                Register</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-center mx-3" exact to="/about-us">
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