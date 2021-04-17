import React from 'react';

const FlightDetail = (props) => {
  if (!props.flight) return null;
  return (
    <h3>{props.flight.reservation}</h3>
  );
}

export default FlightDetail;
