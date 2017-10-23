import './App.css';

import React, { Component } from 'react';

import Papa from 'papaparse';
import logo from './logo.svg';

const URL = 'https://raw.githubusercontent.com/mincongzhang/HistoricalForexAnalysis/master/TODO/EURUSD_20160101.csv';

fetch(URL).then(res => {
  res.text().then(text => {
    console.log('text', text);
    const csv = Papa.parse(text);
    console.log('csv:', csv);
  })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
