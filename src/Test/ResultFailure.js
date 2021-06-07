import React,{useState} from 'react'
import {url} from '../BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
import { grey } from '@material-ui/core/colors'
function ResultFailure(props)
{
    const user = useSelector(selectUser)

    return (props.trigger) ?(
 
        <div className="popup">
        
            <div className = "popup_inner">
 
            <h1 style={{color:'#eb0392 '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Unfortunatly&nbsp;!</h1>
          
         
                  <div className="divP">
                  &nbsp;   &nbsp;    &nbsp;   &nbsp;   <p>  you didn't suceed in the test and your score was 50%!
                          you can do better!</p>

                      
                    <button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',width:'50%'}} className="btn"  onClick ={()=>props.setTrigger(false)}>Best of Luck !</button>
                   

       </div>
</div>
        </div>
        ) : "";
}
export default ResultFailure ;