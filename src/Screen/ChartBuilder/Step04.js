import React, { Component } from "react";
import {
  Typography,
  Grid,
  Paper,
  AccordionSummary,
  Accordion,
  AccordionDetails
} from "@material-ui/core";
import { callAPI, colors } from "../../service";
class Step04 extends Component {
  constructor() {
    super();
    this.state = { tables: [] };
  }
  componentDidMount() {
    callAPI("tables", "get", this.onTablesLoad, this.onTablesLoadErr);
  }
  onTablesLoad = data => {
    console.log(data.data);
    this.setState({ tables: data.data.rows });
  };
  onTablesLoadErr = err => {
    console.log("Error", err);
  };
  fetchColumns(table, indx) {
    callAPI(
      `columns/${table.table_name}`,
      "get",
      data => this.onColumnsLoad(data, indx),
      this.onColumnsLoadErr
    );
  }
  onColumnsLoadErr = err => {
    console.log("Error", err);
  };
  onColumnsLoad = (data, indx) => {
    let tempState = [...this.state.tables];
    tempState[indx].columns = [];
    tempState[indx].columns = [...data.data.rows];
    this.setState({ domains: tempState });
  };
  render() {
    let { tables } = this.state;
    let { Styles } = this.props;
    return (
      <Grid container spacing={4}>
        <Grid item xs={3}>
          {tables &&
            tables.map((table, indx) => (
              <Accordion key={`${table.table_name}-${indx}`}>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  onClick={() => {
                    this.fetchColumns(table, indx);
                  }}
                >
                  <Typography variant='subtitle1'>
                    {table.table_name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction='column'
                    spacing={2}
                    justify='flex-start'
                  >
                    {table.columns &&
                      table.columns.map((column, i) => (
                        <Grid item key={`${column.column_name}-${i}`}>
                          <Paper elevation={1} style={Styles.column}>
                            <Grid container justify='space-between'>
                              <Grid item>
                                <Typography>{column.column_name}</Typography>
                              </Grid>
                              <Grid item>
                                <Typography style={{ color: colors.grey }}>
                                  {column.data_type}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    );
  }
}
export default Step04;
