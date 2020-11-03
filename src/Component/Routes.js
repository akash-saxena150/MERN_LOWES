import React, { Component } from "react";
import Login from "../Screen/Login/Login";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "../Screen/UserDashboard/UserDashboard";
import AdminDashboard from "../Screen/AdminDashboard/AdminDashboard";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admindashboard' component={AdminDashboard} />
        <Route path='/userdashboard' component={UserDashboard} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    );
  }
}
export default Routes;
