import React, { Component } from "react";
import { get, KeyVars } from "../service";
function RestrictAdminAccess(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = { restrictRoute: true };
    }
    componentDidMount() {
      let winId = get(KeyVars.WINID);
      let adminAccess = get(KeyVars.ISADMIN) === "true" ? true : false;
      if (winId && adminAccess) {
        this.setState({ restrictRoute: false });
      }
    }
    render() {
      return (
        <>
          {!this.state.restrictRoute && <WrappedComponent {...this.props} />}
          {this.state.restrictRoute && (
            <div>You do not have permission to access this route</div>
          )}
        </>
      );
    }
  };
}
export default RestrictAdminAccess;
