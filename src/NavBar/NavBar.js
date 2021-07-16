import React, { useState } from 'react';
import './NavBar.scss';

import Curtain from "../Curtain/Curtain";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NavBar(){

    const [show, setShow] = useState(false);


    return(
        <nav className="nav__bar">
            <div className="logo">Alhussein</div>
            <div className="menu__icon" onClick={() => {setShow(!show)} }>
                { show ? <React.Fragment> <FontAwesomeIcon icon={faTimes} color="floralwhite" size="sm" /> <Curtain/> </React.Fragment> : <FontAwesomeIcon icon={faBars} color="floralwhite" size="sm" /> }
            </div>

        </nav>
    );

}


export default NavBar;