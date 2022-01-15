import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        console.log("constructor()")
        super(props);
        this.state = {count : 0, timer:0};
    }
    
    
    increment = () => {
        this.setState({ count: this.state.count +1})
    }

    decrement= () => {
        this.setState({count: this.state.count > 0 ? this.state.count -1 : this.state.count})
    }

    componentDidMount() {
        console.log("component DidMount")
        setInterval(()=>this.setState({...this.state,timer:this.state.timer+1}),1000)
    }

    componentDidUpdate() {
        console.log("component updated")
    }

    componentWillUnmount() {
        console.log("component WillUnMount")
    }


    render() {
        console.log('rendring')
        return (
            <div style={{marginTop : "15px", marginBottom : "15px"}}>
                <button onClick={this.increment}>+</button>
                <h4>{this.state.count}</h4>
                <button onClick={this.decrement}>-</button>
                <p> {this.state.timer} </p>
            </div>
        )
    }
}