import React, { Component } from "react";
import { fetchUserDomains, get, KeyVars, callAPI } from "../../service";
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import Styles from "./UserDashboard-style";
import RestrictUserAccess from "../../Component/ResctrictUserAccess";
class UserDashboard extends Component {
  constructor() {
    super();
    this.state = { domainData: [] };
  }
  onPermissionsLoaded = data => {
    this.setState({ domainData: data.data.permissionData });
    // console.log(data.data.permissionData);
  };
  onPermissionsLoadedErr = err => {
    console.log(err);
  };
  componentDidMount() {
    callAPI(
      "permissions",
      "get",
      this.onPermissionsLoaded,
      this.onPermissionsLoadedErr
    );
    // let domainData = fetchUserDomains(get(KeyVars.WINID));
    // this.setState({ domainData });
    // console.log(domainData);
  }
  render() {
    let { domainData } = this.state;
    return (
      <>
        <Grid container spacing={2} style={Styles.container}>
          <Grid item xs={3}>
            <>
              {domainData.map((domain, indx) => (
                <Accordion key={`${domain.domain_name}-${indx}`}>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography variant='subtitle1'>
                      {domain.domain_name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      direction='column'
                      spacing={1}
                      justify='flex-start'
                    >
                      {domain.modules.map((module, i) => (
                        <Grid item key={`${module.module_name}-${i}`}>
                          <Paper elevation={1} style={Styles.module}>
                            {module.module_name}
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </>
    );
  }
}
export default RestrictUserAccess(UserDashboard);
