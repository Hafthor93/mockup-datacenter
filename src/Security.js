// Security.js

import React from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #282c35;  /* Dark background */
  color: #f2f2f2;  /* Light text color */
  border-radius: 10px;  /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  /* Shadow effect */
`;

const CameraSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;  /* Take remaining space */
`;

const CameraHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;  /* Larger font size */
`;

const CameraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

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

const SensorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;  /* Take remaining space */
`;

const SensorHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;  /* Larger font size */
`;

const SensorGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
`;

const SensorBox = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #61dafb;  /* Light blue border */
  border-radius: 50%;  /* Circular shape */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;  /* Smaller font size */
  color: white;
  background-color: ${props => (props.sensorActive ? '#e74c3c' : '#2ecc71')};  /* Red or green background based on sensor status */
  transition: background-color 0.5s ease;  /* Smooth transition */
`;

const Security = () => {
  const cameraUrls = [
    'https://via.placeholder.com/320x320.png?text=Camera+1',
    'https://via.placeholder.com/320x320.png?text=Camera+2',
    'https://via.placeholder.com/320x320.png?text=Camera+3',
    'https://via.placeholder.com/320x320.png?text=Camera+4',
    'https://via.placeholder.com/320x320.png?text=Camera+5',
    'https://via.placeholder.com/320x320.png?text=Camera+6',
    // ... (other URLs)
  ];

  // Simulating sensor statuses (true or false)
  const motionDetected = Math.random() < 0.5;
  const heatDetected = Math.random() < 0.5;

  return (
    <SecurityContainer>
      <CameraSection>
        <CameraHeader>Camera Feed</CameraHeader>
        <CameraGrid>
          {cameraUrls.map((url, index) => (
            <CameraFeed key={index}>
              <CameraImage src={url} alt={`Camera ${index + 1}`} />
            </CameraFeed>
          ))}
        </CameraGrid>
      </CameraSection>

      <SensorSection>
        <SensorHeader>Motion Sensors</SensorHeader>
        <SensorGrid>
          <SensorBox sensorActive={motionDetected}>
            {motionDetected ? 'Motion Detected' : 'No Motion'}
          </SensorBox>
          <SensorBox sensorActive={motionDetected}>
            {motionDetected ? 'Motion Detected' : 'No Motion'}
          </SensorBox>
          <SensorBox sensorActive={motionDetected}>
            {motionDetected ? 'Motion Detected' : 'No Motion'}
          </SensorBox>
        </SensorGrid>

        <SensorHeader>Heat Sensors</SensorHeader>
        <SensorGrid>
          <SensorBox sensorActive={heatDetected}>
            {heatDetected ? 'Heat Detected' : 'No Heat'}
          </SensorBox>
          <SensorBox sensorActive={heatDetected}>
            {heatDetected ? 'Heat Detected' : 'No Heat'}
          </SensorBox>
          <SensorBox sensorActive={heatDetected}>
            {heatDetected ? 'Heat Detected' : 'No Heat'}
          </SensorBox>
        </SensorGrid>
      </SensorSection>
    </SecurityContainer>
  );
};

export default Security;
