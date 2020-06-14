import React, { Component } from "react";
import MainPage from "./MainPage.js";
import NotFound from "./NotFound.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/home" component={MainPage}></Route>
          <Route component={NotFound} />
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
