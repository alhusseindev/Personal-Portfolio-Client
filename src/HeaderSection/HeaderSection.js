import React from 'react';
import './HeaderSection.scss';
import { FaGithub } from "react-icons/all";
import { FaLinkedin } from "react-icons/all";

class HeaderSection extends React.Component{


    render(){
        return(
            <header className="header__section" id="header-section-hero">

                <div className="header__intro">{/** <h1 className="header__hero">Computers <br/> In DNA</h1> */}</div>
                <a href="http://github.com/alhusseindev"><div className="github-icon"><FaGithub className="github-text"/></div></a>
                <a href="https://www.linkedin.com/in/alhussein-eweis/"><div className="linkedin-icon"><FaLinkedin className="linkedin-text" /></div></a>

                {/** <div className="ball" /> */}
            </header>
        );
    }
}


export default HeaderSection;