import React, { Component } from "react";
import HOC_child from "./hoc_child";

class HOC extends Component {
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
        <div>This is a HOC</div>
        {!this.state.restrictRoute && <HOC_child />}
      </>
    );
  }
}
export default HOC;
