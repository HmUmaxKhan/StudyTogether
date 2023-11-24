import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const ChosenOptionLabel = () => {

  const name = useSelector((state)=>state.chatDetails.choosenChatDetails)

  return (
    <Typography
      sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
    >{`${name ? `Chosen conversation: ${name.name}` : ""}`}</Typography>
  );
};

export default ChosenOptionLabel;