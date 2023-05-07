import React from 'react'
import pin from "../../assets/img/pin.png"
import { Box,Typography } from '@mui/material'

export const StatsItem = () => {
  return (
    <Box
    sx={{
      height: "110px",
      borderRadius: "12px",
      position: "relative",
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.13)",
    }}
  >
    <Box
      sx={{
        width: "32px",
        height: "32px",
        background: "#525371",
        borderRadius: "100%",
        position: "absolute",
        top: -14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={pin} alt="" />
    </Box>

    <p
      style={{
        color: "#9C9797",
        fontSize: "11px",
        textAlign: "right",
        paddingRight: "15px",
        paddingTop:"5px"
      }}
    >
      Today
    </p>

    <Typography
      sx={{
        color: "#525371",
        paddingLeft: "8px",
        paddingRight: "3px",
        fontFamily: "Poppins",
        fontSize: "13px",
        fontWeight: "500",
      }}
    >
      Booking Reissue Request
    </Typography>
    <Typography
      sx={{
        textAlign: "right",
        color: "#222222",
        paddingLeft: "10px",
        paddingRight: "2px",
        fontFamily: "Poppins",
        fontWeight: 500,
        fontSize: "35px",
        paddingRight: "10px",
      }}
    >
      100
    </Typography>
  </Box>
  )
}
