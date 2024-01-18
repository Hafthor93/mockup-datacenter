// Security.js

import React, { useState, useEffect } from 'react';
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
  width: 350px;
  height: 350px;
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
  text-align: center;
  justify-content: center;
  font-size: 0.8rem;  /* Smaller font size */
  color: white;
  background-color: ${props => (props.sensorActive ? '#e74c3c' : '#2ecc71')};  /* Red or green background based on sensor status */
  transition: background-color 0.5s ease;  /* Smooth transition */
`;

const MotionSensor = () => {
  const [motionDetected, setMotionDetected] = useState(false);

  useEffect(() => {
    // Simulating random motion detection
    const intervalId = setInterval(() => {
      setMotionDetected(Math.random() < 0.2); // 20% chance of motion detection
    }, 3000);  // Change every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
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
    </SensorSection>
  );
};

const HeatSensor = () => {
  const [fakeHeat, setFakeHeat] = useState(40);  // Starting heat value

  useEffect(() => {
    // Simulating heat changing randomly in the range of 40-60
    const intervalId = setInterval(() => {
      setFakeHeat(prevHeat => {
        const newHeat = prevHeat + Math.floor(Math.random() * 6) - 3; // Random change between -3 and +3
        return Math.min(60, Math.max(40, newHeat));  // Ensure the temperature stays in the range [40, 60]
      });
    }, 5000);  // Change every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SensorSection>
      <SensorHeader>Heat Sensors</SensorHeader>
      <SensorGrid>
        <SensorBox sensorActive={fakeHeat > 50}>
          {fakeHeat}°C
        </SensorBox>
        <SensorBox sensorActive={fakeHeat > 50}>
          {fakeHeat}°C
        </SensorBox>
        <SensorBox sensorActive={fakeHeat > 50}>
          {fakeHeat}°C
        </SensorBox>
      </SensorGrid>
    </SensorSection>
  );
};

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
        <MotionSensor />
      </SensorSection>

      <HeatSensor />
    </SecurityContainer>
  );
};

export default Security;
