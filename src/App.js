import React from 'react';
import styled from 'styled-components';
import Countdown from './components/Countdown';
import RandomMotto from './components/RandomMotto';
import './App.css';

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const Message = styled.div`
  font-size: 2rem;
  color: #61dafb;
`;

function App() {
  return (
    <div className="App">
      <CountdownContainer>
        <Message>Countdown to Cafe Squad</Message>
        <Countdown />
        <RandomMotto />
      </CountdownContainer>
    </div>
  );
}

export default App;
