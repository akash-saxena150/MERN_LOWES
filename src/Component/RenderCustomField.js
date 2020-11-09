import React, { Component } from "react";
import {
  TextField,
  Switch,
  Typography,
  Select,
  FormControl,
  InputLabel
} from "@material-ui/core";

class RenderCustomField extends Component {
  render() {
    const {
      changeVal,
      checkEmpty,
      resetFormError,
      field,
      disablePass
    } = this.props;
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
            disabled={field.type === "password" && disablePass}
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
        break;
      case "select":
        renderedEl = (
          <FormControl variant='outlined' style={{ minWidth: "180px" }}>
            <InputLabel htmlFor={`${field.field}`}>
              {field.displayName}
            </InputLabel>
            <Select
              native
              value={field.value}
              onChange={e => {
                changeVal(e, field.field);
              }}
              label={field.displayName}
              inputProps={{
                name: field.field,
                id: field.field
              }}
            >
              <option aria-label='None' value='' />
              {Object.keys(field.options).map((key, i) => (
                <option value={key} key={`${key}-${i}-${field.field}`}>
                  {field.options[key].name}
                </option>
              ))}
            </Select>
          </FormControl>
        );
    }
    return renderedEl;
  }
}
export default RenderCustomField;
