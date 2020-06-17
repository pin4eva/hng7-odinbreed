import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact component={ErrorPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
