import React from 'react';
import './Footer.scss';

export default function Footer(){
    return(
        <footer className="web-footer">
            <div>
                <h1 className="lower-logo">Alhussein</h1>
            </div>
            <div>
                <ul className="footer-list">
                    <li className="footer-links"><a href="#header-section-hero" className="footer-single-link">Home</a></li>
                    <li className="footer-links"><a href="https://github.com/alhusseindev"
                                                    className="footer-single-link">Projects</a></li>
                    <li className="footer-links">
                        <a href="https://drive.google.com/file/d/1xPR4ghXwoYDYXGjuiPFJd0aIDvI60JqK/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="footer-single-link">Resume</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}