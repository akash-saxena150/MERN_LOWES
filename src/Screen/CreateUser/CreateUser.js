import React, { Component } from "react";
import Styles from "./CreateUser-style";
import { formData, getUserDetails } from "../../service";
import Header from "../../Component/Header";
import FormGenerator from "../../Component/FormGenerator";
import { Grid, Typography } from "@material-ui/core";
class CreateUser extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onCreateUser = data => {
    console.log(data);
  };
  componentDidMount() {
    const createUserForm = formData.createUser;
    this.setState({ createUserForm });
    const userData = this.loadUserDetails();
    if (userData) {
      this.mapUserDataToForm(userData, createUserForm);
    }
  }
  mapUserDataToForm = (userData, createUserForm) => {
    let tempFormArr = [...createUserForm];
    tempFormArr.map(formField => {
      formField.value = userData[formField.field] || false;
    });
    this.setState({ createUserForm: tempFormArr });
  };
  loadUserDetails() {
    let userDetails = this.props.match.params.id
      ? getUserDetails(this.props.match.params.id)
      : null;
    return userDetails;
  }
  render() {
    const { createUserForm } = this.state;
    return (
      <>
        <Header />
        <Grid
          container
          direction='column'
          alignItems='flex-start'
          style={Styles.container}
          spacing={4}
        >
          <Grid item>
            <Typography variant='h3'>Create/edit user</Typography>
          </Grid>
          <Grid item>
            {createUserForm && (
              <FormGenerator
                formObj={createUserForm}
                formSubmit={this.onCreateUser}
                buttonName='Save'
              />
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
export default CreateUser;
