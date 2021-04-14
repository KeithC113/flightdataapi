import React from 'react';
import {parseString} from 'xml2js'

import xmlFlightData from '../public/flightdata_A.xml'
import FlightSelector from '../Components/FlightSelector';
import FlightDetail from '../Components/FlightDetail';

const result = null; 

class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      selectedFlightReservationCode: ''
    };
    this.handleFlightSelected = this.handleFlightSelected.bind(this);
  }

  componentDidMount(){
    this._isMounted = true;
    var url = xmlFlightData;
   
    fetch(url)
      .then((res) => res.text())
      .then((resText) => {

 // parse response into JSON 
        parseString(resText, function (err, result) {
       console.log(result);
       return result;
      });
     this.setState({datasource : result})
     })

  .catch((error) => {
    console.log('Error fetching the data: ', error);
  });
}

componentWillUnmount() {
  this._isMounted = false;
}

  handleFlightSelected(reservationCode) {
    this.setState({ selectedFlightReservationCode: reservationCode })
  }

  render() {
    const selectedFlight = this.state.flights.find(flight => flight.reservationCode === this.state.selectedFlightReservationCode)
    
    return (
      <div>
        <h2>Flight Container</h2>
        <FlightSelector flights={this.state.flights} onFlightSelected={this.handleFlightSelected} />
        <FlightDetail flight={selectedFlight} />
      </div>
    );
  }
}

export default FlightContainer;