// import React, { useState } from 'react';
// import './MusicCollection.css';
// import cover1 from '../../../images/Cover/cover_1.jpg';
// import cover2 from '../../../images/Cover/cover_2.jpg';
// import cover3 from '../../../images/Cover/cover_3.jpg';
// import cover4 from '../../../images/Cover/cover_4.jpg';
// import cover5 from '../../../images/Cover/cover_5.jpg';

// function MusicCollection() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [newComment, setNewComment] = useState("");
//     const [imagesData, setImagesData] = useState([
//         { src: cover1, comments: [], details: "Tiger" },
//         { src: cover2, comments: [], details: "Dancing In The Rain" },
//         { src: cover3, comments: [], details: "Balance" },
//         { src: cover4, comments: [], details: "Indigo Blue" },
//         { src: cover5, comments: [], details: "Odinma" },
//         { src: cover4, comments: [], details: "Indigo Blue" }
//     ]);

//     const openImageModal = (index) => {
//         setCurrentIndex(index);
//         const modal = document.getElementById("imageModal");
//         modal.style.display = "flex";
//     }

//     const closeImageModal = () => {
//         document.getElementById("imageModal").style.display = "none";
//     }

//     const prevImage = () => {
//         const totalImages = imagesData.length;
//         const newIndex = (currentIndex - 1 + totalImages) % totalImages;
//         setCurrentIndex(newIndex);
//     }

//     const nextImage = () => {
//         const totalImages = imagesData.length;
//         const newIndex = (currentIndex + 1) % totalImages;
//         setCurrentIndex(newIndex);
//     }

//     const handleAddComment = () => {
//         if (newComment.trim() === "") return;
//         const updatedImagesData = [...imagesData];
//         updatedImagesData[currentIndex].comments.push(newComment);
//         setImagesData(updatedImagesData);
//         setNewComment("");
//     }

//     return (
//         <div className='body1'>
//             <div className='h11'><h1>Music</h1></div>
//             <div className="container11">
//                 {imagesData.map((image, index) => (
//                     <div className="item" key={index} onClick={() => openImageModal(index)}>
//                         <img src={image.src} alt={`Image ${index + 1}`} />
//                     </div>
//                 ))}
//             </div>

//             <div id="imageModal" className="modal">
//                 <span className="close" onClick={closeImageModal}>&#10005;</span>
//                 <div className="modal-navigation">
//                     <span className="nav-arrow left" onClick={prevImage}>&#10094;</span>
//                     <span className="nav-arrow right" onClick={nextImage}>&#10095;</span>
//                 </div>
                
//                 <div className="modal-content">
//                     <div className="image-container">
//                         <img id="modalImage" src={imagesData[currentIndex].src} alt="Modal Image" />
//                     </div>
//                     <div className="additional-content">
//                         <div className="details-section">
//                             <h3>{imagesData[currentIndex].details}</h3>
//                         </div>
//                         <div className="comments-section">
//                             {imagesData[currentIndex].comments.length === 0 ? (
//                                 <p>No comments yet.</p>
//                             ) : (
//                                 <ul>
//                                     {imagesData[currentIndex].comments.map((comment, index) => (
//                                         <li key={index}>{comment}</li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                         <div className="comment-input-section" >
//                         <input 
//                             type="text" 
//                             placeholder="Add a comment..." 
//                             value={newComment}
//                             onChange={(e) => setNewComment(e.target.value)}
//                             style={{ border: 'none' }}
//                         />
//                         <button onClick={handleAddComment} style={{ border: 'none' }}>Post</button>
//                     </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MusicCollection;





// import React, { useState } from 'react';
// import './MusicCollection.css';
// import cover1 from '../../../images/Cover/cover_1.jpg';
// import cover2 from '../../../images/Cover/cover_2.jpg';
// import cover3 from '../../../images/Cover/cover_3.jpg';
// import cover4 from '../../../images/Cover/cover_4.jpg';
// import cover5 from '../../../images/Cover/cover_5.jpg';

