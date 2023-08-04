import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  TextField,
  Box,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";
import { Mood, MoreVert } from "@mui/icons-material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { styled } from "styled-components";
import { Comment, Person } from "./ChatWithComments";



function CommentsCardWrapper({
  comments,
  persons,
  senderIdOfChat,
}: {
  comments: Comment[];
  persons: Person[];
  senderIdOfChat: number;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "space-between",
        margin: "20px 0 0 120px",
        border: "3px solid #F1F1F1",
        borderRadius: "15px",
        flexDirection: "column",
        bgcolor: "#F3F3F5",
        width: "500px",
        padding: "15px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "cennter",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
          }}
        >
          <Avatar sx={{ width: "25px", height: "25px", fontSize: "15px" }}>
            {
              <img
                style={{ objectFit: "cover", width: "40px" }}
                src={
                  persons?.find((person) => person?.id === senderIdOfChat)
                    ?.photo_url
                }
              />
            }
          </Avatar>
          <Typography sx={{ pl: "8px" }} fontSize={"15px"} fontWeight={"600"}>
            {" "}
            {comments.length} comment{" "}
          </Typography>
          <Typography sx={{ pl: "8px" }} color={"#9f9f9f"} fontSize={"15px"}>
            {" "}
            Today, 9:38 AM
          </Typography>
        </Box>
      </Box>
      {comments.map(({ senderId, comment }) => (
        <>
          <CardContent
            sx={{
              padding: "25px 0 0 0 ",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyItems: "cennter",
            }}
          >
            <Avatar
              sx={{
                width: "40px",
                height: "40px",
                fontSize: "20px",
              }}
            >
              {
                <img
                  style={{ objectFit: "cover", width: "40px" }}
                  src={
                    persons?.find((person) => person?.id === senderId)
                      ?.photo_url
                  }
                />
              }
            </Avatar>
            <Card
              elevation={0}
              sx={{
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "cennter",
                bgcolor: "#fffbe1",
                padding: "15px",
                mx: "15px",
              }}
            >
              <Typography color={"#80653C"}>{comment}</Typography>
            </Card>
          </CardContent>
        </>
      ))}
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        sx={{
          marginTop: "30px",
        }}
      >
        <TextField size="small" fullWidth label="Reply internally..." />
        <Box
          sx={{
            width: "100%px",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <IconButton>
            <MoreVert sx={{ transform: " rotate(90deg)" }} />
          </IconButton>
          <IconButton>
            <Mood />
          </IconButton>
          <IconButton>
            <ArrowCircleLeftIcon sx={{ transform: " rotate(90deg)" }} />
          </IconButton>
        </Box>
      </Box>
      <IconButton sx={{ position: "absolute", top: "0px", right: "30px" }}>
        <CheckCircleOutlineIcon />
      </IconButton>
      <IconButton sx={{ position: "absolute", top: "0px", right: "0px" }}>
        <MoreVert sx={{ transform: " rotate(90deg)" }} />
      </IconButton>
    </Card>
  );
}

export default CommentsCardWrapper;
