import React from 'react';
import './Biography.css';

import refPhoto0 from '../images/ref-photo-0-croped.png';
import refPhoto15 from '../images/ref-photo-15.jpg';
import refPhoto11 from '../images/ref-photo-11-cropped.jpg';
import refPhoto13 from '../images/ref-photo-13-cropped.jpg';
import refPhoto10 from '../images/ref-photo-10.jpg';
import refPhoto1 from '../images/ref-photo-1-cropped.jpg';

const Biography = () => {
return (
<div className="biography-container">
<h2 className="biography-title">Biography</h2>

<h4 className="biography-section-title">Personal Background</h4>
<div className="biography-text">
    Justin Akagha, better known by his stage name Jodye Sage, hails from the bustling city of Charlotte. Growing up in a Nigerian family, Jodye Sage was exposed to a variety of genres, which ignited his passion for creating music from an early age.
</div>
<div className="biography-image">
    <img src={refPhoto0} alt="Justin Akagha" />
</div>

<h4 className="biography-section-title">Music Section</h4>
<div className="biography-text">
    Jodye Sage is known for his innovative blend of cosmic pop and electronic music. He honed his skills taking piano, drums, and singing lessons where he learned from his mentors. With his skills, he strives to experiment with his sound for a new invention and contribute to a new golden age.
</div>
<div className="biography-image">
    <img src={refPhoto15} alt="Music Section" />
</div>

<h4 className="biography-section-title">Career Highlights</h4>
<div className="biography-text">
    Jodye Sage’s first project EP "Year of the Tiger" released in 2021, received criticism. It was Jodye’s starting stepping stone to finding his unique sound.
</div>
<div className="biography-image">
    <img src={refPhoto11} alt="Career Highlights" />
</div>

<h4 className="biography-section-title">Musical Style and Influences</h4>
<div className="biography-text">
    Jodye’s music is characterized by its ambient mix of live drums, afro beats, electronic synths, bell synths, pad synths, and electric guitar creating a unique soundscape that captivates listeners. He draws inspiration from artists like Michael Jackson, Tame Impala, and Fireboy DML.
</div>
<div className="biography-image">
<img src={refPhoto13} alt="Music Section" /></div>

<h4 className="biography-section-title">Current Projects and Future Plans</h4>
<div className="biography-text">
    Jodye is currently working on his first studio album, which will promise to explore new sonic territories. He aims to continue pushing the boundaries of his music while staying true to his unique sound.
</div>
<div className="biography-image">
    <img src={refPhoto1} alt="Current Projects and Future Plans" />
</div>

<h4 className="biography-section-title">Personal Touch</h4>
<div className="biography-text">
    Beyond music, Jodye is a visual dreamer and enjoys incorporating vision into his tracks. He is also passionate about mental health advocacy, spirituality, and regularly volunteers with organizations supporting this cause.
</div>
<div className="biography-image">
    <img src={refPhoto10} alt="Personal Touch" />
</div>
</div>
);
};

export default Biography;
