import React, { Component } from 'react';
import Button from './Button'
import './css/ButtonPanel.css'

class ButtonPanel extends Component {
  render() {
    return ( 
        <div className="component-button-panel">
          <div>
            <Button name="AC" />
            <Button name="+/-" />
            <Button name="%" />
            <Button name="÷" className="orange"/>
          </div>

          <div>
            <Button name="7" />
            <Button name="8" />
            <Button name="9" />
            <Button name="x" className="orange"/>
          </div>

          <div>
            <Button name="4" />
            <Button name="5" />
            <Button name="6" />
            <Button name="-" className="orange"/>
          </div>

          <div>
            <Button name="1" />
            <Button name="2" />
            <Button name="3" />
            <Button name="+" className="orange"/>
          </div>

          <div>
            <Button name="0" className="wide"/>
            <Button name="." />
            <Button name="=" className="orange" />
          </div>
        </div>
    );
  }
}

export default ButtonPanel;
