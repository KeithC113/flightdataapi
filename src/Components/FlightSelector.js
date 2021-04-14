import React from 'react';

const FlightSelector = (props) => {
  const options = props.flights.map(flight => {
    return <option value={flight.reservationCode} key={flight.reservationCode}>{flight.carrier}</option>
  })

  function handleChange(event) {
    props.onFlightSelected(event.target.value);
  }

  return (
    <select id="flight-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Flight...</option>
      {options}
    </select>
  )
}

export default FlightSelector;