import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';
import { getAllReservations } from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  
  componentDidMount() {
    getAllReservations()
      .then((data) => {
        this.setState({reservations: data})
      })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Reservations reservations={this.state.reservations}/>
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
