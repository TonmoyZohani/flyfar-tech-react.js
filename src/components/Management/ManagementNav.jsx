import React, { useState } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import icon from "../../assets/img/icon.png";
// import Button from "@mui/material";
import logo from "../../assets/img/logo.png";
import mplane from "../../assets/img/mplane.png";

const ManagementNav = (props) => {
  const handleId = props.handleId;
  const id = props.id;

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          backgroundColor: "#EDF2F6",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#222222",
            fontSize: "22px",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        >
          {id == 1 ? "Search Management" : ""}
          {id == 2 ? "Markup Management" : ""}
          {id == 3 ? "Offer Management" : ""}
          {id == 4 ? "Notice Management" : ""}
          {id == 5 ? "CMS Management" : ""}
        </Typography>

        <Box
          sx={{
            width: "700px",
            height: "50px",
            borderRadius: "30px",
            backgroundColor: "#fff",
            display: "flex",
            borderRadius: "30px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "40px",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <Button
              sx={{
                backgroundColor: "#32D095",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              onClick={() => handleId(1)}
            >
              <img src={mplane} alt="" />
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                Search
              </span>
            </Button>
          </Box>

          <Box sx={{ width: "20%", backgroundColor: "" }}>
            <Button
              sx={{
                backgroundColor: "#32D095",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
              }}
              onClick={() => handleId(2)}
            >
              <img src={mplane} alt="" />
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                Markup
              </span>
            </Button>
          </Box>
          <Box sx={{ width: "20%", backgroundColor: "" }}>
            <Button
              sx={{
                backgroundColor: "#32D095",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
              }}
              onClick={() => handleId(3)}
            >
              <img src={mplane} alt="" />
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                Offer
              </span>
            </Button>
          </Box>
          <Box sx={{ width: "20%", backgroundColor: "" }}>
            <Button
              sx={{
                backgroundColor: "#32D095",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
              }}
              onClick={() => handleId(4)}
            >
              <img src={mplane} alt="" />
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                Notice
              </span>
            </Button>
          </Box>
          <Box sx={{ width: "20%", backgroundColor: "" }}>
            <Button
              sx={{
                backgroundColor: "#32D095",
                borderRadius: "30px",
                fontSize: "13px",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "#fff",
              }}
              onClick={() => handleId(5)}
            >
              <img src={mplane} alt="" />
              <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                CMS
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ManagementNav;
