import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import './App.css';
// import Classes from '@material-ui/core/Class';
class If extends Component {
  // state = {
  //     condition : "hiddd"
  //  }

  constructor(props) {
    super(props);
    this.state = {
      condition: "null",
    };
  }

  handle = (a) => {
    this.setState((prevState) => ({
      condition: a.target.value,
    }));
    // console.log(a.target.value)
    //         // alert(e.target.value)
  };

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

    if (this.state.condition == "hi")
      return (
        <div>
          <h2>10. Condtition test</h2>
          <form noValidate autoComplete="off">
            {/* <TextField  id="standard-basic" label="Standard" /> */}
            {/* <TextField  id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={this.handle}
            />
            <Button variant="contained" color="primary">
              My button
            </Button>
          </form>
          you typed={this.state.condition}
          <br />
          answer is hi
          <h3 className="true">same hi</h3>
          <hr />
        </div>
      );
    else {
      return (
        <div>
          <h2>10. Condtition test</h2>
          <form noValidate autoComplete="off">
            {/* <TextField  id="standard-basic" label="Standard" /> */}
            {/* <TextField  id="filled-basic" label="Filled" variant="filled" /> */}
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              onChange={this.handle}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
            <Button variant="contained" color="primary">
              My button
            </Button>
          </form>
         
          
          you typed={this.state.condition}
          <br />
          real answer is hi
          <h3 className="false">different</h3>
          <hr />
        </div>
      );
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
