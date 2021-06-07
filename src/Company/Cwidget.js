
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'

import Auxiliary from '../Auxiliary'
import './company.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


import '../Company/RatingPopup.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import {FaStar} from "react-icons/fa";

const RatingCmp = forwardRef((props) => {
    const [posts, setPosts] = useState([])
   // const idCompany = localStorage.getItem('cmp')
   const userr = localStorage.getItem('user')
   const currentUser = JSON.parse(userr);
   
   const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)
   useEffect(() => {
      
    axios.get(`${url}evaluation/e/${currentUser.username}`).then( res => {
        console.log(res.data)
        setPosts(res.data)
       }) 

    
        
}        
,[])
 
      

        
const [buttonPopup,setButtonPopup] = useState(false);
   let s = 0;
   let l,avg = 0;
   let result ;
   let s1=0;
   let avg1=0;
   let result1;
   let s2=0;
   let avg2=0;
   let result2;
   let s3=0;
   let avg3=0;
   let result3;
   let s4=0;
   let avg4=0;
   let result4;
   let s5=0;
   let avg5=0;
   let result5;
   let s6=0;
   let avg6=0;
   let result6;
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
const compare1 = () => {
  if (avg1 <= 1) {
      result1 = 1;
    } else if (avg1 <= 2) {
      result1 = 2;
    } else if (avg1 <= 3) {
      result1 = 3;
    } else if (avg1 <= 4) {
      result1 = 4;
    } else if (avg1 > 4) {
      result1 = 5;
    } else {
      result1 = 1;
    }
    return result1
}
const compare2 = () => {
  if (avg2 <= 1) {
    result2 = 1;
    } else if (avg2 <= 2) {
      result2 = 2;
    } else if (avg2 <= 3) {
      result2 = 3;
    } else if (avg2 <= 4) {
      result2 = 4;
    } else if (avg2 > 4) {
      result2 = 5;
    } else {
      result2 = 1;
    }
    return result2
}
const compare3 = () => {
  if (avg3 <= 1) {
    result3 = 1;
    } else if (avg3 <= 2) {
      result3 = 2;
    } else if (avg3 <= 3) {
      result3 = 3;
    } else if (avg3 <= 4) {
      result3 = 4;
    } else if (avg3 > 4) {
      result3 = 5;
    } else {
      result3 = 1;
    }
    return result3
}
const compare4 = () => {
  if (avg4 <= 1) {
    result4 = 1;
    } else if (avg4 <= 2) {
      result4 = 2;
    } else if (avg4 <= 3) {
      result4 = 3;
    } else if (avg4 <= 4) {
      result4 = 4;
    } else if (avg4 > 4) {
      result4 = 5;
    } else {
      result4 = 1;
    }
    return result4
}
const compare5 = () => {
  if (avg5 <= 1) {
    result5 = 1;
    } else if (avg5 <= 2) {
      result5 = 2;
    } else if (avg5 <= 3) {
      result5 = 3;
    } else if (avg5 <= 4) {
      result5 = 4;
    } else if (avg5 > 4) {
      result5 = 5;
    } else {
      result5 = 1;
    }
    return result5
}
const compare6 = () => {
  if (avg6 <= 1) {
    result6 = 1;
    } else if (avg6 <= 2) {
      result6 = 2;
    } else if (avg6 <= 3) {
      result6 = 3;
    } else if (avg6 <= 4) {
      result6 = 4;
    } else if (avg6 > 4) {
      result6 = 5;
    } else {
      result6 = 1;
    }
    return result6
}


    return (
        
      <div className="widgets">
     
          <h3 style={{color:'#eb0392'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ratings </h3>
        

    
    <h6 >  {posts.map(
        ({integrity }) =>
                      {
                          s+=integrity 
                          l=posts.length 
                      })  }</h6>
   <h6 className='hide'> 

{avg = s/l ,compare()  }</h6>

   <h6 className='hide'>  {posts.map(
        ({planification }) =>
                      {
                          s1+=planification
                           
                      })  }</h6>
  
  <h6 className='hide'> 

{avg1 = s1/l ,compare1()  }</h6>
 

<h6 className='hide'>  {posts.map(
        ({ponctuality }) =>
                      {
                          s2+=ponctuality
                           
                      })  }</h6>
  
  <h6 className='hide'> 

{avg2 = s2/l ,compare2()  }</h6>
<h6 className='hide'>  {posts.map(
        ({innovation }) =>
                      {
                          s3+=innovation
                           
                      })  }</h6>
  
  <h6 className='hide'> 

{avg3 = s3/l ,compare3()  }</h6>
<h6 className='hide'>  {posts.map(
        ({motivation }) =>
                      {
                          s4+=motivation
                           
                      })  }</h6>
  
  <h6 className='hide'> 

{avg4 = s4/l ,compare4()  }</h6>
<h6 className='hide'>  {posts.map(
        ({amelioration }) =>
                      {
                          s5+=amelioration
                           
                      })  }</h6>
  
  <h6 className='hide'> 

{avg5 = s5/l ,compare5()  }</h6>
<h6 className='hide'> 
{s6 = result+result1+result2+result3+result4+result5  }</h6>
<h6 className='hide'> 
{avg6 = s6/6 ,compare6()  }</h6>


            <h6 className='hide'>  {posts.map(
        ({integrity }) =>
                      {
                          s+=integrity

                          l=posts.length

console.log(s)


                       
                      
                         
                      })  }</h6>
  
        
   
  <h6 className='hide'> 
  {avg = s/l ,compare()  }
 </h6>
                      
            {newsArticle("Total Ratings",     <h5>   
                      {[... Array(result6)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>
    )}
            {newsArticle("Integrity: ",  <h5>   
                      {[... Array(result)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
            {newsArticle("Planification:",  <h5>   
                      {[... Array(result1)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
            {newsArticle("Ponctuality:",  <h5>   
                      {[... Array(result2)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
            {newsArticle("Innovation :",  <h5>   
                      {[... Array(result3)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
            {newsArticle("Motivation: ",  <h5>   
                      {[... Array(result4)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
            {newsArticle("Amelioration:", <h5>   
                      {[... Array(result5)].map((star,i)=>
                      {
                          const ratingValue = i + 1;
                       return  (  <label >
                         
                       <FaStar className="star" color ="#ffc107"
                       size={15}
                     />
                       </label>


    );}) }</h5>)}
          
           
                    
        </div>





    )

})


export default  RatingCmp