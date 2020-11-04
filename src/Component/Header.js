import React, { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
class Header extends Component {
  render() {
    const { fName } = this.props;
    return (
      <AppBar position='static'>
        <Toolbar>
          {fName && (
            <IconButton color='inherit'>{fName.substring(0, 1)}</IconButton>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
