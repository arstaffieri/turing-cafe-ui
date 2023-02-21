import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [
        { id: 1, name: 'Angie', date: '8/8', time: '7:00', number: 3 },
        { id: 2, name: 'Estelle', date: '8/9', time: '7:00', number: 3 },
        { id: 3, name: 'Christine', date: '8/10', time: '7:00', number: 3 }
      ]
    }
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
