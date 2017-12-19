import React from 'react'
import './css/Button.css';

class Button extends React.Component {
   handleClicks () {
        this.props.onChange(this.props.name)
   }
    render() {
        return (
            <div className={`component-button ${this.props.className}`}>
                <button onClick= { this.handleClicks.bind(this) } >{ this.props.name }</button>
            </div>
        )
    }
}

export default Button