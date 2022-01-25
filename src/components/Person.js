import React, { Component } from 'react'

export default class Person extends Component {
    constructor (props){
        super(props);
        this.state={
            fullName:"By Mina",
            bio:"This is my bio",
            imgSrc:"https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            profession:"Web Developer",
            timer:0

        }
        
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
        return (
            <div style={{marginTop : "25px", marginBottom : "15px"}}>
                <img src={this.state.imgSrc} width="300" alt="profile pic" />
                <div style={{marginTop : "45px", marginBottom : "15px"}}>
                    FULLNAME: {this.state.fullName}<br/>
                    BIO: {this.state.bio}<br/>
                    PROFESSION: {this.state.profession}
                </div>
                <h1>{this.state.timer}</h1>
                
            </div>
        )
    }
}
