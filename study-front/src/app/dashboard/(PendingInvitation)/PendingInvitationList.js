
import { styled } from "@mui/system";
import PendingInvitationListItems from "../(PendingInvitation)/PendingInvitationListItems";
import { useSelector } from "react-redux";
import { useEffect } from "react";



const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {

  
  const userData = useSelector((state)=>state.pending.pendingInvitations);
  console.log("PendingList: " ,userData);

  return (
    <MainContainer>
    {userData.length!==0?userData.map((invitation) => (
      <PendingInvitationListItems
        key={invitation._id}
        id={invitation._id}
        username={invitation.senderID ? invitation.senderID.username : ""}
          mail={invitation.senderID ? invitation.senderID.mail : ""}
      />
    )):""}
  </MainContainer>
  );
};

export default PendingInvitationsList;