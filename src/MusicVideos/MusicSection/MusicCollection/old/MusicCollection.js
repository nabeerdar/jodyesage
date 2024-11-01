import React, { useState } from 'react';
import './MusicCollection.css'; 
import cover1 from '../../../images/Cover/cover_1.jpg';
import cover2 from '../../../images/Cover/cover_2.jpg';
import cover3 from '../../../images/Cover/cover_3.jpg';
import cover4 from '../../../images/Cover/cover_4.jpg';
import cover5 from '../../../images/Cover/cover_5.jpg';

function MusicCollection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImageModal = (index) => {
        setCurrentIndex(index);
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        modalImage.src = document.querySelectorAll(".container11 .item img")[index].src;
        modal.style.display = "flex";
    }

    const closeImageModal = () => {
        document.getElementById("imageModal").style.display = "none";
    }

    const prevImage = () => {
        const totalImages = document.querySelectorAll(".container11 .item img").length;
        setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
        const modalImage = document.getElementById("modalImage");
        modalImage.src = document.querySelectorAll(".container11 .item img")[currentIndex].src;
    }

    const nextImage = () => {
        const totalImages = document.querySelectorAll(".container11 .item img").length;
        setCurrentIndex((currentIndex + 1) % totalImages);
        const modalImage = document.getElementById("modalImage");
        modalImage.src = document.querySelectorAll(".container11 .item img")[currentIndex].src;
    }

    return (
        <div className='body1'>
            <div className='h11'><h1>Music</h1></div>
            <div className="container11">
                <div className="item" onClick={() => openImageModal(0)}>
                    <img src={cover1} alt="Image 1" />
                </div>
                <div className="item" onClick={() => openImageModal(1)}>
                    <img src={cover2} alt="Image 2" />
                </div>
                <div className="item" onClick={() => openImageModal(2)}>
                  <img src={cover3 }alt="Image 3" />
                </div>
                <div className="item" onClick={() => openImageModal(3)}>
                    <img src={cover4} alt="Image 4" />
                </div>
                <div className="item" onClick={() => openImageModal(4)}>
                    <img src={cover5} alt="Image 5" />
                </div>
                <div className="item" onClick={() => openImageModal(5)}>
                    <img src={cover4} alt="Image 6" />
                </div>
            </div>

            <div id="imageModal" className="modal">
                <span className="close" onClick={closeImageModal}>&#10005;</span>
                <div className="modal-navigation">
                    <span className="nav-arrow left" onClick={prevImage}>&#10094;</span>
                    <span className="nav-arrow right" onClick={nextImage}>&#10095;</span>
                </div>
                
                <div className="modal-content">
                    <div className="image-container">
                        <img id="modalImage" src="" alt="Modal Image" />
                    </div>
                    <div className="additional-content">
                        <div className="name-section1">
                            <h3>Album</h3>
                        </div>
                        <div className="last-section3">
                            <p>You can add more elements as needed.</p>
                        </div>
                        <div className="comment-section2">
                            <span className="comment-icon">&#128172;</span>
                            <span className="likes-count">Likes: 100</span>
                        </div>
                    
                        <div className="section4">
                            <div className="add-comment">
                                <span className="comment-icon">&#128172;</span>
                                <input type="text" placeholder="Add a comment..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicCollection;
