import React, { useState, useEffect } from "react";
import axios from "axios";

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [identifier, setIdentifier] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const { data } = response;
      if (data) {
        setUsers(data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${identifier}`
      );
      const { data } = response;
      if (data) {
        setUser(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [identifier]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="identifier"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
            {loading ? (
              <div>Loading...</div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.phone}</td>
                  </tr>
                  {/* {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr>
                  );
                })} */}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
