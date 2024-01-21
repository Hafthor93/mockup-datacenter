import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Heatmap from './Heatmap';
import MinerInfo from './MinerInfo';
import Security from './Security';
import HomePage from './HomePage';

const Container = styled.div`
  background-color: #f4f4f4;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);

  a, button {
    color: white;
    text-decoration: none;
    margin: 15px 15px;
    font-size: 18px; // Slightly larger for modern look
    font-weight: 600; // Medium weight for a bolder appearance
    letter-spacing: 0.05em; // Slight spacing for a cleaner look
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #ecf0f1;
      transform: translateY(-2px); // Subtle lift effect on hover
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  // ... Rest of your Navbar styles
`;

const Logo = styled.img`
    width: 150px;
    height: auto;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); // Slightly enlarges logo on hover
    }
`;

const UserLogo = styled.img`
    width: 50px;
    cursor: pointer;
    transition: border 0.3s, transform 0.3s;
    &:hover {
      transform: scale(1.10); // Slightly enlarges logo on hover
    }
`;


const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a, button {
    text-decoration: none;
    color: white;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: #66b3ff;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => <div>Home Page</div>;

const Account = ({ onLogin, loginError, setLoginError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setLoginError('Username and password are required');
      return;
    }
    onLogin(username, password);
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <SubmitButton type="submit">Login</SubmitButton>
    </LoginForm>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [loginError, setLoginError] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = (username, password) => {
    if (username === 'Tecna' && password === 'Mining') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  return (
    <BrowserRouter>
      <Container>
        <Navbar>
        <Link to="/">
            <Logo src="https://www.tecna.is/cdn/shop/files/Tecna_ed_2_Icelandic.png?v=1695718500&width=300.png" alt="Logo" />
          </Link>
          <NavLinks>
            <Link to="/">HomePage</Link>
            <Link to="/heatmap">Heatmap</Link>
            {isLoggedIn && <Link to="/security">Security</Link>}
            <Link to="/account">Account</Link>
            {isLoggedIn && (
              <UserLogo 
                src="https://www.tecna.is/cdn/shop/files/Tecna_logo_google_biggest_canvas.png?crop=center&height=32&v=1695659664&width=32.png" 
                alt="User Logo"
                onClick={() => setShowDropdown(!showDropdown)}
              />
            )}
          </NavLinks>
        </Navbar>
        <DropdownMenu show={showDropdown}>
          <button onClick={handleLogout}>Logout</button>
        </DropdownMenu>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/minerinfo/:id" element={<MinerInfo />} />
          <Route path="/security" element={<Security />} />
          <Route path="/account" element={<Account onLogin={handleLogin} loginError={loginError} setLoginError={setLoginError} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
