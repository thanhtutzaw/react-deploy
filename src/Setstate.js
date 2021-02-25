import React, { Component } from 'react';
import './App.css';
// var num = 0;

var num = 0;
var numtwo = num;
var interval;

class State extends Component {
    
    state = {
        count: 0,
        // interval:num
        num:0
    }
       
    increase(){
        interval = setInterval(function(){
    num = ++num;
    console.log(num);
    // this.state({
    //     // num:this.state.num++
    // })
}, 100);


        // this.setState({

            
        //     num: this.state.num
        // },()=>{console.log("callback increase value= ",this.state.count)} )
        
        


    this.setState({
        // num:this.state.setInterval()
        // num: this.state.num+1
        // interval:this.state.num
        // setInterval();
        // num:this.state.interval

        // var : num = 0,
        // num:++num,
        // num: this.state.num


        
    })
    


   
        
        
        // this.setState({
        //     count: this.state.count +1
        // },()=>{console.log("callback increase value= ",this.state.count)} )

    
    }

    noincrease(){
            clearInterval(interval);
    }

    decrease(){
        this.setState({
            count: this.state.count -1
        },()=>{console.log("callback decrease value= ",this.state.count)} )
    }
    render() { 
        return ( 

            <div>
                
                <button onMouseOver={()=>this.increase()}  onMouseOut={()=>this.noincrease()} className="icon">+</button>
                <h3>Count {this.state.num}</h3>
                <button onMouseOver={()=>this.decrease()} className="icon">-</button>
            </div>
         );
    }
}
 
export default State;
