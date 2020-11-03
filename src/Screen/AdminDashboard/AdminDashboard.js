import React, { Component } from "react";
import DummyData from "../../config/dummyData.json";
import { Grid, AppBar, Toolbar, IconButton } from "@material-ui/core";
class AdminDashboard extends Component {
  render() {
    return (
      <Grid container>
        <AppBar position='static'>
          <Toolbar>
            <IconButton>A</IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}
export default AdminDashboard;
