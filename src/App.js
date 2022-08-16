import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      fullName: "",
    };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      fullName: `${this.state.firstName} ${this.state.lastName}`,
    });
    this.resetValue();
  };

  resetValue = () => {
    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    const { fullName } = this.state;
    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={this.state.firstName}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={this.state.lastName}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Show
                    </button>
                  </form>
                </div>
                <div className="card-footer">
                  Hello, my name is {fullName ? fullName : "..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