// function MusicCollection() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [newComment, setNewComment] = useState("");
//     const [isFocused, setIsFocused] = useState(false);
//     const [isLiked, setIsLiked] = useState(false);
//     const [imagesData, setImagesData] = useState([
//         { src: cover1, comments: [], details: "Tiger" },
//         { src: cover2, comments: [], details: "Dancing In The Rain" },
//         { src: cover3, comments: [], details: "Balance" },
//         { src: cover4, comments: [], details: "Indigo Blue" },
//         { src: cover5, comments: [], details: "Odinma" },
//         { src: cover4, comments: [], details: "Indigo Blue" }
//     ]);

//     const openImageModal = (index) => {
//         setCurrentIndex(index);
//         const modal = document.getElementById("imageModal");
//         modal.style.display = "flex";
//     }

//     const closeImageModal = () => {
//         document.getElementById("imageModal").style.display = "none";
//     }

//     const prevImage = () => {
//         const totalImages = imagesData.length;
//         const newIndex = (currentIndex - 1 + totalImages) % totalImages;
//         setCurrentIndex(newIndex);
//     }

//     const nextImage = () => {
//         const totalImages = imagesData.length;
//         const newIndex = (currentIndex + 1) % totalImages;
//         setCurrentIndex(newIndex);
//     }

//     const handleAddComment = () => {
//         if (newComment.trim() === "") return;
//         const updatedImagesData = [...imagesData];
//         updatedImagesData[currentIndex].comments.push(newComment);
//         setImagesData(updatedImagesData);
//         setNewComment("");
//     }

//     const handleLikeClick = () => {
//         setIsLiked(!isLiked);
//     }

//     return (
//         <div className='body1'>
//             <div className='h11'><h1>Music</h1></div>
//             <div className="container11">
//                 {imagesData.map((image, index) => (
//                     <div className="item" key={index} onClick={() => openImageModal(index)}>
//                         <img src={image.src} alt={`Image ${index + 1}`} />
//                     </div>
//                 ))}
//             </div>

//             <div id="imageModal" className="modal">
//                 <span className="close" onClick={closeImageModal}>&#10005;</span>
//                 <div className="modal-navigation">
//                     <span className="nav-arrow left" onClick={prevImage}>&#10094;</span>
//                     <span className="nav-arrow right" onClick={nextImage}>&#10095;</span>
//                 </div>
                
//                 <div className="modal-content">
//                     <div className="image-container">
//                         <img id="modalImage" src={imagesData[currentIndex].src} alt="Modal Image" />
//                     </div>
//                     <div className="additional-content">
//                         <div className="details-section">
//                             <h3>{imagesData[currentIndex].details}</h3>
//                         </div>
//                         <div className="comments-section">
//                             {imagesData[currentIndex].comments.length === 0 ? (
//                                 <p>No comments yet.</p>
//                             ) : (
//                                 <ul>
//                                     {imagesData[currentIndex].comments.map((comment, index) => (
//                                         <li key={index}>{comment}</li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                                                 <div className="comment-input-section">
//                             <input 
//                                 type="text" 
//                                 placeholder="Add a comment..." 
//                                 value={newComment}
//                                 onChange={(e) => setNewComment(e.target.value)}
//                                 style={{ border: 'none' }} // remove border on focus
//                             />
//                             <button
//                                 onClick={handleAddComment}
//                                 className={newComment.trim() === "" ? "disabled" : "enabled"}
//                             >
//                                 Post
//                             </button>
//                         </div>
//                         <div className="like-section">
//                             <span 
//                                 className="heart-icon"
//                                 onClick={handleLikeClick}
//                                 style={{ color: isLiked ? 'red' : 'black' }}
//                             >
//                                 {isLiked ? '❤️' : '♡'}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MusicCollection;




import React, { useState } from 'react';
import './MusicCollection.css';
import cover1 from '../../../images/Cover/cover_1.jpg';
import cover2 from '../../../images/Cover/cover_2.jpg';
import cover3 from '../../../images/Cover/cover_3.jpg';
import cover4 from '../../../images/Cover/cover_4.jpg';
import cover5 from '../../../images/Cover/cover_5.jpg';

