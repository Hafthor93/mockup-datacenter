import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Heatmap from './Heatmap';
import MinerInfo from './MinerInfo';

import CustomLogo from '/Users/hafthor/Mockup Datacenter/mockup-datacenter/src/Tecna3.png';

const Container = styled.div`
  background-color: #f4f4f4;

`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:hover {
      color: #66b3ff;
    }
  }
`;

const Home = () => <div>Home Page</div>;

const Info = () => <div>Info Page</div>;
const Settings = () => <div>Settings Page</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Navbar>
          <Logo src={CustomLogo} alt="asdf" />
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/heatmap">Heatmap</Link>
            <Link to="/info">Info</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/minerinfo">Miner Info</Link>
          </NavLinks>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/info" element={<Info />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/minerinfo/:id" element={<MinerInfo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
