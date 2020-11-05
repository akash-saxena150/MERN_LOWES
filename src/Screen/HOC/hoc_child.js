import React, { Component } from "react";
import RestrictRoute from "./hoc_01";

class HOC_child extends Component {
  render() {
    return <div>This contains a child</div>;
  }
}
export default RestrictRoute(HOC_child);
