import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/authentication/Login.js";

export default function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
