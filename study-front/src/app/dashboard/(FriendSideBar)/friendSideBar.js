import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./(FriedList)/FriendList";
import PendingInvitationsList from "../(PendingInvitation)/PendingInvitationList";


const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <PendingInvitationsList />
      <FriendsTitle title="Invitations" />
    </MainContainer>
  );
};

export default FriendsSideBar;