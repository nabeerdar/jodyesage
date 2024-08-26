import React from 'react';
import NavBar from './NavBar/NavBar';
import MusicSection from "../MusicVideos/MusicSection/MusicSection"
import VideoContainer from "../MusicVideos/VideoContainer/VideoContainer";
import Footer from "../Footer/Footer";
import DisplaySection from './DisplaySection/DisplaySection';

const Home = () => {
    return (
        <>
            <NavBar />
            <DisplaySection />
            <MusicSection/>
            <VideoContainer />
            <Footer />
        </>
    );
};

export default Home;
