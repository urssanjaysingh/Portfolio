import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="links">
                    <Link to="/hire-me">Hire Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About Me</Link>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/urssanjaysingh"><i className="icon ion-social-linkedin"></i></a>
                    <a href="https://github.com/urssanjaysingh"><i className="icon ion-social-github"></i></a>
                    <a href="https://www.facebook.com/urssanjaysingh"><i className="icon ion-social-facebook"></i></a>
                    <a href="https://www.instagram.com/urssanjaysingh/"><i className="icon ion-social-instagram-outline"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
