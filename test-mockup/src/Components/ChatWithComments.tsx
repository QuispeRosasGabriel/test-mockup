import React from "react";
import database from ".././assets/database.json";
import { Box, Avatar } from "@mui/material";
import { Chat } from "@mui/icons-material";

import ChatCardWrapper from "./ChatCardWrapper";
import CommentsCardWrapper from "./CommentsCardWrapper";

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  photo_url: string;
}
export interface Comment {
  id: number;
  senderId: number;
  senderName: string;
  comment: string;
}

export interface Chat {
  id: number;
  senderId: number;
  senderName: string;
  message: string;
  comments: Comment[] | any;
}

export interface Database {
  persons: Person[];
  chats: Chat[];
}

const ChatWithComments: React.FC = () => {
  const data: Database = {
    persons: database.persons,
    chats: database.chats,
  };

  return (
    <Box>
      {data.chats.map(({ comments, message, senderId, senderName }) => (
        <Box
          sx={{
            display: "flex",
            margin: "20px 0 0 0",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "700px",
              margin: "20px 0 0 0",
              alignItems: "end",
            }}
          >
            <Box sx={{ padding: "0 20px 0 20px" }}>
              <Avatar>
                {
                  <img
                    style={{ objectFit: "cover", width: "40px" }}
                    src={
                      data?.persons?.find((person) => person?.id === senderId)
                        ?.photo_url
                    }
                  />
                }
              </Avatar>
            </Box>
            <ChatCardWrapper message={message} senderName={senderName} />
          </Box>
          {comments.length !== 0 && (
            <CommentsCardWrapper
              comments={comments}
              persons={data.persons}
              senderIdOfChat={senderId}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ChatWithComments;
