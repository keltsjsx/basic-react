import React, { useState } from "react";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setFullname(`${firstname} ${lastname}`);
    resetValue();
  };

  const resetValue = () => {
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React JS</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
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
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="card-footer">
                Hello, my name is {fullname ? fullname : "...."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
