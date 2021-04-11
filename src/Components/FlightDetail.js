import React from 'react';

const FlightDetail = (props) => {
  if (!props.flight) return null;
  return (
    <h3>{props.flight.name}</h3>
  );
}

export default FlightDetail;
