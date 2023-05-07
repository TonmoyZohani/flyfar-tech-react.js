import React from "react";
import { Container } from "@mui/material";
import DashboardNav from "./DashboardNav";
import DashboardStats from "./DashboardStats";
import DashboardCalc from "./DashboardCalc";
import DashboardChart from "./DashboardChart";

const DashboardHome = () => {
  return (
    <Container
    >
      <DashboardNav />
      <DashboardStats />
      <DashboardCalc/>
      <DashboardChart/>
    </Container>
  );
};

export default DashboardHome;
