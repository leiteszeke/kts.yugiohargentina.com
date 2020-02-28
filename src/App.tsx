// Dependencies
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "#pages/Home/Home";

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
