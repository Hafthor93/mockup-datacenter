import React, { useState } from 'react';

import styled, { css } from 'styled-components';

// Styled components for the layout
const DashboardContainer = styled.div`
  background: #121212;
  color: #fff;
  min-height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #222;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #333;
`;

const HeatmapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 5px;
  padding: 10px;
`;

const MinerBox = styled.div`
  background-color: #222; // Darker background
  color: #ddd;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px; // Adjust height as needed
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Add subtle shadow for depth
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .hashrate {
    font-size: 0.9em;
    font-weight: bold;
  }

  .miner-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 5px;
    ${({ online }) => online
      ? css`background-color: green;`
      : css`background-color: red;`
    }
  }

  .miner-number {
    font-size: 0.8em;
    color: #aaa;
  }
`;


const TabButton = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => (active ? 'limegreen' : '#aaa')};
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: limegreen;
  }
`;

// Dummy data generator for miners
const generateMinersData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    hashrate: `${(Math.random() * 10).toFixed(2)} Th/s`,
    temperature: `${Math.floor(Math.random() * 30) + 30}°C`,
  }));
};

const Heatmap = () => {
  const minersData = useState(generateMinersData(200))[0];
  const [view, setView] = useState('hashrate'); // 'hashrate' or 'temperature'
    
  const totalMiners = minersData.length;
  const onlineMiners = minersData.filter(miner => miner.hashrate > 0).length;
  const hashrate = minersData.reduce((acc, miner) => acc + parseFloat(miner.hashrate), 0).toFixed(2);
  
  return (
    <DashboardContainer>
      <TopBar>
        {/* Top bar content goes here */}
      </TopBar>
      <StatsBar>
        <div>Miners: {onlineMiners}/{totalMiners}</div>
        <div>Current Hashrate: {hashrate} Th/s</div>
        <div>
          <TabButton onClick={() => setView('hashrate')} active={view === 'hashrate'}>
            Hashrate
          </TabButton>
          <TabButton onClick={() => setView('temperature')} active={view === 'temperature'}>
            Temperature
          </TabButton>
        </div>
      </StatsBar>
      <HeatmapContainer>
      {minersData.map((miner, index) => (
    <MinerBox key={index} online={miner.online}>
      <div className="hashrate">{miner.hashrate}</div>
      <div className="miner-status" />
      <div className="miner-number">{index + 1}</div>
    </MinerBox>
  ))}
      </HeatmapContainer>
    </DashboardContainer>
  );
};

export default Heatmap;
