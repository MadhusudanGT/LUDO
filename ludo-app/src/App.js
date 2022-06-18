import "./App.css";
import Header from "./HNavComponents/Header";
import React, { useEffect } from "react";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-KQNJ5QB74Q");
    //to report page view
    ReactGa.pageview("/");
  }, []);
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

export default App;
