import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { get, KeyVars, getUserDetails, remove } from "../service";
import { Link } from "react-router-dom";
const Styles = {
  logout: { cursor: "pointer" }
};
class Header extends Component {
  constructor() {
    super();
    this.state = { fName: null, isAdmin: false };
  }
  componentDidMount() {
    this.updateUserDetails();
  }
  componentDidUpdate() {
    this.updateUserDetails();
  }
  shouldComponentUpdate(nxtProps, nxtState) {
    if (!(this.state.fName === nxtState.fName) || !this.state.fName) {
      return true;
    }
    return false;
  }
  updateUserDetails() {
    const userDetails = get(KeyVars.FNAME);
    const isAdmin = get(KeyVars.ISADMIN) === "true" ? true : false;
    if (userDetails) this.setState({ fName: userDetails, isAdmin });
  }
  logout = () => {
    remove(KeyVars.WINID);
    remove(KeyVars.ISADMIN);
    remove(KeyVars.AUTH);
    remove(KeyVars.FNAME);
    this.setState({ fName: null });
    this.props.history.push("/");
  };
  render() {
    const { fName, isAdmin } = this.state;
    return (
      <AppBar position='static'>
        <Toolbar>
          {fName && (
            <>
              <Link to={`${isAdmin ? "/admindashboard" : "/userdashboard"}`}>
                <IconButton color='inherit'>{fName.substring(0, 1)}</IconButton>
              </Link>
              <div style={{ flexGrow: 1 }}>&nbsp;</div>
              <div>
                <span
                  className='material-icons'
                  onClick={this.logout}
                  style={Styles.logout}
                >
                  exit_to_app
                </span>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
