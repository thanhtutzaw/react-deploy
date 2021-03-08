import axios from "axios";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

class Getmethodfakerestapi extends Component {
  state = {
    posts: [],
    isActive: true,
    msg: "",
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
        this.setState({
          msg: "get method fake api error link not fount 404",
        });
      });
  }

  handletoggle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    const isActive = this.state.isActive;
    return (
      <div>
        {this.state.msg ? <div className="error">{this.state.msg}</div> : null}
        <h1>12. get method fake rest api with axios</h1>
        lists of fake api{" "}
        <Button
          onClick={this.handletoggle}
          variant="contained"
          color="secondary"
        >
          Toggle
        </Button>
        {this.state.posts
          ? this.state.posts.map((post) => (
              <div className={isActive ? "list" : null} key={post.id}>
                {post.id}. {post.title}
              </div>
            ))
          : null}
        <hr />
      </div>
    );
  }
}

export default Getmethodfakerestapi;
