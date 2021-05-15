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
    const [erreur, setErreur] = useState('');
    const [entreprise, setEntreprise] = useState('');
    const [employee, setEmployee] = useState('');
    const userr = localStorage.getItem('user')
    const currentUser = JSON.parse(userr);
    const RateFn = (e) => {
        e.preventDefault();
        if((rating1>0)&&(rating2>0)&&(rating3>0)&&(rating4>0)&&(rating5>0)&&(rating6>0))
        {
        axios.post(`${url}evaluation/newEvaluation`, {
            integrity: rating1,
          planification: rating2,
          ponctuality: rating3,
          innovation: rating4,
          motivation: rating5,
          amelioration: rating6,
          commentaire: "test",
          entreprise: "Wevioo",
          employee: "aymen"
          })
          .then( (response)=>{
             
            props.setTrigger(false)
            setRating1(0)
            setRating2(0)
            setRating3(0)
            setRating4(0)
            setRating5(0)
            setRating6(0)
          }
          , (error) => {
            console.log(error);
          });
        }
        else{
          setErreur("empty values !")
        }
    }
    return (props.trigger) ?(
 
        <div className="popup">
        
            <div className = "popup_inner">
    {props.children}
           
    <button className ="btn_Cancel" onClick ={()=>
                      {props.setTrigger(false);
                       
                      
                      }}> <h1>X</h1></button>

</div>
        </div>
        ) : "";
}
export default RatingPopup ;