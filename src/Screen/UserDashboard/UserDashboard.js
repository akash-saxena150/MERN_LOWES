import React, { Component } from "react";
import { fetchUserDomains, get, KeyVars } from "../../service";
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import Styles from "./UserDashboard-style";
class UserDashboard extends Component {
  constructor() {
    super();
    this.state = { domainData: {} };
  }
  componentDidMount() {
    let domainData = fetchUserDomains(get(KeyVars.WINID));
    this.setState({ domainData });
    console.log(domainData);
  }
  render() {
    let { domainData } = this.state;
    return (
      <Grid container spacing={2} style={Styles.container}>
        <Grid item xs={3}>
          <>
            {Object.keys(domainData).map(domain => (
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography variant='subtitle1'>{domain}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction='column'
                    spacing={1}
                    justify='flex-start'
                  >
                    {domainData[domain].map(module => (
                      <Grid item>
                        <Paper elevation={1} style={Styles.module}>
                          {module.name}
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
    );
  }
}
export default UserDashboard;
