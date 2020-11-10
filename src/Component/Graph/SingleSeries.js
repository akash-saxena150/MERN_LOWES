import React, { Component } from "react";
import Styles from "./Graph-styles";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "Mon",
    value: "15123"
  },
  {
    label: "Tue",
    value: "14233"
  },
  {
    label: "Wed",
    value: "23507"
  },
  {
    label: "Thu",
    value: "9110"
  },
  {
    label: "Fri",
    value: "15529"
  },
  {
    label: "Sat",
    value: "20803"
  },
  {
    label: "Sun",
    value: "19202"
  }
];

const chartConfigs = {
  type: "line", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Total footfall in Bakersfield Central",
      subCaption: "Last week",
      xAxisName: "Day",
      yAxisName: "No. of Visitors",
      lineThickness: "2",
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};
class SingleSeriesGraph extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}
export default SingleSeriesGraph;
