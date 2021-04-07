import React,{useState} from 'react'
import './RatingEmpPopup.css'
import company from './company.js'
import {url} from '../BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
import { grey } from '@material-ui/core/colors'
function RatingPopup(props)
{
    const user = useSelector(selectUser)

    const [rating1 ,setRating1] = useState(null);
    const [rating2 ,setRating2] = useState(null);
    const [rating3 ,setRating3] = useState(null);
    const [rating4 ,setRating4] = useState(null);
    const [rating5 ,setRating5] = useState(null);
    const [rating6 ,setRating6] = useState(null);
    const [hover1,setHover1] =useState(null);
    const [hover2,setHover2] =useState(null);
    const [hover3,setHover3] =useState(null);
    const [hover4,setHover4] =useState(null);
    const [hover5,setHover5] =useState(null);
    const [hover6,setHover6] =useState(null);

    const [comment, setComment] = useState('');
    let s ;
    const RateFn = (e) => {
        e.preventDefault();
        axios.post(`${url}evaluation/newEvaluation`, {
            integrity: rating1,
          planification: rating2,
          ponctuality: rating3,
          innovation: rating4,
          motivation: rating5,
          amelioration: rating6,
          commentaire: comment,
          entreprise: "entreprise",
          employee: user
          })
          .then( (response)=>{
             
            props.setTrigger(false)
            console.log(response.data)

          }
          , (error) => {
            console.log(error);
          });
    }
    return (props.trigger) ?(
 
        <div className="popup">
        
            <div className = "popup_inner">
 
            <h1 style={{color:'#eb0392 '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Rating&nbsp;!</h1>
          
            <br></br> 
                  <form>
                  <div className="divP">
         Integrity:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue1 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue1}
                        onClick={()=>(setRating1(ratingValue1))}
                       /> 
                       <FaStar className="star" color ={ratingValue1 <= (hover1 ||rating1) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover1(ratingValue1)}
                       onMouseLeave = {()=> setHover1(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                 Planification:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue2 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue2}
                        onClick={()=>(setRating2(ratingValue2))}
                       /> 
                       <FaStar className="star" color ={ratingValue2 <= (hover2 ||rating2) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover2(ratingValue2)}
                       onMouseLeave = {()=> setHover2(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                        
                    Ponctuality:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue3 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue3}
                        onClick={()=>(setRating3(ratingValue3))}
                       /> 
                       <FaStar className="star" color ={ratingValue3 <= (hover3 ||rating3) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover3(ratingValue3)}
                       onMouseLeave = {()=> setHover3(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                       Innovation :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue4 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue4}
                        onClick={()=>(setRating4(ratingValue4))}
                       /> 
                       <FaStar className="star" color ={ratingValue4 <= (hover4 ||rating4) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover4(ratingValue4)}
                       onMouseLeave = {()=> setHover4(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                    Motivation: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue5 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue5}
                        onClick={()=>(setRating5(ratingValue5))}
                       /> 
                       <FaStar className="star" color ={ratingValue5 <= (hover5 ||rating5) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover5(ratingValue5)}
                       onMouseLeave = {()=> setHover5(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                     Amelioration:  &nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue6 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue6}
                        onClick={()=>(setRating6(ratingValue6))}
                       /> 
                       <FaStar className="star" color ={ratingValue6 <= (hover6 ||rating6) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover6(ratingValue6)}
                       onMouseLeave = {()=> setHover6(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <br></br>
                    <div className="divP">
                    <input value={comment} onChange={e => setComment(e.target.value)}  type="text" placeholder="comment.." style={{borderRadius:'5px grey',  padding: '15px',width:'100%'}}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="divP">
                    <button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',width:'50%'}} className="btn" type="submit" onClick={(e)=>RateFn(e)}>done</button>
                    </div>
                    <button className ="btn_Cancel" onClick ={()=>props.setTrigger(false)}> <h1>X</h1></button>


                    </form>

</div>
        </div>
        ) : "";
}
export default RatingPopup ;