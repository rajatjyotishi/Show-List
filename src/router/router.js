import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../components/dashboard";
import PageNotFound from "../components/page-not-found";

const ApplicationRouter = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
