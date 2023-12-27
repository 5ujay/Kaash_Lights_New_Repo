import React from 'react';
import './ImageWithHover.css'; // Import the CSS file
import home from '../images/homeBtn.png'

const ImageWithHover = () => {
  return (
    <div className="image-container">
      <img
        src={home}
        alt="Image"
        className="hover-image"
      />
    </div>
  );
};

export default ImageWithHover;
