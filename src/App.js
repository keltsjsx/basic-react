import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const { data } = response;
    if (data) {
      this.setState({
        user: data,
      });
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { username } = this.state.user;
    return (
      <>
        <h1>Hello, my name is {username}</h1>
      </>
    );
  }
}

export default App;
