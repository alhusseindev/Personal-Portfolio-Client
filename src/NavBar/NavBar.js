import React, { useState } from 'react';
import './NavBar.scss';

import Curtain from "../Curtain/Curtain";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NavBar(){

    //const [show, setShow] = useState(false);

    /** const showCurtain = () => {
        setShow(!show);
    } */


    return(
        <nav className="nav__bar">
            <div className="logo">Alhussein</div>
            <div className="menu__icon">
                {/** { show ? <FontAwesomeIcon icon={faTimes} color="floralwhite" size="lg" /> : <FontAwesomeIcon icon={faBars} color="floralwhite" size="lg" /> } */}
                <ul className="header-list">
                    <li className="header-points"><a className="header__links" href="https://drive.google.com/file/d/1VP45Mv562prNOOmL1qpzcKqWSKSAN_a8/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                    <li className="header-points"><a className="header__links" href="http://github.com/alhusseindev" target="_blank" rel="noreferrer">Projects</a></li>
                    <li className="header-points"><a className="header__links" href="#contact-inquiry-section">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );

}


export default NavBar;
