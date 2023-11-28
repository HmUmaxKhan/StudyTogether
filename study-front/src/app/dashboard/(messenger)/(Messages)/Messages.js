import React, { userRef, useEffect } from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagerHead";
import { useSelector } from "react-redux";
import DUMMY_MESSAGES from "./DUMMY_MESSAGES";
import { Key } from "@mui/icons-material";
import Message from "./Message";


const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = () => {

const userDetails = useSelector((state)=>state.chatDetails.choosenChatDetails)
const messages = useSelector((state)=>state.chatDetails.msgs)

console.log(userDetails.name);

  return (
    <MainContainer>
      <MessagesHeader name={userDetails.name} />
      {DUMMY_MESSAGES.map((message)=>{
        return (
          <Message 
           key={message._id}
           content = {message.content}
           username = {message.author.username}
           sameAuthor={message.sameAuthor}
           date={message.date}
           sameDay={message.sameDay}
          />
        )
      })
      }
    </MainContainer>
  )
};

export default Messages;