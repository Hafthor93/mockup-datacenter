import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";


const CryptoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100vh;
`;

const CryptoCard = styled.div`
  background: #222;
  color: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_CRYPTO_API_ENDPOINT' with your actual API endpoint
        const response = await axios.get('YOUR_CRYPTO_API_ENDPOINT');
        
        // Update the state with the fetched data
        // You might need to adjust the mapping depending on the structure of your API response
        setCryptoData(response.data.map((crypto) => ({
          name: crypto.name,
          symbol: crypto.symbol,
          price: crypto.price_usd, // Replace 'price_usd' with the actual key for price in your API response
        })));
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CryptoContainer>
      {cryptoData.map((crypto, index) => (
        <CryptoCard key={index}>
          <h3>{crypto.name} ({crypto.symbol})</h3>
          <p>${crypto.price}</p>
        </CryptoCard>
      ))}
    </CryptoContainer>
  );
};

export default HomePage;

