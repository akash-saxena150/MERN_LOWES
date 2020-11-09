import React, { Component } from "react";
import Styles from "./CreateUser-style";
import { formData, getUserDetails, fetchOptions, callAPI } from "../../service";
import Header from "../../Component/Header";
import FormGenerator from "../../Component/FormGenerator";
import { Grid, Typography } from "@material-ui/core";
import RestrictAdminAccess from "../../Component/RestrictAdminAccess";
class CreateUser extends Component {
  constructor() {
    super();
    this.state = {};
  }
  onUserCreated = data => {
    console.log("User created", data);
    alert("Usesr created");
  };
  onUserCreationErr = err => {
    console.log(err);
  };
  onCreateUser = data => {
    let reqBody = {};
    for (let i = 0; data[i]; i++) {
      reqBody[data[i].field] = data[i].value;
    }
    callAPI(
      "users",
      "post",
      this.onUserCreated,
      this.onUserCreationErr,
      reqBody
    );
  };
  componentDidMount() {
    const createUserForm = [...formData.createUser];
    for (let key in createUserForm) {
      if (createUserForm[key].type === "select") {
        if (!createUserForm[key].options) {
          let optionMap = fetchOptions(createUserForm[key].opRef);
          createUserForm[key].options = optionMap;
        }
      }
    }
    this.setState({ createUserForm });
    this.loadUserDetails(createUserForm);
  }
  mapUserDataToForm = (userData, createUserForm) => {
    let tempFormArr = [...createUserForm];
    tempFormArr.map(formField => {
      formField.value = userData[formField.field] || false;
      formField.err = false;
    });
    this.setState({ createUserForm: tempFormArr });
  };
  onUserLoaded = (createUserForm, data) => {
    if (data.data.userData) {
      this.mapUserDataToForm(data.data.userData, createUserForm);
    }
  };
  onUserErr = err => {
    console.log(err);
  };
  loadUserDetails(createUserForm) {
    callAPI(
      `user/${this.props.match.params.id}`,
      "get",
      data => this.onUserLoaded(createUserForm, data),
      this.onUserErr
    );
  }
  render() {
    const { createUserForm } = this.state;
    return (
      <>
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
                disablePass={true}
              />
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
export default RestrictAdminAccess(CreateUser);
