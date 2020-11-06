import React, { Component } from "react";
import { get, KeyVars } from "../service";
function RestrictUserAccess(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = { restrictRoute: true };
    }
    componentDidMount() {
      let winId = get(KeyVars.WINID);
      if (winId) {
        this.setState({ restrictRoute: false });
      }
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
