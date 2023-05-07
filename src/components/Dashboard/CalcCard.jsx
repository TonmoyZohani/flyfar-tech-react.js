import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Padding } from "@mui/icons-material";

export default function CalcCard() {
  return (
    <Card sx={{ minWidth: 275,boxShadow:"none" }}>
      <Box sx={{ paddingLeft: "15px", paddingTop: "10px" }}>
        <Typography
          sx={{ fontSize: "12px", fontFamily: "Poppins", fontWeight: "500"}}
        >
          Word of the Day
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "#222222",
          }}
        >
          5,00,000 BDT
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "8px",
            color: "#fff",
            backgroundColor: "#525371",
            marginBottom: "8px",
            fontFamily: "Poppins",
            marginRight:"8px",
            padding:"2px 4px"
          }}
        >
          12 OCT 2022
        </Button>
        </Box>
        
      </Box>
    </Card>
  );
}
