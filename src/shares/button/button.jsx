import React, { Component } from 'react'
import "./button.scss"
export class Button extends Component {
  render() {
    return (
      <div className='btn__box'>
        <button className='btn'>{this.props.children}</button>
      </div>
    )
  }
}

export default Button