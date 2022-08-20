import React from "react";
import Router from "./routes";
import { useRecoilState } from "recoil";
import { Theme } from "./store";

const App = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(Theme);
  const defaultTheme =
    currentTheme == "dark" ? "bg-dark text-white" : "bg-light text-dark";
  return (
    <>
      <div className={`${defaultTheme} vh-100`}>
        <Router />
      </div>
    </>
  );
};

export default App;
