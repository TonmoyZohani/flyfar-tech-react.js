import React from "react";
import { Box, Stack, Button } from "@mui/material";
import icon from "../../assets/img/icon.png"
// import Button from "@mui/material";
import logo from "../../assets/img/logo.png"

const DashboardNav = () => {
  return (
    <Box sx={{ width: "100%", height: "100px",display:"flex",backgroundColor:"#EDF2F6", justifyContent:"space-between",alignItems:"center" }}>
      <Box sx={{ display: "flex", alignItems: "center",gap:6 }}>
        {/* logo */}
        <img src={logo} alt="" style={{ width: "120px", height: "60px" }} />
        {/* serach */}
        <input
          type="text"
          placeholder="Search"
          style={{
            paddingLeft: "15px",
            color: "#000",
            fontFamily: "Poppins",
            width: "324px",
            height: "39px",
            borderRadius: "30px",
            border: "none",
            outline: "none",
          }}
        />
      </Box>

      {/* button */}
      <Box>
        <Button
          sx={{
            width: "180px",
            height: "41px",
            borderRadius: "20px",
            backgroundColor: "#32D095",
            fontFamily: "Poppins",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={icon} alt="" />
         <p>BDT 85,000</p> 
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardNav;
