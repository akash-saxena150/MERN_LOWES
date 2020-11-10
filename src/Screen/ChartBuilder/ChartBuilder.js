import React, { Component } from "react";
import RestrictAdminAccess from "../../Component/RestrictAdminAccess";
import ChartSchema from "../../config/chartSchema";
import Step01 from "./Step01";
import Styles from "./ChartBuilder-styles";
import { Grid, Typography } from "@material-ui/core";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";
class ChartBuilder extends Component {
  constructor() {
    super();
    this.chartData = { ...ChartSchema };
    this.state = { step: 1, actualStep: 1 };
  }
  step01 = data => {
    this.chartData.chartTypes = data;
    this.chartData.props.type = data.chartType;
    this.setState({ step: 2, actualStep: 2 });
  };
  step02 = data => {
    this.chartData.chart = data;
    this.setState({
      step: 3,
      actualStep: this.chartData.chartTypes.dataType === "singleSeries" ? 4 : 3
    });
  };
  step03 = data => {
    this.chartData.categories[0].category = data;
    this.setState({ step: 4, actualStep: this.state.actualStep + 1 });
  };
  modifySchema = (step, data) => {
    switch (step) {
      case 1:
        this.step01(data);
        break;
      case 2:
        this.step02(data);
        break;
      case 3:
        this.step03(data);
        break;
    }
  };
  render() {
    const { step, actualStep } = this.state;
    return (
      <Grid container style={Styles.container} direction='column'>
        <Grid item>
          <Typography variant='subtitle1'>
            <strong>Step {step}</strong>
          </Typography>
        </Grid>
        {actualStep === 1 && (
          <Step01
            chartSchema={ChartSchema}
            modifySchema={this.modifySchema}
            Styles={Styles}
          />
        )}
        {actualStep === 2 && (
          <Step02
            chartSchema={ChartSchema}
            modifySchema={this.modifySchema}
            Styles={Styles}
          />
        )}
        {actualStep === 3 && (
          <Step03
            chartSchema={ChartSchema}
            modifySchema={this.modifySchema}
            Styles={Styles}
          />
        )}
        {actualStep === 4 && (
          <Step04
            chartSchema={ChartSchema}
            chartData={this.chartData}
            modifySchema={this.modifySchema}
            Styles={Styles}
          />
        )}
      </Grid>
    );
  }
}
export default RestrictAdminAccess(ChartBuilder);
