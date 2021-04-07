import React , { useState, useEffect }from "react"
import './company.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "../Header"
import CompanyCardsLeft from "./companyCardsLeft"
import {url} from '../BaseUrl'
import axios from 'axios' ;
import List from './companyCardRight'
import logo from '../assets/offre.jpeg'


import { useHistory } from 'react-router';

function CWidget() {
  let history=useHistory();
    const [posts, setPosts] = useState([])
      useEffect(() => {
        
        axios.get(`${url}entreprise`).then( res => {
           console.log(res.data.nom)
           setPosts(res.data)
          })   
        }
            
           
   ,[])
   const Navigate =(nom)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+nom
     });
       }

      return (
    

        <div className="widgetsC">
        <div className="widgets__headerC">
            <h2>&nbsp;&nbsp;&nbsp;Related </h2>
            </div>
   
            <Tabs>
           <TabNav>
             
            <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
              <div style={{
               alignItems:'center' , display:'flex' }}>
               <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'0.5'}}> </h1>
              </div>
            </header>
              {posts.map(({ id,  nom, adresse ,about  }) => (

                <TabNavItem  > 
                                       <img style={{width:'100px' , height:'0px'}} src={logo} alt='hamma'></img>

                     <img style={{width:'60px' , height:'60px'}} src={logo} alt='hamma' onClick={()=>Navigate(nom)}></img>
<h4>{nom}</h4>
<h6>{adresse}</h6>

                   
                  </TabNavItem>
              ))}
  
            
             
           
           </TabNav>
    
          
         </Tabs>


       
        </div>
       
       
      )
    }
    
  
  
  export default CWidget ;