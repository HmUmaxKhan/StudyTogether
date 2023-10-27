
import { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "@/app/(shared)/Avatar";

export default function  PendingInvitationListItems  ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    console.log(id);
    acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    console.log(id);
    rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
        </Box>
      </div>
    </Tooltip>
  );
};
