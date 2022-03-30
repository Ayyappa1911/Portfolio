import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            message: 'Hello'
        }

        this.Click = this.Click.bind(this) //Better to bind in Constructor itself.
    }
    
    Click(){
        this.setState({
            message: 'Good Bye'
        })
    }
  
    render() {
    return (
      <div>
            <div>{this.state.message}</div>
          {/* <button onClick={this.Click.bind(this)}>Click</button> */}
          {/* <button onClick={() => this.Click()}>Click</button> */}
          <button onClick={this.Click}>Click</button>

      </div>
    )
  }
}

export default EventBind