import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users/2"
      );
      const { data } = response;
      if (data) {
        setUser(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
