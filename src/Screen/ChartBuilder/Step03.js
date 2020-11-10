import React, { Component } from "react";
import FormGenerator from "../../Component/FormGenerator";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
class Step02 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { formObj: [] };
  }
  componentDidMount() {
    const data = { ...this.props.chartSchema.categories[0].category };
    const formObj = [];
    for (let i = 0; data[i]; i++) {
      formObj.push({
        field: `label-${i}`,
        type: "text",
        displayName: "label",
        value: data[i]["label"],
        err: false,
        required: false,
        errMsg: `Enter a valid label`
      });
    }
    this.setState({ formObj });
  }
  onFormFieldsChange = data => {
    const { modifySchema } = this.props;
    let schemaObj = [];
    for (let i = 0; data[i]; i++) {
      schemaObj[i] = { label: data[i].value };
    }
    modifySchema(3, schemaObj);
  };
  addLabel = () => {
    let tempFormObj = [...this.state.formObj];
    tempFormObj.push({
      field: `label-${tempFormObj.length}`,
      type: "text",
      displayName: "label",
      value: `label-${tempFormObj.length}`,
      err: false,
      required: false,
      errMsg: `Enter a valid label`
    });
    this.setState({ formObj: tempFormObj });
  };
  render() {
    let { formObj } = this.state;
    return (
      <Grid item container direction='column'>
        <Grid item>
          <Typography varian='subtitle1'>
            <strong>Enter the categories</strong>
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <IconButton color='primary' onClick={this.addLabel}>
            <span className='material-icons'>add_box</span>
          </IconButton>
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
