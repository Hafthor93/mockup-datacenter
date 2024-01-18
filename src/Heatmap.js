// Heatmap.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeatmapContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Pod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px; /* Add margin between PODs */
`;

const Rack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const MinerBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px; /* Adjust the width as needed */
  height: 80px; /* Adjust the height as needed */
  margin: 5px;
  background-color: lightblue;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: lightcoral;
  }
`;

const generateRandomData = () => {
  const getRandomValue = () => Math.floor(Math.random() * 100);

  return {
    firmware: `Firmware Version ${getRandomValue()}.${getRandomValue()}.${getRandomValue()}`,
    ip: `192.168.${getRandomValue()}.${getRandomValue()}`,
    macAddress: Array.from({ length: 6 }, () => getRandomValue().toString(16).padStart(2, '0')).join(':'),
    heat: `${getRandomValue()}°C`,
    fanSpeed: `${getRandomValue()} RPM`,
    hashPower: `${getRandomValue()} MH/s`,
  };
};

const Heatmap = () => {
  // Generate an array of 100 miners
  const miners = Array.from({ length: 100 }, (_, index) => index + 1);

  // Helper function to chunk the array into racks
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  // Chunk miners into racks with 4 miners per row
  const minersInRacks = chunkArray(miners, 4);

  return (
    <HeatmapContainer>
      <Pod>
        <h2>POD1</h2>
        {minersInRacks.slice(0, 25).map((rack, rackIndex) => (
          <Rack key={`pod1-rack-${rackIndex}`}>
            {rack.map((miner) => (
              <MinerBox key={`pod1-${miner}`} to={`/minerinfo/${miner}`} state={generateRandomData()}>
              {miner}
            </MinerBox>            
            ))}
          </Rack>
        ))}
      </Pod>

      <Pod>
        <h2>POD2</h2>
        {minersInRacks.slice(25).map((rack, rackIndex) => (
          <Rack key={`pod2-rack-${rackIndex}`}>
            {rack.map((miner) => (
              <MinerBox
                key={`pod2-${miner}`}
                to={`/minerinfo/${miner}`}
                state={generateRandomData()} // Pass state with random data
              >
                {miner}
              </MinerBox>
            ))}
          </Rack>
        ))}
      </Pod>
    </HeatmapContainer>
  );
};

export default Heatmap;
