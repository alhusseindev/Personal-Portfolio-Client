import React  from 'react';
import './Curtain.scss';


function Curtain(){

    return(
        <>
            <div className="curtain__div">
                <ul className="menu__items">
                    <li><a href="http://github.com/alhusseindev" target="_blank" rel="noreferrer" className="nav-links">Projects</a></li>
                    <li><a href="https://drive.google.com/file/d/1xPR4ghXwoYDYXGjuiPFJd0aIDvI60JqK/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-links">Resume</a></li>
                    {/** There is a problem here */}
                    <li><a href="#contact-inquiry-section" className="nav-links">Contact</a></li>
                </ul>
            </div>

        </>
    );
}

export default Curtain;