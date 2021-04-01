import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './assets/logoHeader.png'
import { useHistory } from 'react-router'

function Header() {
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user);

    let history = useHistory()
    const logoutOfApp = () => {
        localStorage.clear()
        window.location.reload()
    }
    const navigate = (route) => {
   history.push(`${route}`)
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="" onClick={()=>navigate('home')}/>
                
                <div className="header__search">
                <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

           {user.role==='ADMIN' ?
                <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home" onClick={()=>navigate('home')}/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" onClick={()=>navigate('jobs')}/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true} title="Me" 
                onClick={(logoutOfApp)}
                />
            </div> :
              <div className="header__right">

            
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs" onClick={()=>navigate('jobsSettings')}/>
              <HeaderOption Icon={ChatIcon} title="Messaging"/>
              <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
              <HeaderOption avatar={true} title="Me" 
              onClick={(logoutOfApp)}
              />
          </div> 
              }

      
        </div>
    )
}

export default Header
