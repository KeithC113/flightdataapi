import React from 'react';
import {parseString} from 'xml2js'

import xmlFlightData from '../public/flightdata_A.xml'
import DepAirSelector from '../Components/DepAirSelector';
import DepAirDetail from '../Components/DepAirDetail';
import reactDom from 'react-dom';

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
      const divStyle = {backgroundcolor: '#fcdccc', 
                        height: '1000px',
                        color: 'grey'}
      const h1Style = {textAlign: 'center',
                       fontSize: '26px'};
      const h3Style = {flexShrink: 1 }
    return (
      <div>
        <div style={divStyle}> 
            <h1 style={h1Style}> Travelteck Tech Challenge</h1>
            <div style={{ flex:1}}>
              <h3 style={h3Style}> This solution is in response to a technical challenge 
                        which involved loading in XML flight data, converting to JSON then carrying out 
                        a User search on the data! </h3>
            </div> 
            <h2 style={{textAlign:'left'}}> Instructions: </h2>
            <h2>Please select a departure and a destination airport, then choose your carrier to see more flight information.  </h2>
            <DepAirSelector flights={this.state.flights} onDepAirSelected={this.handleDepAirSelected} />
            <DepAirDetail flight={selectedDepAir} /> 
        </div> 
      </div> 
    );
   }
  }

export default FlightContainer;

