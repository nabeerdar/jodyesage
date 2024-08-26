import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MusicSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import cover1 from '../../images/Cover/cover_1.jpg';
import cover2 from '../../images/Cover/cover_2.jpg';
import cover3 from '../../images/Cover/cover_3.jpg';
import cover4 from '../../images/Cover/cover_4.jpg';
import cover5 from '../../images/Cover/cover_5.jpg';
import musicImage from '../../images/cursors/music_cursor_1.png';
import musicImage2 from '../../images/cursors/music_cursor_2.png';

function MusicSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
   const [isHovered, setIsHovered] = useState(false);
 const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ 
        x: e.clientX, 
        y: e.clientY + window.scrollY // Adjusting for scroll position
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);

  const moviesCollection = [
    {
      image: cover5,
      author: "JODYE SAGE",
      releaseDate: 'Mar 29th 2024',
      title: 'Odimma',
      action: 'STREAM / DOWNLOAD'
    },
    {
      
      image: cover1,
      author: "JODYE SAGE",
      releaseDate: 'Dec 23rd 2021',
      title: 'Tiger',
      action: 'STREAM / DOWNLOAD'
    },
    {
      image: cover2,
      author: "JODYE SAGE",
      releaseDate: 'April 08th 2022',
      title: 'Dancing In The Rain',
      action: 'STREAM / DOWNLOAD'
    },
    {
      image: cover3,
      author: "JODYE SAGE",
      releaseDate: 'Dec 23rd 2023',
      title: 'Balance',
      action: 'STREAM / DOWNLOAD'
    },
    {
      image: cover4,
      author: "JODYE SAGE",
      releaseDate: 'Feb 22nd 2022',
      title: 'Indigo Blue',
      action: 'STREAM / DOWNLOAD'
    }
    
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % moviesCollection.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + moviesCollection.length) % moviesCollection.length);
  };

  const currentAlbum = moviesCollection[currentIndex];

  return (
    <>
      <div className="carousel-jar">
        <div className="arrow-section">
          <div className="left-arrow-music">
            <button className="nav-button" onClick={handlePrevClick}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="arrow-section-extra-space">--</div>
        </div>
        <div className="music-and-details-container">
          <div className="music-container">
            <img src={currentAlbum.image} alt="Music Cover" className="music-cover" />
          </div>
          <div className="music-details-container">
            <div className="album-details">
              <div className="release-date">{currentAlbum.releaseDate}</div>
              <div className="album-title">{currentAlbum.title}</div>
              <div 
                className="album-action" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>STREAM</span> / <span>DOWNLOAD</span>
              </div>
              {isHovered && (
                <img 
                  src={musicImage} 
                  alt="Custom Cursor" 
                  className="custom-cursor" 
                  style={{ top: cursorPosition.y, left: cursorPosition.x }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="arrow-section-music">
          <div className="right-arrow-music">
            <button className="nav-button" onClick={handleNextClick}>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="arrow-section-extra-space">--</div>
        </div>
      </div>
      <div className='background-view-text1 background-view-text-music-section'>
        <div className="background-text1">MUSIC</div>


        <div>
          <div>
            <button className="view-all1" onClick={() => navigate('/details')}>VIEW ALL━</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicSection;
