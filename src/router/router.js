import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const getRouter = () => (
  <Router>
    SignUp
    <div>
      {/* <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
