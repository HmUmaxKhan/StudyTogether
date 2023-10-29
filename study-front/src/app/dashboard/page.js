"use client"
import {styled} from '@mui/system'
import SideBar from './(SideBar)/sideBar';
import FriendsSideBar from './(FriendSideBar)/friendSideBar';
import Messenger from './(messenger)/messenger';
import AppBar from './(AppBar)/appBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authJWT } from '../redux/slices/auth';
import connectWithSocketio from '../(communication)/connectWIthio';

const Wraper = styled('div')({
    width:'100%',
    height : "100vh",
    display: 'flex',
})


function DashPage(){
const dispatch = useDispatch();


useEffect(()=>{
    let userDetails = localStorage.getItem("login");
    if(!userDetails){
        window.location.href="/login";
    }else{
        userDetails = JSON.parse(userDetails);
        userDetails = userDetails.userDetails

        console.log(userDetails);

        let token = userDetails.mail;
        console.log(token);

        dispatch(authJWT(userDetails));
        connectWithSocketio(userDetails);
    }
},[])
    return (
        
        <Wraper>
          <SideBar />
          <FriendsSideBar />
          <Messenger  />
          <AppBar/>
        </Wraper>
    )
}

export default DashPage;