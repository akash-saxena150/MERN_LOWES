import React, { Component } from "react";
import DummyData from "../../config/dummyData.json";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { colors, getUserDetails } from "../../service.js";
import Header from "../../Component/Header.js";
import RestrictAdminAccess from "../../Component/RestrictAdminAccess.js";
class AdminDashboard extends Component {
  render() {
    return (
      <>
        <Grid
          container
          justify='center'
          alignItems='center'
          spacing={2}
          style={{ width: "50%", height: "80vh", margin: "0 auto" }}
        >
          <Grid container justify='center' alignItems='center' item xs={6}>
            <Grid
              item
              container
              justify='center'
              alignItems='center'
              className='block'
            >
              <Typography variant='h2' color='secondary'>
                <Link to='/users'>Users</Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid justify='center' alignItems='center' container item xs={6}>
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
          <Grid justify='center' alignItems='center' container item xs={6}>
            <Grid
              item
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
          <Grid justify='center' alignItems='center' container item xs={6}>
            <Grid
              item
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
export default RestrictAdminAccess(AdminDashboard);
