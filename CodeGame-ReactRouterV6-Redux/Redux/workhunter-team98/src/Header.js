import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/user/userSlice';
import { auth } from './firebase';
import logo from './images/logo.png'
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()

    }
    return (
        <div className="" style={{ "width": "100%" }}>
            <div className="header">
                <div className="header_left">

                    <label htmlFor="click" for="mainHeader" className="menubar">
                        <MenuIcon className="menu-icon" />
                    </label>
                    <input type="checkbox" name="" id="mainHeader" className="inputBox" />


                    <img className="header-logo" src={logo} alt="" />
                    <h1 className="header-title">WORK HUNTER</h1>

                    <div className="header_search">
                        <SearchIcon></SearchIcon>
                        <input type="text" name="" id="" placeholder="search your dream job" />
                    </div>
                </div>

                <div className="header_right">
                    <HeaderOption Icon={HomeIcon} title="Home" className="header-menu-item" />
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network" className="header-menu-item" />
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs" className="header-menu-item" />
                    <HeaderOption Icon={ChatIcon} title="Messaging" className="header-menu-item" />
                    <HeaderOption Icon={NotificationsIcon} title="Notification" className="header-menu-item" />
                    <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} className="header-menu-item" />
                </div>
            </div>
        </div>
    )
}

export default Header