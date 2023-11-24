import Button from "@mui/material/Button";
import Avatar from "@/app/(shared)/Avatar";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "./OnlineIndicator";
import { useDispatch } from "react-redux";
import { chatType, setChatDetails } from "@/app/redux/slices/chatdetails";

const FriendsListItem = ({ id, username, isOnline }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    const chatDetails={
      id:id,
      name:username
    }
    dispatch(setChatDetails({
      choosenChatDetails:chatDetails,
      chatType:chatType.DIRECT
    }))
  }

  return (
    <Button
    onClick={handleClick}
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;