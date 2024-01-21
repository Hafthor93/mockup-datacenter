import React, { createContext, useState } from 'react';

export const MinerDataContext = createContext();

export const MinerDataProvider = ({ children }) => {
  const [minerData, setMinerData] = useState(null);

  return (
    <MinerDataContext.Provider value={{ minerData, setMinerData }}>
      {children}
    </MinerDataContext.Provider>
  );
};
