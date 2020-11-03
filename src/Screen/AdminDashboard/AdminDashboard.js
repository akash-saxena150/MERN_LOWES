import React, { Component } from "react";
import DummyData from "../../config/dummyData.json";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import { colors } from "../../service.js";
class AdminDashboard extends Component {
  render() {
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit'>A</IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify='center'
          alignItems='center'
          spacing={2}
          style={{ width: "50%", height: "80vh", margin: "0 auto" }}
        >
          <Grid container justify='center' alignItems='center' item xs={6}>
            <Grid
              container
              justify='center'
              alignItems='center'
              className='block'
            >
              <Typography variant='h2' color='secondary'>
                Users
              </Typography>
            </Grid>
          </Grid>
          <Grid justify='center' alignItems='center' item xs={6}>
            <Grid
              container
              justify='center'
              alignItems='center'
              className='block'
            >
              <Typography variant='h2' color='secondary'>
                Domains
              </Typography>
            </Grid>
          </Grid>
          <Grid justify='center' alignItems='center' item xs={6}>
            <Grid
              container
              justify='center'
              alignItems='center'
              className='block'
            >
              <Typography variant='h2' color='secondary'>
                Modules
              </Typography>
            </Grid>
          </Grid>
          <Grid justify='center' alignItems='center' item xs={6}>
            <Grid
              container
              justify='center'
              alignItems='center'
              className='block'
            >
              <Typography variant='h2' color='secondary'>
                Graphs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default AdminDashboard;
