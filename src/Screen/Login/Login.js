import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Styles from "./Login-style";
import FormGenerator from "../../Component/FormGenerator";
import { formData, login, set, KeyVars } from "../../service";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { loginCreds: formData.loginCreds };
  }
  onLogin = data => {
    const loginInfo = login({
      username: data[0].value,
      password: data[1].value
    });
    console.log(loginInfo);
    if (!loginInfo.error) {
      set(KeyVars.WINID, loginInfo.winId);
      set(KeyVars.ISADMIN, loginInfo.isAdmin || false);
      this.props.history.push(`/admindashboard`);
    }
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
