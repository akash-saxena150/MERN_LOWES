import React, { Component } from "react";
import {
  Typography,
  Grid,
  Paper,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from "@material-ui/core";
import { callAPI, colors } from "../../service";
import Graph from "../../Component/Graph/Index";
class Step04 extends Component {
  constructor(props) {
    super(props);
    this.template = "select <<SELECTION>> from <<TABLE>> where <<CONDITION>>";
    console.log("Chart data --->", props.chartData);
    this.state = {
      tables: [],
      currOp: null,
      enableSelection: false,
      enableCondition: false,
      selection: "",
      condition: "",
      template: this.template
    };
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
  populateValue = (column, table) => {
    if (this.state.enableSelection) {
      if (column.data_type.toLowerCase() === "int64") {
        this.setState({ selection: column.column_name });
        let tempStr = this.template;
        tempStr = tempStr
          .replace("<<SELECTION>>", column.column_name)
          .replace("<<TABLE>>", table.table_name);
        console.log("Template string --->", tempStr);
        this.setState({ template: tempStr });
      }
    }
  };
  checkColActive(column) {
    const { enableSelection, enableCondition } = this.state;
    return (
      (enableSelection && column.data_type.toLowerCase() === "int64") ||
      enableCondition
    );
  }
  setSelection(type) {
    if (type === "selection") {
      this.setState({ enableSelection: true, enableCondition: false });
    }
    if (type === "condition") {
      this.setState({ enableSelection: false, enableCondition: true });
    }
  }
  render() {
    let {
      tables,
      currOp,
      enableSelection,
      enableCondition,
      selection,
      template
    } = this.state;
    let { Styles } = this.props;
    return (
      <Grid container spacing={2}>
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
                          <Paper
                            elevation={1}
                            style={{
                              ...Styles.column,
                              ...{
                                border: this.checkColActive(column)
                                  ? "2px solid #ccc"
                                  : ""
                              }
                            }}
                            onClick={() => this.populateValue(column, table)}
                          >
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
        <Grid item xs={6} container direction='column' spacing={4}>
          <Grid item>
            <Graph />
          </Grid>
          <Grid item>
            <Typography>
              <strong>Query:</strong>
            </Typography>
            <Divider variant='middle' />
          </Grid>
          <Grid item>{template}</Grid>
        </Grid>
        <Grid
          item
          xs={3}
          spacing={2}
          container
          direction='column'
          style={{ background: "#f1f1f1" }}
        >
          <Grid item>
            <Typography variant='subtitle1'>Select</Typography>
          </Grid>
          <Grid item>
            <TextField
              id='outlined-basic'
              label='Var'
              value={selection}
              variant='outlined'
              onClick={() => {
                this.setSelection("selection");
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant='subtitle1'>Where</Typography>
          </Grid>
          <Grid item container direction='column' spacing={2}>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='Var'
                variant='outlined'
                onClick={() => {
                  this.setSelection("condition");
                }}
              />
            </Grid>
            <Grid item>
              <FormControl variant='outlined'>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Ops
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={currOp}
                  onChange={e => {
                    this.setState({ currOp: e.target.value });
                  }}
                  label='Ops'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={">"}>></MenuItem>
                  <MenuItem value={">="}>>=</MenuItem>
                  <MenuItem value={"<="}>{"<="}</MenuItem>
                  <MenuItem value={"<"}>{"<"}</MenuItem>
                  <MenuItem value={"="}>{"="}</MenuItem>
                  <MenuItem value={"NOT IN"}>{"NOT IN"}</MenuItem>
                  <MenuItem value={"NOT NULL"}>{"NOT NULL"}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField id='outlined-basic' label='value' variant='outlined' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Step04;
