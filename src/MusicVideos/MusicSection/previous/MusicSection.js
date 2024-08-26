import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MusicSection.css';
import cover1 from '../../images/Cover/cover_1.jpg';
import cover2 from '../../images/Cover/cover_2.jpg';
import cover3 from '../../images/Cover/cover_3.jpg';
import cover4 from '../../images/Cover/cover_4.jpg';
import cover5 from '../../images/Cover/cover_5.jpg';


function MusicSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const moviesCollection = [
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
      action: 'LISTEN NOW'
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
        action: 'LISTEN NOW'
    },
    {
        image: cover5,
        author: "JODYE SAGE",
        releaseDate: 'Mar 29th 2024',
        title: 'Odinma',
        action: 'STREAM / DOWNLOAD'
    }
  ];

  // Handlers to navigate through the carousel
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % moviesCollection.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + moviesCollection.length) % moviesCollection.length);
  };

  // Get the current album details
  const currentAlbum = moviesCollection[currentIndex];

  return (
    <div className="main-page">
      <div className="carousel-container">
        <img src={currentAlbum.image} alt="Music Cover" className="music-cover" />
        <button className="nav-button left" onClick={handlePrevClick}>{"<"}</button>
        <button className="nav-button right" onClick={handleNextClick}>{">"}</button>
        <div className="radio-buttons">
          {moviesCollection.map((_, index) => (
            <span key={index} className={`radio-button ${index === currentIndex ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
      <div className="album-details">
        <p className="release-date">{currentAlbum.releaseDate}</p>
        <h1 className="album-title">{currentAlbum.title}</h1>
        <p className="album-action">{currentAlbum.action}</p>
      </div>
      <button className="view-all" onClick={() => navigate('/details')}>VIEW ALL━</button>
      <div className="background-section">
        <h1 className="background-text">MUSIC</h1>
      </div>
    </div>
  );
}

export default MusicSection;
