import React, { Component } from "react";
import Styles from "./Graph-styles";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    seriesname: "Previous Year",
    data: [
      {
        value: "10000"
      },
      {
        value: "11500"
      },
      {
        value: "12500"
      },
      {
        value: "15000"
      }
    ]
  },
  {
    seriesname: "Current Year",
    data: [
      {
        value: "25400"
      },
      {
        value: "29800"
      },
      {
        value: "21800"
      },
      {
        value: "26800"
      }
    ]
  }
];

const chartConfigs = {
  type: "msline", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Comparison of Quarterly Revenue",
      subCaption: "Test Sub caption",
      xAxisname: "Quarter",
      yAxisName: "Revenues (In USD)",
      numberPrefix: "$",
      plotFillAlpha: "80",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Q1"
          },
          {
            label: "Q2"
          },
          {
            label: "Q3"
          },
          {
            label: "Q4"
          }
        ]
      }
    ],
    // Chart Data
    dataset: chartData
  }
};
class MultiSeriesGraph extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}
export default MultiSeriesGraph;
