import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { get, KeyVars, getUserDetails, remove } from "../service";
const Styles = {
  logout: { cursor: "pointer" }
};
class Header extends Component {
  constructor() {
    super();
    this.state = { fName: null };
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
    if (userDetails) this.setState({ fName: userDetails });
  }
  logout = () => {
    remove(KeyVars.WINID);
    remove(KeyVars.ISADMIN);
    this.setState({ fName: null });
    this.props.history.push("/");
  };
  render() {
    const { fName } = this.state;
    return (
      <AppBar position='static'>
        <Toolbar>
          {fName && (
            <>
              <IconButton color='inherit'>{fName.substring(0, 1)}</IconButton>
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
