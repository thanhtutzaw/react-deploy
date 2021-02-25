import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fun from './Funevent';
import Clevent from './Clevent';
import State from './Setstate';
// import React, { Component } from 'react';
// class App extends Component {
//   // state = {  }
//   constructor(){
//     super()
//     this.state={
//       message:'Change me !'
//     };
//   }
//   changeMessage(){
//     this.setState({message:'React text changed!'})
//   }

//   render() { 
//     return (
//          <div className="App">
//             <header className="App-header">
//               <h1>hey class component</h1>
//               <button onClick={()=>this.changeMessage()}>Change</button>
//               <h3>{this.state.message}</h3>
//             </header>
//          </div> 
         
//          );
//   }


// }
 
// export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Fun />
<Clevent />
<State />

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Than Htut Zaw
        </a> */}
      </header>
    </div>
  );
}

export default App;
