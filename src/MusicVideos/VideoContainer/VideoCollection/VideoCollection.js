import React from 'react';
import './VideoCollection.css';
import thumbnail1 from '../../../images/Cover/cover_1.jpg';
import thumbnail2 from '../../../images/Cover/cover_2.jpg';
import thumbnail3 from '../../../images/Cover/cover_3.jpg';
import thumbnail4 from '../../../images/Cover/cover_3.jpg';
import thumbnail5 from '../../../images/Cover/cover_5.jpg';

function VideoCollection() {
  return (
    <div className="video-detailed-view">
      <h1>Video Albums</h1>
      <div className="video-grid">
        <img src={thumbnail1} alt="Video 1" className="video-thumbnail" />
        <img src={thumbnail2} alt="Video 2" className="video-thumbnail" />
        <img src={thumbnail3} alt="Video 3" className="video-thumbnail" />
        <img src={thumbnail4} alt="Video 4" className="video-thumbnail" />
        <img src={thumbnail5} alt="Video 5" className="video-thumbnail" />
      </div>
    </div>
  );
}

export default VideoCollection;

