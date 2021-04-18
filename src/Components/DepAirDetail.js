import React from 'react';

const DepAirDetail = (props) => {
  if (!props.flight) return null;
  return (
    <div>
      <h2> Flight Details</h2>

      <h3> Flight Number: {props.flight.outflightno} </h3> 
      <h3> Ticket Price: {props.flight.originalcurrency}  { props.flight.originalprice} </h3>
      <h3> Class: {props.flight.outflightclass} </h3> 
      <h3> Departure time: {props.flight.outdeparttime} </h3> 
      <h3> Arrival time: {props.flight.outarrivaltime} </h3> 

    </div> 
  );
}

export default DepAirDetail;
