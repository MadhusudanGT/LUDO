import * as React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from "./HNavComponents/Home";
import Contact from "./HNavComponents/Contact";
import Blog from "./HNavComponents/Blog";
import Events from "./Component/events";
import About from "./Component/about";

const root = ReactDOM.createRoot(document.getElementById("root"));

const  firebaseConfig = {
  apiKey: "AIzaSyCT2RjMZ1zgCIUp4J2YqHubcWCHlYAU4Oc",
  authDomain: "react-tracker-206d3.firebaseapp.com",
  projectId: "react-tracker-206d3",
  storageBucket: "react-tracker-206d3.appspot.com",
  messagingSenderId: "181914812270",
  appId: "1:181914812270:web:e2b9df9036d25bddad4b7f",
  measurementId: "G-ME5L6CPH14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
