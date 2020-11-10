import React, { Component } from "react";
import RestrictAdminAccess from "../../Component/RestrictAdminAccess";
import { callAPI } from "../../service";
import Styles from "./Domains-style";
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import Graph from "../../Component/Graph/Index";

class Domains extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { domains: [] };
  }
  componentDidMount() {
    callAPI("domains", "get", this.domainsLoaded, this.domainsLoadedErr);
  }
  domainsLoaded = data => {
    this.setState({ domains: data.data.domainsData });
  };
  domainsLoadedErr = err => {
    console.log(err);
  };
  modulesLoaded = (data, indx) => {
    let tempState = [...this.state.domains];
    tempState[indx].modules = [];
    tempState[indx].modules = [...data.data.modulesData];
    this.setState({ domains: tempState });
  };
  modulesLoadedErr = err => {
    console.log(err);
  };
  fetchModules = (domain, indx) => {
    if (!(domain.modules && domain.modules.length > 0))
      callAPI(
        `modules/${domain.domain_id}`,
        "get",
        data => this.modulesLoaded(data, indx),
        this.modulesLoadedErr
      );
    return false;
  };
  render() {
    let { domains } = this.state;
    return (
      <Grid container spacing={6} style={Styles.container}>
        <Grid item xs={3}>
          {domains.map((domain, indx) => (
            <Accordion key={`${domain.name}-${indx}`}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
                onClick={() => {
                  this.fetchModules(domain, indx);
                }}
              >
                <Typography variant='subtitle1'>{domain.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  direction='column'
                  spacing={2}
                  justify='flex-start'
                >
                  {domain.modules &&
                    domain.modules.map((module, i) => (
                      <Grid item key={`${module.name}-${i}`}>
                        <Paper elevation={1} style={Styles.module}>
                          {module.name}
                        </Paper>
                      </Grid>
                    ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={8}>
          <Graph type={2} />
        </Grid>
      </Grid>
    );
  }
}
export default RestrictAdminAccess(Domains);
