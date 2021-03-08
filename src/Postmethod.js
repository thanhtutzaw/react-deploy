import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

class Postmethod extends Component {
  state = {
    title: "",
    body: "",
    userId: "",
  };
  handleChange = (e) => {
      
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
     axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response)
        ;
        // this.setState({
        //   posts: response.data,
        // });
      })

      .catch((error) => {
        console.log(error);
        // this.setState({
        //   msg: "get method fake api error link not fount 404",
        // });
      });
  };
  render() {
    const { title, body, userId } = this.state;
    return (
      <div>
        <h1>13. Post method</h1>

        <form onSubmit={this.handleSubmit}>
          <TextField
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            onChange={this.handleChange}
            value={title}
            id="standard-basic"
            label="title"
            name="title"
          />
          <TextField
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            onChange={this.handleChange}
            value={body}
            id="filled-basic"
            label="body"
            name="body"
            variant="filled"
          />
          <TextField
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            onChange={this.handleChange}
            value={userId}
            id="outlined-basic"
            label="userId"
            name="userId"
            variant="outlined"
          />

          <div>
            <Button
              type="submit"
              onClick={this.handletoggle}
              variant="contained"
              color="primary"
            >
              {" "}
              Submit
            </Button>
          </div>
        </form>
        
        <hr />
      </div>
    );
  }
}

export default Postmethod;
