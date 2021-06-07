
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'

import Auxiliary from '../Auxiliary'
import './company.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { useHistory } from 'react-router';
import './companyCardRight.css'
import '../Company/RatingPopup.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import {FaStar} from "react-icons/fa";

const topCompanies = forwardRef((props) => {
    const [posts, setPosts] = useState([])
   // const idCompany = localStorage.getItem('cmp')
   const userr = localStorage.getItem('user')
   const currentUser = JSON.parse(userr);
   let history = useHistory()


   const Navigate =(industry)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+industry,
     state: { industry}
     });
       }
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
      
    axios.get(`${url}entreprise`).then( res => {
        console.log(res.data)
        setPosts(res.data)
       }) 

    
        
}        
,[])
 
      

        
  
    return (
        
      <div className="widgetsC" style={{borderStyle:'hidden'}}>
      <div className="widgets__headerC" style={{width:'350px',borderStyle:'hidden'}}>
          <center>
              <br></br>
          <h2 style={{color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Companies</h2></center>
          </div>
          {posts.map(
                    ({ nom, logo}) => {




                     
                      return (
   <div style={{borderStyle:'hidden'}}>
                      <br></br>
            {newsArticle("", <h2 onClick={()=>Navigate(nom)}>{nom}</h2> )}
          
            
            </div>
                      );

                    })}

                 
        </div>





    )

})


export default  topCompanies