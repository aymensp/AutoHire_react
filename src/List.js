import React , { useState, useEffect } from 'react'
import './List.css'
import {url} from './BaseUrl'
import axios from 'axios' ;
import FlipMove from 'react-flip-move'
import logo from './assets/offre.jpeg'
import { useHistory } from 'react-router';


function List(props) {
    const [posts, setPosts] = useState(null)
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user)
    let history = useHistory()
    useEffect(() => {
        console.log(props.rh)
        if (props.rh==='applied'){
            axios.get(`${url}offre//OffersForApplicant/${currentUser._id}`).then( res => {
                setPosts(res.data)  
               })   
          
        }
        else{
            axios.get(`${url}offre/ByCreator/${currentUser.username}`).then( res => {
              
                setPosts(res.data)
        
               }) 
        }
          
        }
            
           
   ,[props.rh])
return(
   
   <div className='list'>
       {posts ?
  <ul>
  {posts.map(({ id,  titre, company, address  }) => (
        <li key={id}> 
         <FlipMove>
         <div style={{ }}  className="offre">

<div className="offre__header">
<img style={{width:'50px' , height:'50px',paddingTop:'10px'}} src={logo} alt='hamma'></img>
<div style={{borderBottom:'1px solid rgb(219, 214, 214) ', width:'100%',padding:'10px'}} className="offre__info">
   <h4 style={{color:'black' , lineHeight:'1.5'}}>{titre}</h4>
   <p style={{color:'black'}}>{company}</p>
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
:
<div >
<h3>Apply for new jobs</h3>
<button onClick={()=>{history.push('/jobs')}}>click Here!</button>
</div>
       }
      
    </div>

)
}

export default List