import React, { Component } from "react";
import RestrictAdminAccess from "../../Component/RestrictAdminAccess";
import ChartSchema from "../../config/chartSchema";
import Step01 from "./Step01";
class ChartBuilder extends Component {
  modifySchema(data) {
    console.log(data);
  }
  render() {
    return (
      <>
        <Step01 chartSchema={ChartSchema} modifySchema={this.modifySchema} />
      </>
    );
  }
}
export default RestrictAdminAccess(ChartBuilder);
