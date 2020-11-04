import React, { Component } from "react";
import Styles from "./Users-style";
import Header from "../../Component/Header";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
import { getUsers, getInitials, getUserDetails } from "../../service";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentDidMount() {
    const users = getUsers();
    this.setState({ users });
  }
  loadUser = wid => {
    console.log(getUserDetails(wid));
    this.setState({ userDetails: getUserDetails(wid) });
  };
  render() {
    const { users, userDetails } = this.state;
    return (
      <>
        <Header />
        <Grid container style={Styles.container} justify='space-evenly'>
          <Grid item xs={3}>
            {users && (
              <List>
                {Object.keys(users).map((key, indx) => (
                  <ListItem
                    key={`${users[key].fName}-${indx}`}
                    style={Styles.listItem}
                    onClick={e => this.loadUser(users[key]["winId"])}
                  >
                    <ListItemAvatar>
                      <Avatar>{getInitials(users[key].fName)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={users[key].fName} />
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
          <Grid item container xs={8}>
            {userDetails && (
              <Grid item container direction='column' spacing={4}>
                <Grid item container alignItems='center'>
                  <Grid item xs={2}>
                    <Avatar style={Styles.largeAvatar}>
                      {getInitials(userDetails.fName)}
                    </Avatar>
                  </Grid>
                  <Grid item container direction='column' xs={8}>
                    <Grid item>
                      <Typography variant='h3'>
                        {userDetails.fName} {userDetails.lName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' style={Styles.role}>
                        {userDetails.role}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={Styles.info}>
                  <Typography variant='subtitle1'>
                    <strong>M: </strong>
                    {userDetails.phone}
                  </Typography>
                </Grid>
                <Grid item style={Styles.info}>
                  <Typography variant='subtitle1'>
                    <strong>E: </strong>
                    {userDetails.email}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
export default Users;
