"use client"
import {styled} from '@mui/system'
import SideBar from './(SideBar)/sideBar';
import FriendsSideBar from './(FriendSideBar)/friendSideBar';
import Messenger from './(messenger)/messenger';
import AppBar from './(AppBar)/appBar';
import { useEffect,memo } from 'react';
import { useDispatch } from 'react-redux';
import { authJWT } from '../redux/slices/auth';
import { setInvitations } from "../redux/slices/pendingFriends";
import connectWithSocketio from '../(communication)/connectWIthio';

const Wraper = styled('div')({
    width:'100%',
    height : "100vh",
    display: 'flex',
})


function DashPage(props){

    let dispatch = useDispatch();

    useEffect(() => {
      let userDetails = localStorage.getItem("login");
      if (!userDetails) {
        window.location.href = "/login";
      } else {
        userDetails = JSON.parse(userDetails);
        userDetails = userDetails.userDetails;
  
        let token = userDetails.token;

        dispatch(authJWT(userDetails));

        connectWithSocketio(userDetails,dispatch);
   
      }
    }, [dispatch]); 
    return (
        
        <Wraper>
          <SideBar />
          <FriendsSideBar />
          <Messenger  />
          <AppBar/>
        </Wraper>
    )
}

const MemoizedDashPage = memo(DashPage);

export default MemoizedDashPage;
