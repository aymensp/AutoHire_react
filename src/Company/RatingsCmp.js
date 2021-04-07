import { Avatar, Button } from '@material-ui/core'
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'
import logo from '../assets/offre.jpeg'
import Auxiliary from '../Auxiliary'
import './company.css'
import RatingPopup from './RatingPopup'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";

import FlipMove from 'react-flip-move'
import './companyCardRight.css'
import '../Company/RatingPopup.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import {FaStar} from "react-icons/fa";

const RatingCmp = forwardRef((props) => {
    const [posts, setPosts] = useState([])
   // const idCompany = localStorage.getItem('cmp')
const {idCompany} = props.match.params;
   useEffect(() => {
      
    axios.get(`${url}avis/e/603e62487d085e0b3454cbb2`).then( res => {
        console.log(res.data)
        setPosts(res.data)
       }) 

    
        
}        
,[])
 
      

        
const [buttonPopup,setButtonPopup] = useState(false);
   let s = 0;
   let l,avg = 0;
   let result ;

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
const [rating ,setRating] = useState(null);
const [hover,setHover] =useState(null);
const [comment, setComment] = useState('');
const RateFn = (e) => {
    e.preventDefault();
    axios.post(`${url}avis/newAvis`, {
        niveau: rating,
          commentaire: comment,
          entreprise: "ho",
          personne: "hii"
      })
      .then( (response)=>{
      
        console.log(response.data)

      }
      , (error) => {
        console.log(error);
      });
}
    return (
        
       <Auxiliary>
    
<div className='company_description'> 

        
         
<div className='absolute'> 
<h3>Rate this Company!</h3>
<form>
                  <div>
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue}
                        onClick={()=>(setRating(ratingValue))}
                       /> 
                       <FaStar className="star" color ={ratingValue <= (hover ||rating) ?"#ffc107":"#e4e5e9"}
                       size={15}
                       onMouseEnter={()=>setHover(ratingValue)}
                       onMouseLeave = {()=> setHover(null)}/>
                       </label>


    );}) }     
                    </div>
                  
                    <input value={comment} onChange={e => setComment(e.target.value)}  type="text"/>
      <button type="submit" style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7' }} className="btnAvis" onClick={(e)=>RateFn(e)}>rate</button>


                    </form>
       <RatingPopup
trigger={buttonPopup} setTrigger = {setButtonPopup}>
           <h3>Rating </h3>
       </RatingPopup>
        </div>       
  
<main>
      
        </main>

   
    
    <h6 className='hide'>  {posts.map(
        ({niveau }) =>
                      {
                          s+=niveau

                          l=posts.length




                       
                      
                         
                      })  }</h6>
  
        

  {avg = s/l ,compare()  }
 

    

    <h3><div> Total Ratings:    
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
                    <br></br>
                    Comments  :</h3>
                    
                   
    
    {posts.map(
        ({commentaire,niveau ,personne}) =>
                      {
                         



                       
                      
                         
                       return  (  <p id = "comment" >

<h2>                         
<img className='imgCircleComment' src={logo} ></img> &nbsp;&nbsp;

Rania </h2>


<div className='starsComment'>
                      {[... Array(niveau)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }   
                    </div>   
                    <br></br>                      {commentaire}</p>
                       
                       


    );})  }
  
        
 
    
  
</div>
  
        
 
</Auxiliary>
    

    )

})


export default  RatingCmp