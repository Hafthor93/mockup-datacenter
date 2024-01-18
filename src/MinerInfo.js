import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MinerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const MinerTitle = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const InfoCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 500px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const Label = styled.span`
  font-weight: bold;
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
      <MinerTitle>Miner Info: {id}</MinerTitle>
      <InfoCard>
        <InfoRow>
          <Label>IP:</Label> {minerData.ip}
        </InfoRow>
        <InfoRow>
          <Label>MAC Address:</Label> {minerData.macAddress}
        </InfoRow>
        <InfoRow>
          <Label>Heat:</Label> {minerData.heat}
        </InfoRow>
        <InfoRow>
          <Label>Fan Speed:</Label> {minerData.fanSpeed}
        </InfoRow>
        <InfoRow>
          <Label>Hash Power:</Label> {minerData.hashPower}
        </InfoRow>
        <InfoRow>
          <Label>Status:</Label> {minerData.status}
        </InfoRow>
      </InfoCard>
    </MinerInfoContainer>
  );
};

export default MinerInfo;
