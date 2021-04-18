import React from 'react';
import {parseString} from 'xml2js'

import xmlFlightData from '../public/flightdata_A.xml'
import DepAirSelector from '../Components/DepAirSelector';
import DepAirDetail from '../Components/DepAirDetail';

const flightData = null; 

class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      selectedDepAir: ''
    };
    this.handleDepAirSelected = this.handleDepAirSelected.bind(this);
  }

  componentDidMount(){
    this._isMounted = true;
    var url = xmlFlightData;
    var newState

    fetch(url)
      .then((res) => res.text())
      .then((resText) => {

 // parse response into JSON 
        parseString(resText, function (err, flightData){

// clean up the data 
        let cleanData =[]
        for(let key in flightData.flights.flight) {
            cleanData.push(flightData.flights.flight[key].$)
        }
        newState = cleanData
      
      });
        this.setState({flights: newState})
     })

.catch((error) => {
  console.log('Error fetching the feed: ', error);
  });
}

componentWillUnmount() {
  this._isMounted = false;
}

 handleDepAirSelected(depAir) {
   this.setState({ selectedDepAir: depAir })
 }

  render() {
    const selectedDepAir = this.state.flights.find(flight => 
      flight.depair === this.state.selectedDepAir)

    return (
      <div>
        <h2>Please select a departure and destination airport with carrier to see more flight info </h2>
        <DepAirSelector flights={this.state.flights} onDepAirSelected={this.handleDepAirSelected} />
        <DepAirDetail flight={selectedDepAir} /> 
      </div>
    );
   }
  }

export default FlightContainer;

