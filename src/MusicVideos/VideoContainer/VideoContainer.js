import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './VideoContainer.css';

import thumbnail1 from '../../images/Cover/cover_1.jpg';
import thumbnail2 from  '../../images/Cover/cover_2.jpg'; 

const VideoContainer = () => {
  const videoData = [
    { url: 'https://www.youtube.com/embed/awT6DEPvAqg', title: 'Odimma', thumbnail: thumbnail1 },
    { url: 'https://www.youtube.com/embed/Ueu9d7C8Fm8', title: 'Silver Starseed', thumbnail: thumbnail2 },
    // Add more video objects as needed
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videoData.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videoData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleRadioChange = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="video-container1">
      <div className="video-navigation">
        <button className="nav-arrow-video-section left-arrow-video-section" onClick={handlePrevClick}>❮</button>
        <div className="video-thumbnail">
          <iframe
            width="100%"
            height="100%"
            src={videoData[currentVideoIndex].url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={videoData[currentVideoIndex].title}
          ></iframe>
          <div className="video-radio-buttons-xx">
            {videoData.map((_, index) => (
              <label key={index} className="radio-label-xx">
                <input
                  type="radio"
                  name="video-selector"
                  checked={index === currentVideoIndex}
                  onChange={() => handleRadioChange(index)}
                  className="radio-input-xx"
                />
                <span className="radio-button1-xx"></span>
              </label>
            ))}
          </div>
        </div>
        <button className="nav-arrow-video-section right-arrow-video-section" onClick={handleNextClick}>❯</button>
      </div>

      <div className="video-info">
        <p>latest video</p>
        <h2>{videoData[currentVideoIndex].title}</h2>
      </div>

      <div className='background-view-text1'>
        <div className="background-text1">VIDEO</div>
        <div>
          <button className="view-all1" onClick={() => navigate('/videodetails')}>VIEW ALL━</button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
