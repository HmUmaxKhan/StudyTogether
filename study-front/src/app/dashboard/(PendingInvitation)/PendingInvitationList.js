
import { styled } from "@mui/system";
import PendingInvitationListItems from "../(PendingInvitation)/PendingInvitationListItems";


const DUMMY_INVVITATIOS = [
    {
        _id:1,
        senderId:{
            username:"Ali",
            mail:"ali@gmail.com"
        }
    },
    {
        _id:3,
        senderId:{
            username:"Umar",
            mail:"umr@gmail.com"
        }
    },
    {
        _id:2,
        senderId:{
            username:"MOiz",
            mail:"moiz@gmail.com"
        }
    },
]
const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationsList = () => {
  return (
    <MainContainer>
    {DUMMY_INVVITATIOS.map((invitation) => (
      <PendingInvitationListItems
        key={invitation._id}
        id={invitation._id}
        username={invitation.senderId.username}
        mail={invitation.senderId.mail}
      />
    ))}
  </MainContainer>
  );
};

export default PendingInvitationsList;