import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Heatmap from './Heatmap';
import MinerInfo from './MinerInfo';
import Security from './Security';

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

const UserLogo = styled.img`
  width: 50px;
  height: auto;
  cursor: pointer;
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
          <Logo src="https://www.tecna.is/cdn/shop/files/Tecna_ed_2_Icelandic.png?v=1695718500&width=300.png"  alt="Logo" />
          <NavLinks>
            <Link to="/">Home</Link>
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
          <Route path="/" element={<Home />} />
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
