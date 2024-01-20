import React from 'react';
import Heatmap from './Heatmap';
import MinerInfo from './MinerInfo';
import Security from './Security';
import Info from './Info';
import Settings from './Settings';

const Home = () => {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <h3>Heatmap Summary</h3>
          <HeatmapSummary />
        </div>
        <div>
          <h3>Miner Information</h3>
          <MinerInfoSummary />
        </div>
        {/* ... other summaries */}
      </div>
    );
  };
  

export default Home;
