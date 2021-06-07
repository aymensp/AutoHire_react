import React , { useState, useEffect } from 'react'
import '../List.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;

import { useHistory } from 'react-router';

function OffresCmp(props) {
    const [posts, setPosts] = useState([])
    let history=useHistory();
    let nomCmp=props.location.pathname.split('/')[2];

    useEffect(() => {
      
        axios.get(`${url}entreprise/n/${nomCmp}`).then( res => {
        
           setPosts(res.data)
         
          })   
        }
            
           
   ,[])
 

return(


 <div>
     <br></br>
    <div>
          <br></br>
       
        {posts.map(({ id, nom, industry, about ,adresse,website, size, type, founded ,specialities }) => (
              
              
           

    <ul style={{listStyle:'none'}}>
        
       
    <li>  <div >
       <h3 style={{color:'gray' , lineHeight:'1.5'}}>Overview</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <br></br>
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {about}</p>
         </div></li>
         <br></br>
        <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>Website</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a style={{ color : 'blue' , fontSize:'13px' }} href={`${website}`}>{website}</a>

         </div>
         </li>
         <br></br>

         <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>Industry</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {industry}</p>

         </div>
         </li>         <br></br>

         <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>Company Size</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {size}</p>
         </div>
         </li>         <br></br>

         <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>Type</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {type}</p>
         </div>
         </li>         <br></br>

         <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>Founded</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {founded}</p>
         </div>
         </li>         <br></br>

         <li> <div style={{   display: 'flex' , marginTop:'2px'}}>
         <h5 style={{color:'gray' , lineHeight:'1.5'}}>specialities</h5> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}> {specialities}</p>
         </div>
         </li>
         </ul>
   


                 
            ))}
        
    </div></div>
)
}

export default OffresCmp