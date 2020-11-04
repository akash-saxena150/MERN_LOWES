import React, { Component } from "react";
import Login from "../Screen/Login/Login";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "../Screen/UserDashboard/UserDashboard";
import AdminDashboard from "../Screen/AdminDashboard/AdminDashboard";
import Users from "../Screen/Users/Users";
import CreateUser from "../Screen/CreateUser/CreateUser";
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admindashboard/:id' component={AdminDashboard} />
        <Route path='/userdashboard' component={UserDashboard} />
        <Route path='/login' component={Login} />
        <Route path='/users/:id?' component={Users} />
        <Route path='/createuser/:id?' component={CreateUser} />
        <Route path='/' component={Login} />
      </Switch>
    );
  }
}
export default Routes;
