import React, { Component } from "react";
import { get, KeyVars, callAPI, set } from "../service";
function RestrictAdminAccess(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = { restrictRoute: true };
    }
    authSuccess = data => {
      let adminAccess = data.data.is_admin;
      if (adminAccess) {
        set(KeyVars.FNAME, data.data.fName);
        set(KeyVars.ISADMIN, true);
        this.setState({ restrictRoute: false });
      }
    };
    autherr = err => {
      console.log(err);
    };
    componentDidMount() {
      callAPI("auth", "get", this.authSuccess, this.authErr);
    }
    render() {
      return (
        <>
          {!this.state.restrictRoute && <WrappedComponent {...this.props} />}
          {this.state.restrictRoute && (
            <div>You do not have permission to access this page</div>
          )}
        </>
      );
    }
  };
}
export default RestrictAdminAccess;
