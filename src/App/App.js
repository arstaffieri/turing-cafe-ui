import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';
import { getAllReservations } from '../apiCalls';
import Form from '../Form/Form';

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

  addReservation = (newReservation) => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
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
