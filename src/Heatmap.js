import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeatmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Pod = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
`;

const PodTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Miner = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #4caf50;
  color: white;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #66bb6a;
    transform: scale(1.1);
  }
`;

const Heatmap = () => {
  const navigate = useNavigate();

  const handleClick = (minerId) => {
    navigate(`/minerinfo/${minerId}`);
  };

  const renderMiners = (pod) => {
    return [...Array(100)].map((_, index) => (
      <Miner key={`${pod}-${index}`} onClick={() => handleClick(`${pod}-${index}`)}>
        {index + 1}
      </Miner>
    ));
  };

  const renderPod = (pod) => {
    const miners = renderMiners(pod);
    const rows = [];
    for (let i = 0; i < miners.length; i += 4) {
      rows.push(
        <Row key={`${pod}-row-${i / 4}`}>
          {miners.slice(i, i + 4)}
        </Row>
      );
    }
    return (
      <Pod key={pod}>
        <PodTitle>{pod}</PodTitle>
        {rows}
      </Pod>
    );
  };

  return (
    <HeatmapContainer>
      {renderPod('POD1')}
      {renderPod('POD2')}
    </HeatmapContainer>
  );
};

export default Heatmap;
