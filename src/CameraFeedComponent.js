import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CameraFeed = styled.div`
  width: 320px;
  height: 320px;
  border: 2px solid #61dafb;  /* Light blue border */
  border-radius: 8px;  /* Rounded corners */
  overflow: hidden;
  position: relative;
`;

const CameraImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CameraFeedComponent = ({ imageUrl }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${imageUrl}?callback=setImageSrc`; // Assuming the server supports JSONP

    script.onload = () => {
      document.body.removeChild(script);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [imageUrl]);

  window.setImageSrc = (src) => {
    setImageSrc(src);
    delete window.setImageSrc;
  };

  return (
    <CameraFeed>
      <CameraImage src={imageSrc} alt="Live Feed Camera" />
    </CameraFeed>
  );
};

export default CameraFeedComponent;
