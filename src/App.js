import React, { Component } from 'react';
import HexEditor from './components/HexEditor';
import Logs from './components/Logs';
import './App.css';
import './components/HexEditor.css';
import './components/Logs.css';
import 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col col-xs-6">
            <HexEditor/>
        </div>

        <div className="col col-xs-6">
            <Logs />
        </div>
      </div>
    );
  }
}

export default App;
