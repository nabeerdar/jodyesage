import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'; 

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="header">
                <div className="nav-tabs">
                    <Link to="/music-video" className="tab">Music & Video</Link>
                    <Link to="/store" className="tab">Store</Link>
                    <Link to="/news" className="tab">News</Link>
                    <div className="tab">
                        The Artist <FontAwesomeIcon icon={faCaretDown} />
                        <div className="dropdown-menu">
                            <Link to="/biography" className="dropdown-item">Biography</Link>
                            <Link to="/lyrics" className="dropdown-item">Lyrics</Link>
                        </div>
                    </div>
                </div>
                <div className="social-icons-navbar">
                    <Link to="https://www.instagram.com" className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://www.tiktok.com" className="icon">
                        <FontAwesomeIcon icon={faTiktok} />
                    </Link>
                    <Link to="https://www.youtube.com" className="icon">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    {showMenu ? (
                        <FontAwesomeIcon icon={faTimes} size="1.3x"/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="1.6x"/>
                    )}
                </div>
            </div>

            {showMenu && (
                <div className="responsive-menu">
                    <Link to="/music-video" className="tab1">Music & Video</Link>
                    <Link to="/store" className="tab1">Store</Link>
                    <Link to="/news" className="tab1">News</Link>
                    <div className="tab1" style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1 }}>The Artist</span>
                        <FontAwesomeIcon className="mobile-caret" icon={faCaretDown} />
                        <div className="dropdown-menu">
                            <Link to="/biography" className="dropdown-item tab1-dropdown">Biography</Link>
                            <Link to="/lyrics" className="dropdown-item tab1-dropdown">Lyrics</Link>
                        </div>
                    </div>
                    <div className="social-icons1">
                        <Link to="https://www.instagram.com" className="icon1-navbar">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to="https://www.tiktok.com" className="icon1-navbar">
                            <FontAwesomeIcon icon={faTiktok} />
                        </Link>
                        <Link to="https://www.youtube.com" className="icon1-navbar">
                            <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
