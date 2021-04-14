import React, { Component } from 'react';
import xmlFlightData from './public/flightdata_A.xml'
import {parseString} from 'xml2js'

import FlightContainer from './Containers/FlightContainer';

class App extends Component {


  componentDidMount(){
    this._isMounted = true;
    var url = "xmlFlightData"
   
    fetch(url)
      .then((res) => res.text())
      .then((resText) => {
     parseString(resText, function (err, result) {
       console.log(result);
       return result;
      });
    this.setState({
      datasource : result
      })
     })
  .catch((error) => {
    console.log('Error fetching the feed: ', error);
  });
}

componentWillUnmount() {
  this._isMounted = false;
}

  render() {
    return (
      <FlightContainer />
    );
  }
}

export default App;

