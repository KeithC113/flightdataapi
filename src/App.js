import React, { Component } from 'react';
import './App.css';


import FlightContainer from './Containers/FlightContainer';

class App extends Component {
 
  render() {
    return (
      <div style={{backgroundColor: '#fcdccc'}}>
        <FlightContainer />
      </div>
    );
  }
}

export default App;

