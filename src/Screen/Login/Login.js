import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Styles from "./Login-style";
import FormGenerator from "../../Component/FormGenerator";
import { formData, login, set, KeyVars, callAPI } from "../../service";
import IsUserLoggedin from "../../Component/IsUserLoggedin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { loginCreds: formData.loginCreds };
  }
  loginSuccess = data => {
    console.log("Login data", data);
    set("auth", data.data.token);
    this.props.history.push(
      data.data.isAdmin ? `/admindashboard` : "/userdashboard"
    );
  };
  errLogging = err => {
    console.log(err);
  };
  onLogin = data => {
    callAPI("auth", "post", this.loginSuccess, this.errLogging, {
      email: data[0].value,
      password: data[1].value
    });
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
export default IsUserLoggedin(Login);
