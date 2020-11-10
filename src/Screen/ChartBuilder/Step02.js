import React, { Component } from "react";
import FormGenerator from "../../Component/FormGenerator";
import { Grid, Typography } from "@material-ui/core";
class Step02 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { formObj: [] };
  }
  componentDidMount() {
    const data = { ...this.props.chartSchema.chart };
    console.log("Data", data);
    const formObj = [];
    for (let key in data) {
      formObj.push({
        field: key,
        type: "text",
        displayName: key,
        value: data[key],
        err: false,
        required: false,
        errMsg: `Enter a valid ${key}`
      });
    }
    console.log("formObj", formObj);
    this.setState({ formObj });
  }
  onFormFieldsChange = data => {
    const { modifySchema } = this.props;
    let schemaObj = {};
    for (let i = 0; data[i]; i++) {
      schemaObj[data[i].field] = data[i].value;
    }
    modifySchema(2, schemaObj);
  };
  render() {
    let { formObj } = this.state;
    return (
      <Grid item container direction='column'>
        <Grid item>
          <Typography varian='subtitle1'>
            <strong>Enter the graph details</strong>
          </Typography>
        </Grid>
        <Grid item>
          {formObj.length > 0 && (
            <FormGenerator
              formObj={formObj}
              formSubmit={this.onFormFieldsChange}
              buttonName='Save and proceed'
            />
          )}
        </Grid>
      </Grid>
    );
  }
}
export default Step02;
