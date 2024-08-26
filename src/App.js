import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./MusicVideos/Home"
import MusicCollection from "./MusicVideos/MusicSection/MusicCollection/MusicCollection"
import  Biography from "./TheArtist/Biography"
import Balance from "./TheArtist/Lyrics/Balance"
import VideoCollection from "./MusicVideos/VideoContainer/VideoCollection/VideoCollection";



function App() {
  return (
    
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jodyesage" element={<Home />} />
          <Route path="/details" element={<MusicCollection />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/lyrics/balance" element={<Balance />} />
          <Route path="/videodetails" element={<VideoCollection />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
