import React, { Component } from 'react'

export class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Vinho do Porto'
    }
  }
  /*state = {
    text: "Madeira"
  }*/

  handleClick = () => {
    this.setState({ text: 'Muscatel' })
  }
  render() {
    return (
      <>
        <h3>Portugal {this.state.text}</h3>
        <button onClick={this.handleClick}>Button</button>
      </>
    )
  }
}