// SVG heart icon component
const HeartIcon = ({ filled, onClick }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={filled ? 'red' : 'transparent'} // Fill red when filled, transparent when not
        stroke={filled ? 'red' : 'black'} // Outline color red when filled, black when not
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
        onClick={onClick} // Handle click event
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);

function MusicCollection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [isLiked, setIsLiked] = useState(Array(6).fill(false)); // Adjusted initial state for isLiked
    const [imagesData, setImagesData] = useState([
        { src: cover1, comments: [], details: "    Tiger", likes: 0 },
        { src: cover2, comments: [], details: "Dancing In The Rain", likes: 0 },
        { src: cover3, comments: [], details: "Balance", likes: 0 },
        { src: cover4, comments: [], details: "Indigo Blue", likes: 0 },
        { src: cover5, comments: [], details: "Odinma", likes: 0 },
        { src: cover4, comments: [], details: "Indigo Blue", likes: 0 }
    ]);

    const openImageModal = (index) => {
        setCurrentIndex(index);
        const modal = document.getElementById("imageModal");
        modal.style.display = "flex";
    }

    const closeImageModal = () => {
        document.getElementById("imageModal").style.display = "none";
    }

    const prevImage = () => {
        const totalImages = imagesData.length;
        const newIndex = (currentIndex - 1 + totalImages) % totalImages;
        setCurrentIndex(newIndex);
    }

    const nextImage = () => {
        const totalImages = imagesData.length;
        const newIndex = (currentIndex + 1) % totalImages;
        setCurrentIndex(newIndex);
    }

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const updatedImagesData = [...imagesData];
        updatedImagesData[currentIndex].comments.push(newComment);
        setImagesData(updatedImagesData);
        setNewComment("");
    }

    const handleLikeClick = () => {
        const updatedLikes = [...isLiked];
        updatedLikes[currentIndex] = !updatedLikes[currentIndex];
        const updatedImagesData = [...imagesData];
        updatedImagesData[currentIndex].likes = updatedLikes[currentIndex] ? updatedImagesData[currentIndex].likes + 1 : updatedImagesData[currentIndex].likes - 1;
        setImagesData(updatedImagesData);
        setIsLiked(updatedLikes);
    }

    return (
        <div className='body1'>
            <div className='h11'><h1>Music</h1></div>
            <div className="container11">
                {imagesData.map((image, index) => (
                    <div className="item" key={index} onClick={() => openImageModal(index)}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div id="imageModal" className="modal">
                <span className="close" onClick={closeImageModal}>&#10005;</span>
                <div className="modal-navigation">
                    <span className="nav-arrow left" onClick={prevImage}>&#10094;</span>
                    <span className="nav-arrow right" onClick={nextImage}>&#10095;</span>
                </div>
                
                <div className="modal-content">
                    <div className="image-container">
                        <img id="modalImage" src={imagesData[currentIndex].src} alt="Modal Image" />
                    </div>
                    <div className="additional-content">
                        <div className="details-section">
                            <h3>{imagesData[currentIndex].details}</h3>
                        </div>
                        <div className="like-section">
                            <HeartIcon filled={isLiked[currentIndex]} onClick={handleLikeClick} />
                            <span className="likes-count">{imagesData[currentIndex].likes}    likes</span>
                        </div>
                        <div className="comments-section">
                            {imagesData[currentIndex].comments.length === 0 ? (
                                <p>No comments yet.</p>
                            ) : (
                                <ul>
                                    {imagesData[currentIndex].comments.map((comment, index) => (
                                        <li key={index}>{comment}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="comment-input-section">
                            <input 
                                type="text" 
                                placeholder="Add a comment..." 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                style={{ border: 'none' }} 
                            />
                            <button
                                onClick={handleAddComment}
                                className={newComment.trim() === "" ? "disabled" : "enabled"}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicCollection;
