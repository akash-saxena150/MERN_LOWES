import React, { Component } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
class Step01 extends Component {
  render() {
    let { chartSchema, Styles, modifySchema } = this.props;
    return (
      <Grid container direction='column' spacing={4}>
        <Grid item>
          <Typography variant='subtitle1'>
            <strong>Select the type of chart</strong>
          </Typography>
        </Grid>
        {chartSchema.chartTypes.map((type, indx) => (
          <>
            <Grid item key={`${type.type}-${indx}`}>
              <Typography variant='subtitle1'>{type.name}</Typography>
              <Divider variant='middle' />
            </Grid>
            <Grid item container spacing={4}>
              {type.chartTypes.map((chartType, i) => (
                <Grid
                  key={`${chartType.type}-${i}`}
                  item
                  xs={3}
                  container
                  direction='column'
                  alignItems='center'
                  onClick={() => {
                    modifySchema(1, {
                      dataType: type.type,
                      chartType: chartType.type
                    });
                  }}
                >
                  <Typography variant='subtitle1'>{chartType.name}</Typography>
                  <div
                    style={{
                      width: "250px",
                      height: "150px",
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
