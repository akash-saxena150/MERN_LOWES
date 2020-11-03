import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Styles from "./Login-style";
import FormGenerator from "../../Component/FormGenerator";
import { formData } from "../../service";

class Login extends Component {
  constructor() {
    super();
    this.state = { loginCreds: formData.loginCreds };
  }
  onLogin = data => {
    console.log("Login data", data);
  };
  render() {
    const { loginCreds } = this.state;
    return (
      <Grid
        container
        style={Styles.loginContainer}
        justify='center'
        alignItems='center'
      >
        {loginCreds && (
          <FormGenerator formObj={loginCreds} formSubmit={this.onLogin} />
        )}
      </Grid>
    );
  }
}
export default Login;
