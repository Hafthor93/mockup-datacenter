import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MinerInfoContainer = styled.div`
  padding: 20px;
`;

const MinerInfo = () => {
  const { id } = useParams();

  // Dummy data generator
  const generateDummyData = () => {
    return {
      ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
      macAddress: 'XX:XX:XX:XX:XX:XX', // Static for simplicity
      heat: `${Math.floor(Math.random() * 100)}°C`,
      fanSpeed: `${Math.floor(Math.random() * 5000)} RPM`,
      hashPower: `${Math.floor(Math.random() * 1000)} MH/s`,
      status: Math.random() > 0.5 ? 'Online' : 'Offline'
    };
  };

  const minerData = generateDummyData();

  return (
    <MinerInfoContainer>
      <h1>Miner Info: {id}</h1>
      <p>IP: {minerData.ip}</p>
      <p>MAC Address: {minerData.macAddress}</p>
      <p>Heat: {minerData.heat}</p>
      <p>Fan Speed: {minerData.fanSpeed}</p>
      <p>Hash Power: {minerData.hashPower}</p>
      <p>Status: {minerData.status}</p>
    </MinerInfoContainer>
  );
};

export default MinerInfo;
