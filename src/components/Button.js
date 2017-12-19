import React from 'react'
import './css/Button.css';

class Button extends React.Component {
    render() {
        return (
            <div className={`component-button ${this.props.className}`}>
                <button>{ this.props.name }</button>
            </div>
        )
    }
}

export default Button