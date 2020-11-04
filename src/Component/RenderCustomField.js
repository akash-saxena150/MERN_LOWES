import React, { Component } from "react";
import { TextField, Switch, Typography } from "@material-ui/core";

class RenderCustomField extends Component {
  render() {
    const { changeVal, checkEmpty, resetFormError, field } = this.props;
    let renderedEl = null;
    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "password":
        renderedEl = (
          <TextField
            error={field.err}
            type={field.type}
            id={field.field}
            value={field.value}
            label={`${field.displayName}${field.required ? "*" : ""}`}
            variant='outlined'
            helperText={field.err ? field.errMsg : ""}
            onChange={e => {
              changeVal(e, field.field);
            }}
            onBlur={e => checkEmpty(field)}
            onFocus={resetFormError}
          />
        );
        break;
      case "switch":
        renderedEl = (
          <>
            <Typography variant='subtitle1'>{`${field.displayName}${
              field.required ? "*" : ""
            }`}</Typography>
            <Switch
              checked={field.value}
              onChange={e => {
                changeVal(e, field.field, field.type);
              }}
              name={`${field.displayName}${field.required ? "*" : ""}`}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </>
        );
    }
    return renderedEl;
  }
}
export default RenderCustomField;
