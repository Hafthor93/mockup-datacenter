import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CryptoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const CryptoCard = styled.div`
  background: #222;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana,ripple,chainlink', // Specify the cryptocurrencies you want to fetch here
          },
        });
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <CryptoContainer>
      {cryptoData.map((crypto) => (
        <CryptoCard key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>{`$${crypto.current_price.toLocaleString()}`}</p>
          <p>{`Market Cap: $${crypto.market_cap.toLocaleString()}`}</p>
          <p>{`24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%`}</p>
        </CryptoCard>
      ))}
    </CryptoContainer>
  );
};

export default HomePage;
