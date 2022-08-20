import React, { useContext } from "react";
import AuthenticatedUser from "../components/AuthenticatedUser";
import { UserProvider } from "../context/User";
import { useRecoilState } from "recoil";
import { Theme } from "../store";

const Home = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(Theme);
  return (
    // <div className="container">
    //   {/* <UserProvider>
    //     <AuthenticatedUser />
    //   </UserProvider> */}
    //   You are selecting {currentTheme} theme.
    // </div>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.target.value)}
              className="form-control"
            >
              <option value="dark">Dark Theme</option>
              <option value="light">Light Theme</option>
            </select>
          </div>
        </div>
        <div className="mt-2">You are selecting {currentTheme} theme.</div>
      </div>
    </div>
  );
};

export default Home;
