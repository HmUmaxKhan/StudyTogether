
import { styled } from "@mui/system";
import FriendsListItem from "./FriendListItems";

const DUMMY_USERS = [
    {
        id:1,
        username:"John Doe",
        isOnline:true,
    },
    {
        id:2,
        username:"Johnny",
        isOnline:true,
    },
    {
        id:3,
        username:"Johnson",
        isOnline:true,
    }
    
]
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});


const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <MainContainer>
    {DUMMY_USERS.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;