import { Avatar, Button } from '@material-ui/core'
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'
import logo from '../assets/offre.jpeg'
import Auxiliary from '../Auxiliary'
import './company.css'

import Employee from "./Emloyee"
import FlipMove from 'react-flip-move'
import './companyCardRight.css'
import './RatingPopup.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import {FaStar} from "react-icons/fa";

import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingPopup from './RatingPopup'
import { TapAndPlayTwoTone } from '@material-ui/icons'
const CompanyCardRight = forwardRef(({idCompany, nom, industry ,about }) => {
    const [posts, setPosts] = useState([])
    const [rating ,setRating] = useState(null);
    const [hover,setHover] =useState(null);
 
    useEffect(() => {
      
        axios.get(`${url}avis/e/${idCompany}`).then( res => {
            console.log(res.data)
            setPosts(res.data)
           }) 

        
            
    }        
   ,[])
 
      
   
        


   const [buttonPopup,setButtonPopup] = useState(false);
   const [somme,setSomme] = useState(0);
   let s = 0;
   let l,avg = 0;
   let result ;
   const [nv,setNv] = useState(0);

   const compare = () => {
    if (avg <= 1) {
        result = 1;
      } else if (avg <= 2) {
        result = 2;
      } else if (avg <= 3) {
        result = 3;
      } else if (avg <= 4) {
        result = 4;
      } else if (avg > 4) {
        result = 5;
      } else {
        result = 1;
      }
      return result
}
    return (
      <div className='list'>
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="company_card">

<div className="company_card_header">
     <img style={{width:'120px' , height:'120px'}} src={logo} alt='hamma'></img>
     <div className="company_card_info">
         <h2>{nom}</h2>
         <p >{industry}</p>
         <p >{about}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
             <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' ,lineHeight:'1.7',marginRight:'8px'}}>
             
             </p>
             <Link
       style={{ color : '#eb0392' , fontSize:'13px',lineHeight:'1.7' }}
          to={{
            pathname: "/emp",
           // state
          }}
        >
          employés
        </Link>
         </div>
         <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px'}}> 
        <main>
        <button className="btn" onClick={()=> setButtonPopup(true)} > Donner Avis

        </button>
       
        </main>
        <RatingPopup
 trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>Rating</h3>
        </RatingPopup>
        <button className="btn2" >Offres</button>
         </div>
     </div>
 </div>
</div>
<div className="company_card_footer">
    
<div style={{ display:'flex'}}>

</div>
</div >
<div className='company_description'> 
{posts.map(
        ({commentaire,niveau }) =>
                      {
                          s+=niveau

                          l=posts.length




                       
                      
                         
                      })  }
  
        
            
  { avg = s/l}
    { compare()  }
<div>
                      {[... Array(result)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }   
                    </div>
    <h3>Comments</h3>
    
    {posts.map(
        ({commentaire,niveau }) =>
                      {
                         



                       
                      
                         
                       return  (  <p id = "comment" >{commentaire}</p>
                       
                       


    );})  }
  
        
 
    
  
</div>
       </Auxiliary>
        </div>

    )

})


export default CompanyCardRight