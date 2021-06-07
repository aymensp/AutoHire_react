import React , { useState, useEffect,useHistory,useRef }from "react"

import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "../Header"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import {url} from '../BaseUrl'
import axios from 'axios' ;


import { FullPage, Slide } from 'react-full-page';

import logo from '../assets/offre.jpeg'
import Auxiliary from '../Auxiliary'
import SuccessPopup from './ResultSuccess'
import FailPopup from './ResultFailure'
import './FormTest.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Test() {

  const handle = useFullScreenHandle();


  
  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([])
  useEffect(() => {
      
    axios.get(`${url}test`).then( res => {
        console.log(res.data)
        setPosts(res.data)
       }) 

    
        
}        
,[])
const [buttonPopup,setButtonPopup] = useState(false);
const [buttonPopup2,setButtonPopup2] = useState(false);

let qst;
let checkedValue;
let s=0;
useEffect(() => {
      
  axios.get(`${url}test/question/${qst}`).then( res => {
      console.log(res.data)
      setPosts2(res.data)
     }) 

  
      
}        
,[])


return(
  <FullScreen handle={handle}>  

  <div className="app2">
  <Header />
  
     
   <div className="app__body">
     
    <div className='listC' >
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="company_card">

<div className="company_card_header">
<br></br>
<div>     
</div>
  
     <div className="company_card_info">
   
  
         
     <div className="divP">
         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Test</h1>
         </div>
       
     </div>
 </div>
</div>
<div className="company_card_footer">
    
<div style={{ display:'flex'}}>

</div>
</div >
<div className='company_description' > 

      <button onClick={handle.enter}>
        Enter fullscreen
      </button>
      <button onClick={handle.exit}>
        Exit fullscreen
      </button>

      <div className="full-screenable-node">  
      
      
{posts.map(
        ({question,reponseA,reponseB,reponseC,reponseD}) =>
                      {
                         


s+=1;
                 
                   
                         
                       return  ( 
                      
                        <div className="full-screenable-node" style={{paddingLeft:'150px'}}>
                        <h1> {s})&nbsp;{question}</h1>
                        <br></br>

                        <label class="container" value="no">{reponseC}
                          <input type="checkbox"></input>
                          <span class="checkmark"></span>
                         
                        
                        
                        </label>  <br></br>
                        <label class="container">{reponseB}
                          <input type="checkbox"></input>
                          <span class="checkmark"></span>
                        
                        </label>  <br></br>
                        <label class="container">{reponseA}
                          <input type="checkbox"></input>
                          <span class="checkmark"></span>
                        
                        </label>  <br></br>
                        <label class="container">{reponseD}
                          <input type="checkbox"></input>
                          <span class="checkmark"></span>
                        
                        </label>
                     
                              </div>
                          
                   
                       
                       


    );})  }
     
    </div>




<br></br>


<main>
  
<div className="divP">

<button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',width:'40%'}} onClick={()=> setButtonPopup2(true)} className="btn" >done</button>

</div>
</main>

        <SuccessPopup
 trigger={buttonPopup} setTrigger = {setButtonPopup}>
         
        </SuccessPopup>
 
        <FailPopup
 trigger={buttonPopup2} setTrigger = {setButtonPopup2}>
         
        </FailPopup>
  
</div>
<img style={{width:'950px' , height:'0px'}} src={logo} ></img>

       </Auxiliary>
   </div>
 




 </div>   
        </div>
        </FullScreen>
);
  }
  


export default Test ;