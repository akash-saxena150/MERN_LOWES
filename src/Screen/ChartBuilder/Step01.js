import React, { Component } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
class Step01 extends Component {
  render() {
    let { chartSchema } = this.props;
    return (
      <Grid container direction='column'>
        {chartSchema.chartTypes.map(type => (
          <>
            <Grid item>
              <Typography variant='subtitle1'>{type.name}</Typography>
              <Divider variant='middle' />
            </Grid>
            <Grid item container spacing={4}>
              {type.chartTypes.map(chartType => (
                <Grid
                  item
                  xs={3}
                  container
                  direction='column'
                  alignItems='center'
                >
                  <Typography variant='subtitle1'>{chartType.name}</Typography>
                  <div
                    style={{
                      width: "150px",
                      height: "100px",
                      background: "#f1f1f1"
                    }}
                  >
                    &nbsp;
                  </div>
                </Grid>
              ))}
            </Grid>
          </>
        ))}
      </Grid>
    );
  }
}
export default Step01;
