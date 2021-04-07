import React,{useState} from 'react'
import './RatingPopup.css'
import company from './company.js'
import {url} from '../BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
function RatingPopup(props)
{
    const user = useSelector(selectUser)

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

                  {props.children}
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
                    <button type="submit" onClick={(e)=>RateFn(e)}>done</button>
                    <button className ="close-btn" onClick ={()=>props.setTrigger(false)}>close</button>


                    </form>

</div>
        </div>
        ) : "";
}
export default RatingPopup ;