import React, {Component} from 'react'


class Message extends Component
{
    constructor()
    {
        super()
        this.state = {
            message: 'Welcome vistor'
        }
    }

    changeMessage()
    {
        this.setState({
            message: 'You just clicked the button'
        })
    }

    render()
    {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}> click it </button>
            </div>
        )
    }
}

export default Message