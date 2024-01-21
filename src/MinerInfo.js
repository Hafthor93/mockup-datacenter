import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MinerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #181a29;
  color: #fff;
  min-height: 100vh;
`;

const MinerTitle = styled.h1`
grid-column: 1 / -1;
text-align: center;
color: #4caf50;
padding: 7px;
background-color: #333;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const InfoCard = styled.div`
  background-color: #222;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 500px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #aaa;
`;

const Value = styled.span`
  font-weight: bold;
  color: #ddd;
`;

const MinerInfo = () => {
  const { id } = useParams();
  const minerData = generateDummyData();

  return (
    <MinerInfoContainer>
      <MinerTitle>Miner Info: {id}</MinerTitle>
      <InfoCard>
        <InfoRow>
          <Label>IP:</Label> <Value>{minerData.ip}</Value>
        </InfoRow>
        <InfoRow>
          <Label>MAC Address:</Label> <Value>{minerData.macAddress}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Heat:</Label> <Value>{minerData.heat}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Fan Speed:</Label> <Value>{minerData.fanSpeed}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Hash Power:</Label> <Value>{minerData.hashPower}</Value>
        </InfoRow>
        <InfoRow>
          <Label>Status:</Label> <Value>{minerData.status}</Value>
        </InfoRow>
      </InfoCard>
    </MinerInfoContainer>
  );
};

export default MinerInfo;

// Helper function to generate dummy data
function generateDummyData() {
  return {
    ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
    macAddress: 'XX:XX:XX:XX:XX:XX',
    heat: `${Math.floor(Math.random() * 100)}°C`,
    fanSpeed: `${Math.floor(Math.random() * 5000)} RPM`,
    hashPower: `${Math.floor(Math.random() * 1000)} MH/s`,
    status: Math.random() > 0.5 ? 'Online' : 'Offline'
  };
}
