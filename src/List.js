import React , { useState, useEffect } from 'react'
import './List.css'
import {url} from './BaseUrl'
import axios from 'axios' ;
import OffreCardsLeft from "./offreCardsLeft"
import FlipMove from 'react-flip-move'
import logo from './assets/offre.jpeg'


function List() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      
        axios.get(`${url}offre/All/Offre`).then( res => {
           console.log(res.data)
           setPosts(res.data)
          })   
        }
            
           
   ,[])
return(
    <div className='list'>
        <ul>
        {posts.map(({ id,  titre, industry, address ,createdAt   }) => (
              <li key={id}> 
               <FlipMove>
               <div style={{ }}  className="offre">

<div className="offre__header">
     <img style={{width:'50px' , height:'50px',paddingTop:'10px'}} src={logo} alt='hamma'></img>
     <div style={{borderBottom:'1px solid rgb(219, 214, 214) ', width:'100%',padding:'10px'}} className="offre__info">
         <h4 style={{color:'black' , lineHeight:'1.5'}}>{titre}</h4>
         <p style={{color:'black'}}>{industry}</p>
         <p >{address}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> 14 candidats</p>
         </div>
     </div>
 </div>
</div>
                  </FlipMove>
                </li>
            ))}
        </ul>
    </div>
)
}

export default List