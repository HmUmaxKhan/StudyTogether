import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import InputWithLabel from "@/app/(shared)/InputWithLabel";
import CustomPrimaryButton from "@/app/(shared)/CustomPrimaryButton";


const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");


  const handleSendInvitation = async() => {
    let token = localStorage.getItem("login");
    token = JSON.parse(token);
    token = token.userDetails.token

    let response = await fetch("http://localhost:5002/api/invite/friendinvite",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "authtoken":token
      },
      body:JSON.stringify({
        mail:mail
      })
    });

    try {
      response = await response.text();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
      
      handleCloseDialog();
    
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };


  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};


export default AddFriendDialog;