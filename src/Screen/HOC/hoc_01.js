import React, { Component } from "react";
function RestrictRoute(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = { restrictRoute: true };
    }
    componentDidMount() {
      let n = Math.random() * 10;
      console.log(n);
      if (n > 5) this.setState({ restrictRoute: false });
    }
    render() {
      return (
        <>
          <div>I am inside the HOC 01</div>
          {!this.state.restrictRoute && <WrappedComponent />}
        </>
      );
    }
  };
}
export default RestrictRoute;
