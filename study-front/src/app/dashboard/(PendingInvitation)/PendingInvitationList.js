
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

  
  let userData = useSelector((state)=>state.pending.pendingInvitations);
  console.log("PendingList: " ,userData);

  let len = userData.length;

  userData = userData[len-1];

  if (Array.isArray(userData)) {
    console.log("Yes it is array",userData); 
  }

  if (!userData || userData.length === 0) {
    return null; // Or you can render a loading indicator or an appropriate component
  }

  const invitations = userData;

  return (
    <MainContainer>
    {invitations.map((invitation) => (
      <PendingInvitationListItems
        key={invitation._id}
        id={invitation._id}
        username={invitation.senderID ? invitation.senderID.username : ""}
          mail={invitation.senderID ? invitation.senderID.mail : ""}
      />
    ))}
  </MainContainer>
  );
};

export default PendingInvitationsList;