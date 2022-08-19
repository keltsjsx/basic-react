import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const UserIndex = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );

      const { data } = response;

      if (data) {
        setUsers(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>All Posts</h1>
      <hr />
      <div className="row">
        {users.map((entry, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card my-2">
                <div className="card-header">{entry.name}</div>
                <div className="card-body">
                  <div className="mb-4">
                    <a
                      href={`http://${entry.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.website}
                    </a>
                  </div>
                  <NavLink
                    className="btn btn-primary"
                    to={`/users/${entry.id}`}
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserIndex;
