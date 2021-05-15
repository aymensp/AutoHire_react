import React,{useState} from 'react'
import './CandidatPopup.css'

import {url} from './BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
import { grey } from '@material-ui/core/colors'
function MailCandidatPopup(props)
{
  


   
    const [erreur, setErreur] = useState('');
   
    
    
    return (props.trigger) ?(
 
        <div className="popupMailCandidat">
        
            <div className = "popup_inner">
          <p>{props.children}</p>
            
          
            <br></br> 
         
                  <form>
                
                    <button className ="btn_Cancel" onClick ={()=>props.setTrigger(false)}> <h1>X</h1></button>


                    </form>

</div>
        </div>
        ) : "";
}
export default MailCandidatPopup ;