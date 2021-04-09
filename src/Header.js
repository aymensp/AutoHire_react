import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import { Avatar } from '@material-ui/core'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from './assets/logoHeader.png'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user);
    let history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);

    //open menu
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    //close menu
    const handleClose = () => {
      setAnchorEl(null);
    };
    const logoutOfApp = () => {
        localStorage.clear()
        window.location.reload()
        history.push('/login')
    }
    const navigate = (route) => {
   history.push(`${route}`)
    }
    return (
        <div className="header">
            <div className="header__left">
                <img style={{cursor:'pointer'}} src={logo} alt="" onClick={()=>navigate('/')}/>
                
                <div className="header__search">
                <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

           {currentUser.role!='ADMIN' ?
                <div className="header__right">
 <HeaderOption Icon={HomeIcon} title="Home" onClick={()=>navigate('/')}/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" onClick={()=>navigate('jobs')}/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={true} title="Me" 
                onClick={(handleClick)}
                />
                 <Menu
                
                id="simple-menu"
                anchorEl={anchorEl}
               
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >   
                <div onClick={()=>navigate('profile')}  style={{width:'240px',borderBottom:'1px solid lightgray'}}>
                <div style={{display:'flex',padding:'9px' ,cursor:'pointer', maxWidth:'220px'}}>
                
                <Avatar  >{currentUser?.username[0]}</Avatar>
                <div style={{marginLeft:'10px'}}>
                    <h3 style={{lineHeight:'1.3',fontWeight:'bold'}}>{currentUser.username}</h3>  
                    <p>hamma eddine el hammewi</p>
                </div>
                
                </div>
                <button onClick={()=>navigate('profile')}  style={{cursor:'pointer',fontWeight:'bold',fontSize:'15px',width:'90%',color:'#eb0392',backgroundColor:'white',padding:'5px', margin:'10px' , borderRadius:'15px' ,border:'none',boxShadow:'inset 0 0 0 1px #eb0392'}}>View Profile</button>
                </div>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={()=>navigate('/myJobs')}  >My Jobs</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={logoutOfApp} >Settings & Privacy</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={logoutOfApp} >Languages</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={logoutOfApp} >Logout</MenuItem>
                
            </Menu>
            
            </div> :
              <div className="header__right">
   <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs" onClick={()=>navigate('jobsSettings')}/>
              <HeaderOption Icon={ChatIcon} title="Messaging"/>
              <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
              <HeaderOption avatar={true} title="Me" 
              onClick={(handleClick)}
              />
               <Menu
                
                id="simple-menu"
                anchorEl={anchorEl}
               
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >   
                <div onClick={()=>navigate('profile') }style={{width:'240px',borderBottom:'1px solid lightgray'}}>
                <div style={{display:'flex',padding:'9px' ,cursor:'pointer', maxWidth:'220px'}}>
                
                <Avatar  >{currentUser?.username[0]}</Avatar>
                <div style={{marginLeft:'10px'}}>
                    <h3 style={{lineHeight:'1.3',fontWeight:'bold'}}>{currentUser.username}</h3>  
                    <p>hamma eddine el hammewi</p>
                </div>
                
                </div>
                <button onClick={()=>navigate('profile')} style={{cursor:'pointer',fontWeight:'bold',fontSize:'15px',width:'90%',color:'#eb0392',backgroundColor:'white',padding:'5px', margin:'10px' , borderRadius:'15px' ,border:'none',boxShadow:'inset 0 0 0 1px #eb0392'}}>View Profile</button>
                </div>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={()=>navigate('/jobsSettings')}  >Posted Jobs</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={()=>navigate('/emp')}  >employees</MenuItem>

                <MenuItem style={{fontSize:'13px',color:'gray'}}  >Settings & Privacy</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} >Languages</MenuItem>
                <MenuItem style={{fontSize:'13px',color:'gray'}} onClick={logoutOfApp} >Logout</MenuItem>
                
            </Menu>
            
             <HeaderOption  Border={AssignmentIcon} title="Post a Job" onClick={()=>navigate('postJob')}/>
          </div> 
              }
   </div>
    )
}

export default Header
