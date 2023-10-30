"use client"
import {styled} from '@mui/system'
import SideBar from './(SideBar)/sideBar';
import FriendsSideBar from './(FriendSideBar)/friendSideBar';
import Messenger from './(messenger)/messenger';
import AppBar from './(AppBar)/appBar';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { authJWT } from '../redux/slices/auth';
import io from "socket.io-client";
import { setInvitations } from "../redux/slices/pendingFriends";
import connectWithSocketio from '../(communication)/connectWIthio';
import TutSocket from '../(communication)/connectWIthio';

const Wraper = styled('div')({
    width:'100%',
    height : "100vh",
    display: 'flex',
})


function DashPage(){

    let dispatch = useDispatch();
  const [token,setToken] = useState("");
    useEffect(() => {
      let userDetails = localStorage.getItem("login");
      if (!userDetails) {
        window.location.href = "/login";
      } else {
        userDetails = JSON.parse(userDetails);
        userDetails = userDetails.userDetails;
  
        console.log(userDetails);
  
        let token = userDetails.token;
        console.log(token);

        
        setToken(token);
  
        dispatch(authJWT(userDetails));
      }
    }, []);
    return (
        
        <Wraper>
        <TutSocket token = {token} />
          <SideBar />
          <FriendsSideBar />
          <Messenger  />
          <AppBar/>
        </Wraper>
    )
}

export default DashPage;