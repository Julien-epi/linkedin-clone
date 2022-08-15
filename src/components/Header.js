import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import "../css/Header.css"
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import {logout} from "../features/userSlice"

export const Header = () => {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">

      <div className="header_left">

        <img src="https://imgs.search.brave.com/altDt3VbTsixCV9Z6fPlA2FcnicGwkUvFc-zaChRwFg/rs:fit:706:706:1/g:ce/aHR0cHM6Ly9lbi5y/ZXhvci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTIvMDUv/bGlua2VkaW4tbG9n/by1lMTQwNzE0NDM5/MjU0OS5wbmc" alt="" />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right">

        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar="https://zupimages.net/up/22/33/7hsm.jpg" title="My Accoun (signOut)" onClick={logoutOfApp}/>


      </div>
    </div>
  );
};
