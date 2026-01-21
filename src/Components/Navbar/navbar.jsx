import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo1.png";
import logoHover from "./Images/logo2.png";
import "./navbar.css";

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    return (
       <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark adhishrihaan-navbar position-absolute">
            <div className="container-fluid">
                
                <Link className="navbar-brand me-4" to="/">
                    <img src={isHovered ? logoHover : logo} 
                        alt="Adhishrihaan" 
                        className="navbar-logo"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} /> 
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/grant">The Shrihaan Sahyog Grant</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/initiatives">Initiatives</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/impact">Our Impact</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-link-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/events/upcoming">Upcoming Events</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/events/past">Past Events</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link nav-link-custom" to="/news">News & Media</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle nav-link-custom" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Get Involved
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="/volunteer">Volunteer</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/donate">Donate</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Navbar;