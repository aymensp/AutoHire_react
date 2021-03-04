import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice'
import logo from './assets/logoHeader.png'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    
    const logoutOfApp = () => {
        dispatch(logout())
      
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                
                <div className="header__search">
                <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true} title="Me" 
                onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
