import React,{useState} from 'react'
import {url} from '../BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
import { grey } from '@material-ui/core/colors'
function ResultSuccess(props)
{
    const user = useSelector(selectUser)

    return (props.trigger) ?(
 
        <div className="popup">
        
            <div className = "popup_inner">
 
            <h1 style={{color:'#eb0392 '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Congratulations&nbsp;!</h1>
           <br>
         </br>
         <br>
         </br>
                  <div className="divP">
                  &nbsp;   &nbsp;    &nbsp;   &nbsp;   <p>you succeeded in the test and your score is 50%!
                  get ready for the next step in the process !</p>
               
                    <button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',width:'50%'}} className="btn"  onClick ={()=>props.setTrigger(false)}>Best of Luck !</button>
                   

       </div>
</div>
        </div>
        ) : "";
}
export default ResultSuccess ;