import React, { Component } from "react";
import Login from "../Screen/Login/Login";
import { Switch, Route } from "react-router-dom";
import UserDashboard from "../Screen/UserDashboard/UserDashboard";
import AdminDashboard from "../Screen/AdminDashboard/AdminDashboard";
import Users from "../Screen/Users/Users";
import CreateUser from "../Screen/CreateUser/CreateUser";
import HOC from "../Screen/HOC/hoc";
import hoc_child from "../Screen/HOC/hoc_child";
import Header from "./Header";
import Domains from "../Screen/Domains/Domains";
import ChartBuilder from "../Screen/ChartBuilder/ChartBuilder";
class Routes extends Component {
  render() {
    return (
      <>
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/admindashboard' component={AdminDashboard} />
          <Route path='/chartbuilder' component={ChartBuilder} />
          <Route path='/userdashboard' component={UserDashboard} />
          <Route path='/domains' component={Domains} />
          <Route path='/login' component={Login} />
          <Route path='/users/:id?' component={Users} />
          <Route path='/createuser/:id?' component={CreateUser} />
          <Route path='/hoc' component={hoc_child} />
          <Route path='/' component={Login} />
        </Switch>
      </>
    );
  }
}
export default Routes;
