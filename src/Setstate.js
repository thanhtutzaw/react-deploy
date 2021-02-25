import React, { Component } from 'react';
import './App.css';
// var num = 0;

var num = 0;
var numtwo = num;
var interval;

class State extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    
    // state = {
    //     count: 0,
    //     // interval:num
    //     num:0
    // }
       
    increase(){
       this.interval = setInterval(() => {
           this.setState(prevState=>({
               count :prevState.count +1
        
        }))
       }, 100);
    }



    // num = ++num;
    // console.log(num);
    // this.state({
    //     // num:this.state.num++
    // })
 // }, 100);


        // this.setState({

            
        //     num: this.state.num
        // },()=>{console.log("callback increase value= ",this.state.count)} )
        
        


    // this.setState({
        // num:this.state.setInterval()
        // num: this.state.num+1
        // interval:this.state.num
        // setInterval();
        // num:this.state.interval

        // var : num = 0,
        // num:++num,
        // num: this.state.num


        
    // })
    


   
        
        
        // this.setState({
        //     count: this.state.count +1
        // },()=>{console.log("callback increase value= ",this.state.count)} )

    
    // }

    noincrease(){
            clearInterval(this.interval);
    }

    decrease(){
           this.interval = setInterval(() => {
           this.setState(prevState=>({
               count :prevState.count - 1
        
        }))
       }, 100);
        // this.setState({
        //     count: this.state.count -1
        // },()=>{console.log("callback decrease value= ",this.state.count)} )
    }
    nodecrease(){
            clearInterval(this.interval);
    }
    render() { 
        const {count} = this.state
        return ( 

            <div>
                
                <button onMouseOver={()=>this.increase()}  onMouseOut={()=>this.noincrease()} className="icon padding">+</button>
                <h3>Count {count}</h3>
                <button onMouseOver={()=>this.decrease()} onMouseOut={()=>this.nodecrease()}  className="icon padding">-</button>
            </div>
         );
    }
}
 
export default State;
