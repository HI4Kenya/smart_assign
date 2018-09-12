import React, { Component } from 'react';
import './App.css';
import OrgChooser from './components/OrgChooser'
import DatasetChooser from './components/DatasetChooser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is smart assign</h1>
        </header>
        <OrgChooser/>
        <DatasetChooser/>
      </div>
    );
  }
}

export default App;
