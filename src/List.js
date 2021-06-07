import React , { useState, useEffect } from 'react'
import './List.css'
import {url} from './BaseUrl'
import axios from 'axios' ;
import FlipMove from 'react-flip-move'
import logo from './assets/offre.jpeg'
import { useHistory } from 'react-router';
import { BsFillPersonLinesFill } from "react-icons/bs";


function List(props) {
    const [posts, setPosts] = useState([])
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user)
    let history = useHistory()

    const NavigateApplicant =(idOffre,salary,time,poste,type,description)=>{
      history.push({pathname:'/applicants',
       search:  'offreid'+'time'+time+'s'+salary+'poste'+poste+'type'+type+'description'+description+'='+idOffre,
       state: { idOffre}
       });
         }  
         const Navigate =(industry)=>{
          history.push({pathname:'/company',
           search:  'industry'+'='+industry,
           state: { industry}
           });
             }
 
  

    useEffect(() => {
       
        if (props.rh==='applied'){
            axios.get(`${url}offre/OffersForApplicant/${currentUser._id}`).then( res => {
                setPosts(res.data)  
               })   
          
        }
        else if (props.rh==='saved'){
            axios.get(`${url}offre/SavedJobs/${currentUser._id}`).then( res => {
              
                setPosts(res.data)
                
        
               }) .catch(err=>{

                setPosts([])
                
               }
            
                )
        }
          else {
            axios.get(`${url}offre/ByCreator/${currentUser.username}`).then( res => {
              
                setPosts(res.data)
                
        
               }) .catch(err=>{

                setPosts([])
                
               }
            
                )

          }
        }
            
           
   ,[props.rh])
  
return(
   
   <div className='list'>
     
       {posts.length!==0 ?
  <div style={{width:'300px'}}>
  {posts.map(({ _id,  titre, company, address,type,jobTime,salary,description ,poste}) => (
        <div key={_id}> 
         <FlipMove>
         <div  >

<div className="offre__header" 
>
<img style={{width:'50px' , height:'50px',paddingTop:'10px'}} src={`${url}images/${company}.png`}></img>
<div style={{borderBottom:'1px solid rgb(219, 214, 214) ', width:'100%',padding:'10px'}} className="offre__info">
   <h4 style={{color:'black' , lineHeight:'1.5'}}>{titre}</h4>
   <p onClick={()=>Navigate(company)} style={{color:'black'}}>{company}</p>
   <p >{address}</p>
   <div style={{   display: 'flex' , marginTop:'2px'}}>
   <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' }}  onClick={()=>NavigateApplicant(_id,salary,jobTime,poste,type,description)} > <BsFillPersonLinesFill/> &nbsp; Candidates </p>

   </div>
</div>
</div>
</div>
            </FlipMove>
          </div>
      ))}
  </div>
:
<div style={{width:'300px'}} >
<h3>Apply for new jobs</h3>
<button onClick={()=>{history.push('/jobs')}}>click Here!</button>
</div>
       }
      
    </div>

)
}

export default List