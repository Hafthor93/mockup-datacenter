import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.8fr); // Smaller columns
  gap: 15px; // Reduced gap
  padding: 15px; // Reduced padding
  background-color: #34495e;
  color: #ecf0f1;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const CameraFeed = styled.div`
  width: 100%; // Reduced width
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CameraImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
`;

const SensorSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #2c3e50; /* Darker background for sensors */
  border-radius: 0 0 15px 15px;
`;

const SensorBox = styled.div`
  width: 45%; // Slightly smaller
  height: 35px; // Slightly shorter
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem; // Smaller font size
  color: white;
  background-color: ${props => (props.sensorActive ? '#e74c3c' : '#2ecc71')};
  transition: background-color 0.5s ease;
`;

const MotionSensor = ({ sensorActive }) => (
  <SensorBox sensorActive={sensorActive}>
    {sensorActive ? 'Motion Detected' : 'No Motion'}
  </SensorBox>
);

const HeatSensor = ({ temperature }) => (
  <SensorBox sensorActive={true}>{`${temperature}°C`}</SensorBox>
);

const CameraWithSensors = ({ imageUrl }) => {
  const [motionDetected, setMotionDetected] = useState(false);
  const [fakeHeat, setFakeHeat] = useState(40);

  useEffect(() => {
    const motionIntervalId = setInterval(() => {
      setMotionDetected(Math.random() < 0.2);
    }, 3000);

    const heatIntervalId = setInterval(() => {
      setFakeHeat(prevHeat => {
        const newHeat = prevHeat + Math.floor(Math.random() * 6) - 3;
        return Math.min(60, Math.max(40, newHeat));
      });
    }, 5000);

    return () => {
      clearInterval(motionIntervalId);
      clearInterval(heatIntervalId);
    };
  }, []);

  return (
    <CameraFeed>
      <CameraImage src={imageUrl} alt="Live Feed Camera" />
      <SensorSection>
        <MotionSensor sensorActive={motionDetected} />
        <HeatSensor sensorActive={motionDetected} temperature={fakeHeat} />
      </SensorSection>
    </CameraFeed>
  );
};

const Security = () => {
  const cameraUrls = [
    'https://via.placeholder.com/280x280.png?text=Camera+1',
    'https://via.placeholder.com/280x280.png?text=Camera+2',
    'https://via.placeholder.com/280x280.png?text=Camera+3',
    'https://via.placeholder.com/280x280.png?text=Camera+4',
    'https://via.placeholder.com/280x280.png?text=Camera+5',
    'https://via.placeholder.com/280x280.png?text=Camera+6',
    'https://via.placeholder.com/280x280.png?text=Camera+7',
    'https://via.placeholder.com/280x280.png?text=Camera+8',
    'https://via.placeholder.com/280x280.png?text=Camera+9',
    'https://via.placeholder.com/280x280.png?text=Camera+10',
  ];

  return (
    <SecurityContainer>
      {cameraUrls.map((url, index) => (
        <CameraWithSensors key={index} imageUrl={url} />
      ))}
    </SecurityContainer>
  );
};

export default Security;
