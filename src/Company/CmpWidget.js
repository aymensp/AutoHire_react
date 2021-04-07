import React , { useState, useEffect,useHistory }from "react"
import './company.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "../Header"
import CompanyCardsLeft from "./companyCardsLeft"
import {url} from '../BaseUrl'
import axios from 'axios' ;
import CompanyCardRight from "./companyCardRight"



function CWidget() {
    const [posts, setPosts] = useState([])
      useEffect(() => {
        
        axios.get(`${url}entreprise`).then( res => {
           console.log(res.data.nom)
           setPosts(res.data)
          })   
        }
            
           
   ,[])

      return (


        <div className="widgetsC">
        <div className="widgets__headerC">
            <h2>LinkedIn News</h2>
            </div>
     
       
            <Tabs>
           <TabNav>
             
            <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
              <div style={{
               alignItems:'center' , display:'flex' }}>
               <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'0.5'}}> </h1>
              </div>
            </header>
              {posts.map(({ id,  nom, industry ,about  }) => (

                <TabNavItem key={id}> 
                 <FlipMove>
                    <CompanyCardsLeft
                  key={id}
                 
                  nom={nom}
                  industry={industry}
                  about={about}
                  />
                    </FlipMove>
                  </TabNavItem>
              ))}
  
            
             
           
           </TabNav>
    
           <TabContent >
          <div></div>
              {posts.map(({ id,  nom, industry ,about  }) => (
                <TabPanel key={id}>
                  <FlipMove>
                    <CompanyCardRight
                  key={id}
                  idCompany={id}
                  nom={nom}
                  industry={industry}
                  about={about}
                  
                  />
                  </FlipMove>
                  </TabPanel>
              ))}
  
             
             
           
             
           </TabContent>
         </Tabs>
       
        </div>
         
       
      )
    }
    
  
  
  export default CWidget ;