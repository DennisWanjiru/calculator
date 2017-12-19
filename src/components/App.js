import React, { Component } from 'react';
import Button from './Button'
import Display from './Display'
import './css/App.css'
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return(
      <div className="component-app">        
          <Display />
          <ButtonPanel />
      </div>
    );
  }
}

export default App;
