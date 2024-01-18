// MinerInfo.js
import React from 'react';
import styled from 'styled-components';

const MinerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const MinerInfo = ({ match, location }) => {
  // Check if match and location are defined before accessing their properties
  if (!match || !location || !location.state) {
    return <div>No data available</div>;
  }
  
  const minerId = match.params.id;
  const minerData = location.state;

  return (
    <MinerInfoContainer>
      <h2>Miner Information for Miner {minerId}</h2>
      <InfoRow>
        <Label>Firmware:</Label>
        {minerData.firmware}
      </InfoRow>
      <InfoRow>
        <Label>IP:</Label>
        {minerData.ip}
      </InfoRow>
      <InfoRow>
        <Label>MAC Address:</Label>
        {minerData.macAddress}
      </InfoRow>
      <InfoRow>
        <Label>Heat:</Label>
        {minerData.heat}
      </InfoRow>
      <InfoRow>
        <Label>Fan Speed:</Label>
        {minerData.fanSpeed}
      </InfoRow>
      <InfoRow>
        <Label>Hash Power:</Label>
        {minerData.hashPower}
      </InfoRow>
    </MinerInfoContainer>
  );
};

export default MinerInfo;
