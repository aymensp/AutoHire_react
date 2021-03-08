import React from 'react'
import './Profile.css';
import './Sidebar.css';
import Header from './Header';
import logo from './assets/logoHeader.png'
import './App.css';
import Sidebar from './Sidebar';
import { Avatar } from '@material-ui/core';

function Profile() {

   return(

<div className="profile">

<Header />     
        <div className="profile__body">
         
            <div className="profile__content_top_left">
                <div className="profile__content_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWRBMXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
                <Avatar  src="/broken-image.jpg" className="profile__content_top__avatar"/>
                <div style={{display : 'flex' ,marginLeft:"20px"}}>
                
                <div >
                <p style={{ fontSize: '24px',
                          
                          lineHeight: '1.5'
                   }}>Aymen SMATI</p>
                <p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' }}>Etudiant a Ecole Superieur Prive d'Ingenieurie et de Technologie - Esprit</p>
                <p style={{fontSize : "16px",  lineHeight: '1.5' , marginTop : '3px'}}> Tunis , Tunisia</p>
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

                    <p style={{fontSize:"18px" , maxWidth : '450px' , lineHeight: '1.3333' ,marginLeft:'20px' ,marginTop:'20px'}}>About </p>
                    <p style={{fontSize:"13px" , lineHeight: '1.3333' ,margin:'20px'}}>A software engineering student, passionate about Web Development, Mobile Development,Cyber Security enthusiast, fearless and always eager to learn. I always keep my self up to date with the latest technologies and I enjoy working on innovative projects.

                    Tags: JavaScript, TypeScript, Angular, Android ,Redux, HTML5, CSS3, Bootstrap, JQuery, Sass, UI/UX Concepts, NodeJS, MySQL, MongoDB, REST APIs, ExpressJS, GraphQL, Git </p>
                </div>
                
            </div>
            
        
        <Sidebar />
      </div>
</div>

   );
}


export default Profile ;


