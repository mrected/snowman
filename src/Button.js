import React, { Component } from 'react'

class Button extends Component {
  localFunctionToHandleClick = event => {
    this.props.letterClicked(event)
  }

  render() {
    return (
      <button
        value={this.props.letter}
        disabled={this.props.disabled}
        onClick={this.props.letterClicked}
      >
        {this.props.letter}
      </button>
    )
  }
}

export default Button
