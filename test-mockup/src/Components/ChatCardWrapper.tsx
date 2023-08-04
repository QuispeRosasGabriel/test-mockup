import React from "react";
import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";
import { Clear, MoreVert, PlayArrow } from "@mui/icons-material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "styled-components";
import CommentsCardWrapper from "./CommentsCardWrapper";

const BallIcon = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white; /* Color blanco de la bola */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra */
`;
const CircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e53935; /* Color rojo */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Spam = styled.span`
  color: #4589f6;
`;

function ChatCardWrapper({
  senderName,
  message,
}: {
  message: string;
  senderName: string;
}) {
  return (
    <>
      <Card
        elevation={0}
        sx={{
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "cennter",
          bgcolor: "#F3F3F5",
          width: "500px",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <CircleIcon style={{ position: "relative" }}>
            <PhoneIcon
              sx={{
                position: "absolute",
                left: "9px",
                bottom: "9px",
                color: "#fff",
                fontSize: "27px",
              }}
            />
            <Clear
              sx={{
                position: "absolute",
                color: "white",
                fontSize: "16px",
                top: "12px",
                right: "12px",
              }}
            />
          </CircleIcon>
          <Box sx={{ padding: "0 0 0 10px" }}>
            <Typography fontWeight={"bold"} fontSize={"18px"}>
              Missed call
            </Typography>
            <Typography fontSize={"16px"} color={"#6B6B6C"}>
              No one answered
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "7px",
            backgroundColor: "#e3e3e3",
            borderRadius: "8px",
            position: "relative",
            height: "50px",
            mt: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PlayArrow sx={{ fontSize: "35px", color: "#6D39F9" }} />
            <IconButton sx={{ fontSize: "35px", padding: "0px", left: "10px" }}>
              <BallIcon />
            </IconButton>
            <Box
              sx={{
                height: "4px",
                backgroundColor: "gray",
                borderRadius: "40px",
                width: "190px",
              }}
            ></Box>
            <Typography sx={{ color: "gray", p: "10px" }}> 0:12</Typography>
          </Box>
          <IconButton>
            <VolumeUpIcon sx={{ fontSize: "30px", color: "gray" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "4px",
                backgroundColor: "#6D39F9",
                borderRadius: "10px",
                width: "50px",
              }}
            ></Box>
            <IconButton sx={{ padding: "0px", right: "10px" }}>
              <BallIcon />
            </IconButton>
          </Box>
          <IconButton sx={{ padding: "0 20px 0 0" }}>
            <MoreVert sx={{ fontSize: "30px", transform: " rotate(90deg)" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "cennter",
          }}
        >
          <CardContent style={{ padding: "15px 15px 0 0 ", width: "100%" }}>
            <Typography color="#8f8f8f" fontSize={"12px"} fontWeight={"500"}>
              {senderName}
            </Typography>
            <Typography fontSize={"19px"} fontWeight={"400"} color={"#4d4d4d"}>
              {message}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default ChatCardWrapper;
