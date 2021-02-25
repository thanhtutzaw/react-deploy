import React, { Component } from 'react';

class Bind extends Component {
    state = {  }
    constructor(){
        super()
        this.state={
        message:"Bind me!"
        }
        
        this.handle = this.handle.bind(this)

    }
    // handle =()=>{
    //     this.setState({
    //         message:"you changed me!"
    //     })
    // }
    handle =()=>{
        this.setState({
            message:"you changed me!"
        })
    }


    render() { 
        return ( 
            <div>
            <h3>{this.state.message}</h3>
            {/* <button onClick={this.handle}  className="padding">9. Bind Event</button> */}
            <button onClick={this.handle}  className="padding">9. Bind Event</button>
            
       
            </div>
            
         );
    }
}
 
export default Bind;