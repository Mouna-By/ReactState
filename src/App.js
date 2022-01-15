
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
    this.state = {show: false, showw: false};
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }
  
  hide = () => {
    this.setState({showw: !this.state.showw})
  }


  render() {
    return (
      
      <div className="App">
         
        <NavBar/>  
        <div>
        <Button style={{marginTop : "35px"}} variant="outline-primary" onClick={this.toggle}>{this.state.show? 'Hide Profile':'Show Profile'}</Button>
        {this.state.show && <Person/> }
        </div>
        <br/>
        <div>
        <Button variant="outline-secondary" onClick={this.hide}>Show | Hide</Button>
        {this.state.showw ? <Counter /> : <h4>Click on the button to show the counter</h4>} 
        </div>   
        <Footer/>
      </div>
    )
  }
}