
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import FriendsListItem from "./FriendListItems";




const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});


const FriendsList = () => {

  let userData = useSelector((state)=>state.friends.friendslist);

  let online = useSelector((state)=>state.onlinefrnds.onlineusers)

  let len = userData.length;

  let len1 = online.length;

  
  userData = userData[len-1];
  
  online = online[len1-1];
  
  console.log("Online frnds: ", online);

  if (!userData || userData.length === 0) {
    return null; // Or you can render a loading indicator or an appropriate component
  }

  const totalFriends = userData;


  const checkOnlineUser = (totalFriends = [], online = []) => {
    return totalFriends.map((f) => {
      const onlineUser = online.find((user) => user.userId === f.id);
      return {
        ...f, // Spread the existing properties of f
        isOnline: onlineUser ? true : false,
      };
    });
  };
  

  return (
    <MainContainer>
    {checkOnlineUser(totalFriends,online).map((f) => (
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