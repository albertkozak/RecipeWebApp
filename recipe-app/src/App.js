import React from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/authentication/Login.js";
// import Register from "./components/authentication/Register.js";

export default function App() {
  return (
      <Router>
        <div>
          <Navbar />
          {/* <Switch> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            {/* <Route exact path='/Register' component={Register} /> */}
          {/* </Switch> */}
        </div>
      </Router>
  );
}
