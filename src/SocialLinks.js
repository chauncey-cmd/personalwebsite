// SocialLinks.js
import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/vinnie_angellotti" target="_blank" rel="noopener noreferrer">
        <img
          src={require('./Media/instagram.png')} // Update the path
          alt="Instagram"
          width="30"
          height="30"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
