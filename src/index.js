import ReactDOM from "react-dom";
import React, { Component } from "react";
import MainPage from "./Components/Pages/HomePage/MainPage.js";
import NotFound from "./Components/Pages/404/404.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as serviceWorker from "./serviceWorker";

const TITLE = "Giorgio Atanasov | Software Engineer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/home" component={MainPage}></Route>
        <Route component={NotFound} />
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
