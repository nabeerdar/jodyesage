import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                Justin Akagha
            </div>
            <div className="footer-item">
                <div className="social-icons">
                    <Link to="https://www.instagram.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://www.tiktok.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </Link>
                    <Link to="https://www.youtube.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
            </div>
            <div className="footer-item policies">
                <span className="sub-policy">
                <   Link to="/about" className="policy">About Justin</Link>
                </span>
                <span className="sub-policy">
                    <Link to="/help" className="policy">Help</Link>
                </span>
                <span className="sub-policy">
                    <Link to="/terms-of-use" className="policy">Terms Of Use</Link>
                </span>
                <span className="sub-policy">
                    <Link to="/privacy-policy" className="policy">Privacy Policy</Link>
                </span>
                <span className="sub-policy">
                    <Link to="/do-not-sell" className="policy">Do Not Sell My Information</Link>
                </span>
                <span className="sub-policy">
                    <Link to="/buy-tickets" className="policy">Buy Tickets</Link>
                </span>
            </div>
            <div className="footer-item copyright">
                &copy; 2024 Justin Akagha. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;
