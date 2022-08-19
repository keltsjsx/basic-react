import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const Show = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const { data } = response;

    if (data) {
      setUser(data);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>{user.name}</h1>
          <hr />
          <ul>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Show;
