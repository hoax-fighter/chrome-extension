import React, { Component } from 'react';

import Header from './components/Header'
import HoaxCheckerForm from './components/HoaxCheckerForm'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HoaxCheckerForm />
      </div>
    );
  }
}

export default App;
