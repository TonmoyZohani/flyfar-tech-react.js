import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Box, Button, Typography } from "@mui/material";

const DashboardChart = () => {
  const data = [
    { name: "May 2022", pv: 40, uv: 10 },
    { name: "Jun 2022", pv: 10, uv: 20 },
    { name: "Jul 2022", pv: 60, uv: 50 },
    { name: "Aug 2022", pv: 80, uv: 90 },
    { name: "Oct 2022", pv: 20, uv: 40 },
    { name: "Nov 2022", pv: 50, uv: 70 },
    { name: "Aug 2022", pv: 70, uv: 60 },
    { name: "Oct 2022", pv: 90, uv: 30 },
    { name: "Nov 2022", pv: 30, uv: 80 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              fontFamily: "Poppins",
              paddingBottom: "10px",
            }}
          >
            Air Ticket Search vs Booking vs Ticketed
          </Typography>
        </Box>
        <Box sx={{display:"flex",gap:2}}>
          <Button
            sx={{
              padding: "4px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#32D095",
              fontSize: "7px",
              color: "#fff",
              fontFamily: "Poppins",
            }}
          >
            26 MAY - 28 MAY 2022
          </Button>
          <Button
            sx={{
              padding: "4px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "#D1E9FF",
              fontSize: "7px",
              color: "#000",
              fontFamily: "Poppins",
            }}
          >
            Air Ticket
          </Button>
        </Box>
      </Box>

      <BarChart
        width={1050}
        height={200}
        style={{ marginRight: "50px" }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#32D095" width="20"  />
        <Bar dataKey="uv" fill="#525371" />
      </BarChart>
    </Box>
  );
};

export default DashboardChart;
