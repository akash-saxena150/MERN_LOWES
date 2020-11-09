import React, { Component } from "react";
import { get, set, KeyVars, callAPI } from "../service";
function RestrictUserAccess(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = { restrictRoute: true };
    }
    authSuccess = data => {
      let adminAccess = data.data.is_admin;
      if (!adminAccess && data.data.win_id) {
        set(KeyVars.FNAME, data.data.fName);
        set(KeyVars.ISADMIN, false);
        this.setState({ restrictRoute: false });
      }
    };
    autherr = err => {
      console.log(err);
    };
    componentDidMount() {
      // let winId = get(KeyVars.WINID);
      // if (winId) {
      //   this.setState({ restrictRoute: false });
      // }
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
export default RestrictUserAccess;
