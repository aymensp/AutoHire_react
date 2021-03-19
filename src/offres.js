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
       <Tabs>
         <TabNav>
           
          
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
        
            {posts.map(({ id,  titre, industry, address ,createdAt  }) => (
              <TabPanel key={id}>
                <FlipMove>
                  <OffreCardRight
                key={id}
                title={titre}
                company={industry}
                addresse ={address}
                date ={createdAt}
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