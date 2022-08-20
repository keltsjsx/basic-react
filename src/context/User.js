import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Ini inisialisasi UserContext nya
const UserContext = createContext();

// Ini Functional Component nya
const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  // function ngambil users API
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
