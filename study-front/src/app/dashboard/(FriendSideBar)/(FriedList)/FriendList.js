
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import FriendsListItem from "./FriendListItems";




const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});


const FriendsList = () => {

  let userData = useSelector((state)=>state.friends.friendslist);
  console.log("FriendsList: " ,userData);

  let len = userData.length;

  userData = userData[len-1];

  if (Array.isArray(userData)) {
    console.log("Yes it is array",userData); 
  }

  if (!userData || userData.length === 0) {
    return null; // Or you can render a loading indicator or an appropriate component
  }

  const totalFriends = userData;

  return (
    <MainContainer>
    {totalFriends.map((f) => (
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