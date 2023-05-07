import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import CalcCard from "./CalcCard";

const DashboardCalc = () => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        paddingRight:"50x"
      }}
    >
      <Grid container sx={{marginTop:"5px"}} spacing={2}>
        <Grid item  xs={12} lg={3}>
         <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
        <Grid item  xs={12} lg={3}>
        <CalcCard/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCalc;
