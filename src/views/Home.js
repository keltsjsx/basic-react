import React, { useContext } from "react";
import AuthenticatedUser from "../components/AuthenticatedUser";
import { UserProvider } from "../context/User";

const Home = () => {
  return (
    <div className="container">
      <UserProvider>
        <AuthenticatedUser />
      </UserProvider>
    </div>
  );
};

export default Home;
