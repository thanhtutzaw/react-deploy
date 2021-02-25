import React, { Component } from 'react';
import './App.css';

class Clevent extends Component {
    state = {  }
    message(){

        var change = document.getElementById('hi');
        change.classList.toggle('blue')
        
        // change.css({color:black})
        // alert('Your message')
    }
    render() { 
        return ( 
            <button id="pink" onClick={this.message} className="padding">Click me class component</button>
         );
    }
}
 
export default Clevent;