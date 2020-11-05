import React, { Component } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { msgConfig } from "../service";
import RenderCustomField from "./RenderCustomField";
class FormGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { formObj: [...props.formObj], formError: false };
  }
  styles = {
    loginForm: { width: "100%" }
  };
  getIndx(key, arr) {
    for (let i = 0; arr[i]; i++) {
      if (arr[i].field === key) {
        return i;
      }
    }
  }
  changeVal = (e, key, type) => {
    const tempState = [...this.state.formObj];
    const indx = this.getIndx(key, tempState);
    tempState[indx].value =
      type && type === "switch" ? e.target.checked : e.target.value;
    const tempErr = this.validateField(tempState[indx]);
    tempState[indx].err = tempErr;
    this.setState({ formObj: tempState });
  };
  validateForm = () => {
    let errCount = 0;
    this.state.formObj.map(field => {
      if (field.err) {
        errCount++;
      }
      if (field.required && !(field.value.toString().length > 0)) errCount++;
    });
    if (errCount > 0) return true;
    return false;
  };
  validateField = field => {
    let status = field.err;
    switch (field.type) {
      case "email":
        status = !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          field.value
        );
        break;
      default:
        status = false;
    }
    if (field.minLen && field.value.length < field.minLen) status = true;
    if (field.maxLen && field.value.length > field.maxLen) status = true;
    return status;
  };
  onSubmit = e => {
    e.preventDefault();
    const tempFormErr = this.validateForm();
    if (!tempFormErr) this.props.formSubmit(this.state.formObj);
    else this.setState({ formError: true });
  };
  checkEmpty = field => {
    const tempState = [...this.state.formObj];
    const indx = this.getIndx(field.field, tempState);
    if (field.required) {
      if (!(field.value.length > 0)) {
        tempState[indx].err = true;
      }
    } else {
      if (field.value.length === 0) {
        tempState[indx].err = false;
      }
    }
    this.setState({ formObj: tempState });
  };
  resetFormError = () => {
    if (this.state.formError) {
      this.setState({ formError: false });
    }
  };
  render() {
    const { formObj, formError } = this.state;
    const { buttonName } = this.props;

    return (
      <form
        style={this.styles.loginForm}
        onSubmit={e => this.onSubmit(e)}
        noValidate
      >
        <Grid
          item
          container
          xs={12}
          direction='column'
          spacing={2}
          alignItems='center'
          justify='center'
        >
          {formObj.map((field, i) => (
            <Grid item key={`${field.field}-${i}`}>
              <RenderCustomField
                field={field}
                changeVal={this.changeVal}
                checkEmpty={this.checkEmpty}
                resetFormError={this.resetFormError}
              />
            </Grid>
          ))}
          {formError && (
            <Grid item>
              <Typography className='err'>
                {msgConfig.errors.clientErrors.formErr001}
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Button type='submit' variant='contained' color='primary'>
              {buttonName || "Login"}
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default FormGenerator;
