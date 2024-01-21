import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SecurityContainer = styled.div`
  background-color: #181a29; /* Matching the dark background */
  color: #fff; /* White text for contrast */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  padding: 15px;
`;

const CameraFeed = styled.div`
  background-color: #222; /* Dark background for each camera feed */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjusted shadow for consistency */
`;

const CameraImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Rounded corners */
`;

const SensorSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333; /* Dark background for sensor section */
  border-radius: 0 0 10px 10px; /* Rounded bottom corners */
`;

const SensorBox = styled.div`
  width: 45%;
  height: 35px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem; /* Adjusted font size for readability */
  color: white;
  background-color: ${props => (props.sensorActive ? '#e74c3c' : '#2ecc71')}; /* Color for active/inactive sensors */
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
