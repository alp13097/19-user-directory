import React from 'react';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <Table />
    </Wrapper>
  );
}

export default App;