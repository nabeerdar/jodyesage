import cameraGif from '../../GIFs/camera_gif.gif'; // Import the GIF
import './DisplaySection.css';

const DisplaySection = () => {
    return (
        <>
            <section className="video-section">
                <div className="video-overlay">
                    <video autoPlay muted loop id="bg-video">
                        <source src="/videos/music_video_2.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div className="jodye-sage-wrapper">
                    <div className="inner-content">
                        <div className="jodye-sage">
                            <div className="jodye-sage-text">
                                <div className="jodye-sage-text-item">J</div>
                                <div className="jodye-sage-text-item">O</div>
                                <div className="jodye-sage-text-item">D</div>
                                <div className="jodye-sage-text-item">Y</div>
                                <div className="jodye-sage-text-item">E</div>
                            </div>
                            <div className="sage jodye-sage-text">
                                <div className="jodye-sage-text-item">S</div>
                                <div className="jodye-sage-text-item">A</div>
                                <div className="jodye-sage-text-item">G</div>
                                <div className="jodye-sage-text-item">E</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="music-text-gif-container">
                    <div className="music-text-gif-wrapper">
                        <div className="music-text-wrapper">
                            <div className="bigger-picture-text">BIGGER PICTURE</div>

                        </div>
                        
                        <div className="gif-wrapper">
                            <img className="gif" src={cameraGif} alt="Camera GIF"  />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default DisplaySection;