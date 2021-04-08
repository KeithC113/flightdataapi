import React, {Component, useEffect, useState } from 'react';
import flightDataXML from '../public/flightdata_A.xml';

axios.get(flightDataXML, {
  "Content-Type": "application/xml; charset=utf-8"
})
.then((response) => {
  console.log('Your xml file as string', response.data);
});

class App extends Component{
  constructor(props){
    super(props);
  this.state = { 
     items:[],
     isloaded: false
    }
  }
 componentDidMount() {
    fetch('C:\Users\Keith Campbell\AppData\Local\Temp\Temp1_flighdata_A (1).zip\flighdata_A.xml')
      .then(res => res.json())
    .then(json => {
      this.setState({
            isloaded: true,
           items: json 
        })
      });
}

  render() {
  var { isloaded, items} =this.state;

   if (!isloaded){
      return <div>Loading...</div>;
    }
   else {
      return (
      <div className="App">
       Data has been loaded
     </div>
    );
    }
  }
}

export default App;
