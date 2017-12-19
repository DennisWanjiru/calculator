import React, { Component } from 'react';
import Button from './Button'
import Display from './Display'
import './css/App.css'
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: 0,
      operation: "", 
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(btnName) {
    this.setState({value: btnName})
    console.log(btnName)
  }

  render() {
    return(
      <div className="component-app">        
          <Display value = { this.state.value } />
          <ButtonPanel onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
