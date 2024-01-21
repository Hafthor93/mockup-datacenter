import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DashboardContainer = styled.div`
  background: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #222;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #333;
`;

const PodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

const PodTitle = styled.h2`
  grid-column: 1 / -1;
  text-align: center;
  color: #4caf50;
  padding: 5px;
  background-color: #333;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const MinerBox = styled.div`
  background-color: #222;
  color: #ddd;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 70px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  font-size: 0.9em;

  &:hover {
    transform: translateY(-3px);
  }

  .hashrate {
    font-weight: bold;
  }

  .miner-status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 5px;
    background-color: ${({ online }) => (online ? 'green' : 'red')};
  }

  .miner-number {
    color: #aaa;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  border-bottom: ${({ active }) => active ? '2px solid limegreen' : 'none'};
  color: ${({ active }) => active ? 'limegreen' : '#aaa'};
  padding: 15px 30px;
  font-size: 1.1em;
  cursor: pointer;
  margin: 0 5px;
  transition: all 0.2s;

  &:hover {
    color: limegreen;
  }
`;

const PodWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 200px;
  padding: 20px;
`;


const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Stats = styled.div`
  font-size: 1.1em;
  color: #ddd;
`;



const generateMinersData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    hashrate: `${(Math.random() * 10).toFixed(2)} Th/s`,
    temperature: `${Math.floor(Math.random() * 30) + 30}°C`,
    online: Math.random() < 0.9 // 90% chance to be online
  }));
};



const Heatmap = () => {
  const [minersData] = useState(generateMinersData(100)); // Total of 100 miners
  const [activeTab, setActiveTab] = useState('hashrate');
  const navigate = useNavigate();

const handleMinerClick = (minerId) => {
  navigate(`/minerinfo/${minerId}`);
};
  const renderMiners = (miners) => miners.map((miner) => (
    <MinerBox key={miner.id} online={miner.online} onClick={() => handleMinerClick(miner.id)}>
      <div className="hashrate">{activeTab === 'hashrate' ? miner.hashrate : miner.temperature}</div>
      <div className="miner-status"></div>
      <div className="miner-number">{miner.id}</div>
    </MinerBox>
  ));

  return (
    <DashboardContainer>
      <TopBar> {/* Top bar content goes here */} </TopBar>
      <StatsBar>
        <Stats>Miners: {minersData.filter(miner => miner.online).length}/{minersData.length}</Stats>
        <Stats>Current Hashrate: {minersData.reduce((acc, miner) => miner.online ? acc + parseFloat(miner.hashrate) : acc, 0).toFixed(2)} Th/s</Stats>
      </StatsBar>
      <TabContainer>
        <TabButton onClick={() => setActiveTab('hashrate')} active={activeTab === 'hashrate'}>Hashrate</TabButton>
        <TabButton onClick={() => setActiveTab('temperature')} active={activeTab === 'temperature'}>Temperature</TabButton>
      </TabContainer>
      <PodWrapper>
      <PodContainer>
        <PodTitle>POD1</PodTitle>
        {renderMiners(minersData.slice(0, 50))}
      </PodContainer>
      <PodContainer>
        <PodTitle>POD2</PodTitle>
        {renderMiners(minersData.slice(50, 100))}
      </PodContainer>
      </PodWrapper>
    </DashboardContainer>
  );
};

export default Heatmap;
