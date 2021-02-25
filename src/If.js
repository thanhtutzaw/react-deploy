import React, { Component } from 'react';
class If extends Component {
    state = { 
        condition : "hiddd"
     }
    render() { 
        // return ( 
        //     <div>
        //         <h2>10. Condtition test</h2>
        //         answer is condition={this.state.condition}
             
               
        //     </div>

        //  );

           
                // if(this.state.condition == "hi")
                // return(
                //     <h1>hi</h1>
                // )
                // else{
                //     return(
                //     <h1>no</h1>
                // )
               
        // }
//         { return this.state.condition == "hi" ?  <p>say hi</p> : <p>say other</p>    
         

//  }


if(this.state.condition == "hi")
    return(
    <div>
        <h2>10. Condtition test</h2>
         you typed={this.state.condition}<br />
        answer is hi
        <h3>same hi</h3><hr />
    </div>
    )

else{
    return(
        <div>
            <h2>10. Condtition test</h2>
         you typed={this.state.condition}<br />
        answer is hi
            <h3>different</h3><hr />
        </div>)
}


    

            //  <div><h1>10. Condtition test</h1>
            //      answer is condition={this.state.condition}
            //     {this.state.condition == "hi" ? <p>say hi</p> : <p>say other</p>}
            //     if statement
                

            //     {/* {if(this.state.condition == "hi") }
                
            //      return(10. Condtition test) 
                
                
            //     else return (10. Condtition test) */}
                
                
            // <hr/>
            // </div>


        

            

            // answer is condition={this.state.condition}
             
        


           
               
            
    }
}
 
export default If;