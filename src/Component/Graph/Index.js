import React, { Component } from "react";
import MultiSeries from "./MultiSeries";
import SingleSeriesGraph from "./SingleSeries";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.chartTypes = ["pie2d", "line", "bar2d"];
  }
  render() {
    let { type } = this.props;
    if (type === 1) return <SingleSeriesGraph />;

    return <MultiSeries />;
  }
}
export default Graph;
