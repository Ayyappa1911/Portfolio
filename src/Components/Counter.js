import React, { Component } from 'react'

class Counter extends Component {
  
    constructor()
    {
        super()
        this.state = {
            count: 0
        }
    }

    Increment()
    {
        // this.setState({
        //     count: this.state.count+1
        // },
        // () => {
        //     console.log('Callback value', this.state.count)
        // })

        this.setState((preState) => ({
            count: preState.count+1
        }))
    }

    incrementFive()
    {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
    return (
      <div>
        <h2> Count - {this.state.count} </h2>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
