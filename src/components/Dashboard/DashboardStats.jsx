import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

import { StatsItem } from "./StatsItem";

const DashboardStats = () => {
  return (
    <Box
      sx={{
        height: "150px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginBottom:"0px"
      }}
    >
      <Grid container sx={{}} spacing={1.4}>
        <Grid item xs={12}  lg={3}>
          <Box sx={{paddingLeft:"20px",marginRight:"10px"}}>
            <Typography
              sx={{
                color: "#222222",
                paddingLeft: "15px",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              Air Ticket
            </Typography>
            <Typography
              sx={{
                color: "#222222",
                paddingLeft: "15px",
                fontFamily: "Poppins",
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              Booking Stats Today
            </Typography>
            <Button
              sx={{color:"#fff",fontFamily:"poppins", width: "93px", height: "22px", backgroundColor: "#525371",marginLeft:"15px",marginTop:"10px",fontSize:"12px" }}
            >
                12 OCT 2022
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <StatsItem />
        </Grid>

     
        {/* <Grid item xs={12} lg={1.21.5
          <StatsItem />
        </Grid> */}
        <Grid item xs={12} lg={1.5}>
          <StatsItem />
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <StatsItem />
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <StatsItem />
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <StatsItem />
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <Box
            sx={{
              width: "90px",
              height: "110px",
              borderRadius: "12px",
              backgroundColor: "#32D095",
              position: "absolute",
              right: -20,
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                color: "#fff",
                paddingLeft: "12px",
                paddingTop: "10px",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Full <br /> Stats
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardStats;
