import React from 'react';
import FlightSelector from '../Components/FlightSelector';
import FlightDetail from '../Components/FlightDetail';

class FlightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      selectedFlightReservationCode: ''
    };
    this.handleFlightSelected = this.handleFlightSelected.bind(this);
  }

  componentDidMount() {
    const url = '../public/flightdata_A.xml';

    fetch(url)
      .then(res => res.json())
      .then(flights => this.setState({ flights: flights }))
      .catch(err => console.error);
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