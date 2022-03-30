import React, { Component } from 'react'

class ClassClick extends Component {

  classclick() {
    console.log('Clicked the button')
  }

  render() {
    return (
      <div>
          <button onClick={this.classclick}>Click me</button>
      </div>
    )
  }
}

export default ClassClick