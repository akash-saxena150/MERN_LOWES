import React, { Component } from "react";
import { get, KeyVars } from "../service";
function IsUserLoggedin(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.props = props;
    }
    componentDidMount() {
      let auth = get(KeyVars.AUTH);
      let isAdmin = get(KeyVars.ISADMIN) === "true" ? true : false;
      let redirectURL = "";
      if (auth) {
        ///Make an API call to validate token
        redirectURL = "/userdashboard";
        if (isAdmin) redirectURL = "/admindashboard";
        this.props.history.push(redirectURL);
      }
    }
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}
export default IsUserLoggedin;
