import React , { useState ,useEffect} from 'react'
import './Profile.css';
import './Sidebar.css';
import Header from './Header';
import logo from './assets/logoHeader.png'
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import './App.css';
import Sidebar from './Sidebar';
import {url} from './BaseUrl';
import Modal from './uploadPdf'
import { Avatar, Icon } from '@material-ui/core';
import Auxiliary from './Auxiliary'
import axios from 'axios';

function Profile() {
 const [purchasing ,setPurchasing] = useState(false);
 const [user ,setUser] = useState([]);
 const userr = localStorage.getItem('user')
 const currentUser = JSON.parse(userr);
 useEffect(() => {
        
      axios.post(`${url}user/me`, {
        username: currentUser.username,
        
      }).then( res => {
     setUser(res.data) ;
     })  
     
    }
        
       
,[])
const Capitalize =(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
const checkResume = (resume) => {

if ((resume === "NORESUME") || (resume === "null") ){

    return false;
}
return true;
} 

const profileCards = (<Auxiliary>

<div className="profile__content_top">

<p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>Experience </p>
<p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>{user.experience}</p>
</div>
<div className="profile__content_top">

<p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>Education </p>
<p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>{user.education} </p>
</div>
<div className="profile__content_top">  

<p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>Skills </p>
<p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>{user.skills}</p>
</div>
</Auxiliary>);
const hamma = checkResume(user.resume);
return(
<div className="profile">

<Header />     
        <div className="profile__body">
         
            <div className="profile__content_top_left">
                <div className="profile__content_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWRBMXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <div style={{display:'flex'}}>
                <Avatar  src={`${process.env.PUBLIC_URL}/Users/ayman/Desktop/IOS/Mini/AutoHireBack/uploads/ayman.jpeg`} className="profile__content_top__avatar"/>
                <div style={{flex:'0.97' }}>
                </div>
                <div className="pencil">
                <CreateTwoToneIcon className="pencil__icon" />
                </div>
                </div>
                <div style={{display : 'flex' ,marginLeft:"20px"}}>
                
                <div >
                <p style={{ fontSize: '24px',
                          
                          lineHeight: '1.5'
                   }}>{Capitalize(currentUser.username)}</p>
                <p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' }}>Etudiant a Ecole Superieur Prive d'Ingenieurie et de Technologie - Esprit</p>
                <p style={{fontSize : "16px",  lineHeight: '1.5' , marginTop : '3px'}}> {Capitalize(currentUser.address)}</p>
                </div>
                <div  style={{display : 'flex',marginLeft:"20px"  ,height:'50px' }}>
                <img style={{
                    height:'25px' , width: '25px' , marginRight :'10px'
                }} src={logo}/>

                <a href='#' style={{ maxWidth:'200px' ,color: 'black',fontWeight:'bold' , fontSize:'14px' ,marginTop:'3px'}} >Esprit hhahhah  </a>
                </div>
                
                </div>
                
                </div>
                <div className="profile__content_top">
                <div style={{display:'flex'}}>
                    <div style={{flex:'0.97'}} >
                    <p style={{fontSize:"18px", lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>
                    About
                    </p>
                    </div>
                
                <div className="pencil" style={{marginTop:'13px'}}>
                <CreateTwoToneIcon className="pencil__icon" />
                </div>
                </div>
                <p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>
                 A software engineering student, passionate about Web Development, Mobile Development,Cyber Security enthusiast, fearless
                 and always eager to learn. I always keep my self up to date with the latest technologies and I enjoy working on innovative 
                 projects. Tags: JavaScript, TypeScript, Angular, Android ,Redux, HTML5, CSS3, Bootstrap, JQuery, Sass, UI/UX Concepts, 
                 NodeJS, MySQL, MongoDB, REST APIs, ExpressJS, GraphQL, Git
                </p>
</div>
{  hamma ? profileCards : 
<Auxiliary> 
    
<Modal experience={user.experience} skills={user.skills} education={user.education} show={purchasing} modalClosed={()=>setPurchasing(false)}/> 
  
<div className="profile__content_top" style={{padding : '10px',alignItems: 'center' }}> 

<button style={{backgroundColor:'#eb0392',border:'none' , color : 'white' ,borderRadius :'10px', alignItems: 'center',width :'300px' ,height:'30px'}} 
onClick={()=>setPurchasing(true)}
> Upload Resume To update your Profile</button>

</div>
</Auxiliary>
}
       </div>
        <Sidebar />
      </div>
</div>

   );
}


export default Profile ;


