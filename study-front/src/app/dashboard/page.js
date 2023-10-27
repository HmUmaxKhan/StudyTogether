"use client"
import {styled} from '@mui/system'
import SideBar from './(SideBar)/sideBar';
import FriendsSideBar from './(FriendSideBar)/friendSideBar';
import Messenger from './(messenger)/messenger';
import AppBar from './(AppBar)/appBar';

const Wraper = styled('div')({
    width:'100%',
    height : "100vh",
    display: 'flex',
})

function DashPage(){
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