import React , { useState, useEffect }from "react"
import './offres.css'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import FlipMove from 'react-flip-move'
import Header from "./Header"
import OffreCardsLeft from "./offreCardsLeft"
import {url} from './BaseUrl'
import axios from 'axios' ;
import OffreCardRight from "./offreCardRight"
import { Height } from "@material-ui/icons"
function Offres() {

  const [posts, setPosts] = useState([])
  const [date ,setDate]   = useState(null)
  useEffect(() => {
      
      axios.get(`${url}offre/All/Offre`).then( res => {
         console.log(res.data)
         setPosts(res.data)
        })   
      }
          
         
 ,[])
    return (
      <div className="offres">
       <Header/>
       <div className="searchBar">
         <div className="items">
          <button>
            Remote
          </button>
          <button>
            Date Posted
          </button>
          <button>
            Experience Level
          </button>
          <button>
            Company
          </button>
          <button>
            Job Type
          </button>
         </div>
        
       </div>
          <Tabs>
            
         <TabNav>
           
          <header style={{borderBottom:'1px solid rgba(0,0,0,0.08)',position:'sticky', zIndex:'1'}}>
            <div style={{ padding:' 8px 12px 8px 10px',borderLeft:'solid 2px #eb0392' , alignItems:'center' , display:'flex' ,height:'56px'}}>
             <h1 style={{fontSize:'18px',fontWeight:'400',lineHeight:'1.5'}}>Jobs based on your Profile</h1>
            </div>
          </header>
            {posts.map(({ id,  titre, industry, address ,createdAt   }) => (
              <TabNavItem key={id}> 
               <FlipMove>
                  <OffreCardsLeft
                key={id}
                title={titre}
                company={industry}
                addresse ={address}
                date ={createdAt}
                />
                  </FlipMove>
                </TabNavItem>
            ))}

          
           
         
         </TabNav>
  
         <TabContent >
        <div></div>
            {posts.map(({ id,  titre, industry, address ,createdAt,description , salary , poste , jobTime , type   }) => (
              <TabPanel key={id}>
                <FlipMove>
                  <OffreCardRight
                key={id}
                title={titre}
                company={industry}
                addresse ={address}
                date ={createdAt}
                description={description} 
                salary={salary}
                poste={poste}
                jobTime={jobTime}
                type ={type}
                />
                </FlipMove>
                </TabPanel>
            ))}

           
           
         
           
         </TabContent>
       </Tabs>
     
      </div>
         
     
    )
  }
  


export default Offres ;