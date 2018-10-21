import React, { Component } from 'react'
class Button extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="button"
        data-size={this.props.size}
      >
        {this.props.label}
      </div>
    )
  }
}

export default Button
