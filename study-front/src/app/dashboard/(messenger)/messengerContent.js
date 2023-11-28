import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./(Messages)/Messages";
import NewMessageInput from "./NewMessageInput";
import { useSelector } from "react-redux";
import { getDirectChatHistory } from  "../../(communication)/connectWIthio";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = () => {
  // const chosenChatDetails = useSelector((state)=>state.chatDetails.choosenChatDetails)
  // // useEffect(() => {
  // //   getDirectChatHistory({
  // //     receiverUserId: chosenChatDetails.id,
  // //   });
  // }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

export default MessengerContent;