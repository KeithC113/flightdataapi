import React from 'react';

const DepAirSelector = (props) => {
  const options = props.flights.map(flight => {
    return <option value={flight.depair} key={flight.depair}>{flight.depair} {flight.destair} {flight.carrier}</option>
  })

  function handleChange(event) {
    props.onDepAirSelected(event.target.value);
  }

  return (
    <select id="flight-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Departure airport | Destination airport | Carrier </option>
      {options}
    </select>
  )
}

export default DepAirSelector;