export default {
  chartTypes: [
    {
      name: "Single Series",
      type: "singleSeries",
      chartTypes: [
        { type: "pie2d", name: "Pie Chart" },
        { type: "line", name: "Line Chart" },
        { type: "bar2d", name: "Bar Chart" }
      ]
    },
    {
      name: "Multi Series",
      type: "multiSeries",
      chartTypes: [
        { type: "msline", name: "Line chart" },
        { type: "mscolumn2d", name: "Bar chart" }
      ]
    }
  ],
  chart: {
    caption: "",
    subCaption: "",
    xAxisName: "",
    yAxisName: "",
    lineThickness: 2,
    theme: "fusion"
  },
  props: {
    type: "line", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json" // Data type
  },
  data: {
    singleSeries: [{}],
    multiSeries: [{ seriesname: "", data: [] }]
  },
  categories: [{ category: [{ label: "" }] }]
};
