import React,{useState} from 'react'
import './CandidatPopup.css'

import {url} from './BaseUrl'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import {FaStar} from "react-icons/fa";

import axios from 'axios'; 
import { grey } from '@material-ui/core/colors'
function CandidatPopup(props)
{
  


   
    const [erreur, setErreur] = useState('');
   
    
    
    return (props.trigger) ?(
 
        <div className="popupCandidat" >
        
            <div className = "popup_inner">
          <p>{props.children}</p>
            
          
            <br></br> 
                  <form>
                 
                 


                    </form>

</div>
        </div>
        ) : "";
}
export default CandidatPopup ;