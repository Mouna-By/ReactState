
import './App.css';
import {Button} from 'react-bootstrap';

import Person from './components/Person';
import Counter from './components/Counter';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import React, { Component } from 'react'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      
      <div className="App">
        <div>
        <NavBar/>  

        <Button style={{marginTop : "35px"}} variant="outline-primary" onClick={this.toggle}>Show Profile</Button>
        {this.state.show ? <Person/> : null}
        </div>
        <br/>
        <div>
        <Button variant="outline-secondary" onClick={this.toggle}>count</Button>
        {this.state.show ? <Counter /> : null} 
        </div>   
        <Footer/>
      </div>
    )
  }
}