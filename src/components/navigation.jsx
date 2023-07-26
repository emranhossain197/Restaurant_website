// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/images/logo.png"
import ButtonImage from "../assets/images/Group.png"

import { useState } from "react";

const Nagivation = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <Nav.Link exact to="/" className="nav-logo">
                        <img src={Logo} alt="Logo Images" />
                    </Nav.Link>
                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        <ul>
                            <li className="nav-item">
                                <Nav.Link
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    About
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Menu
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link
                                    exact
                                    to="/blog"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Venue
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link
                                    exact
                                    to="/contact"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Events
                                </Nav.Link>
                            </li>
                        </ul>
                        <div className='menu_btn'>
                            <button>Book Now</button>
                            <img src={ButtonImage} alt="" />
                        </div>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    )
}

export default Nagivation;

