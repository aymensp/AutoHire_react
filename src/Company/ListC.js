import React , { useState, useEffect } from 'react'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import './Navbar.css';

import logo from '../assets/offre.jpeg'
import Auxiliary from '../Auxiliary'
import './company.css'
import Header from "../Header"
import Widgets from './Cwidget';
import './companyCardRight.css'
import './RatingPopup.css'
import {FaStar} from "react-icons/fa";
import './ListC.css'
import { Link } from "react-router-dom";
import RatingPopup from './RatingPopup'
import Employee from './Emloyee';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RatingCmp from './RatingsCmp';
import OffresCmp from './OffresCmp';
import { useHistory, useLocation } from 'react-router';
function List() {
  let history = useHistory();
  let location = useLocation();

    const [posts, setPosts] = useState([])
    const [posts2, setPosts2] = useState([])
    let idCompany="603e62487d085e0b3454cbb2"
      useEffect(() => {
        const query = new URLSearchParams(location.search);
       const industry= query.get('industry');
        axios.get(`${url}entreprise/n/${industry}`).then( res => {
           console.log(res.data.nom)
           setPosts2(res.data)
          })   
        }
            
           
   ,[])
 
   
  let idComp
   

  const Navigate =(industry)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+industry
     });
       }
      
return(
  <div className="app2">
  <Header />
     
   <div className="app__body">
    <div className='listC'>
    
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="company_card">

<div className="company_card_header">
<br></br>
<div>     
</div>
     <img style={{width:'120px' , height:'120px'}} src={logo} alt='hamma'></img>
     <div className="company_card_info">
     {posts2.map(
        ({nom,industry,about ,adresse}) =>
                      {
                         



                        console.log(idComp)
                      idComp={nom}
                         console.log(idComp)
                       return  ( 
                 
                         <p > <h2>{nom}</h2>
                          <p >{adresse}</p>
                         
                       <p >{industry}</p>
                       <br>
                          </br>
                       <p >{about}</p>
                      
                  
                       </p>
                       
                       


    );})  }
  
         
            
         <div style={{   display: 'flex' , marginTop:'2px'}}>
             <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' ,lineHeight:'1.7',marginRight:'8px'}}>
         
             </p>
           
         </div>
         
       
     </div>
 </div>
</div>
<div className="company_card_footer">
    
<div style={{ display:'flex'}}>

</div>
</div >
<div className='company_description' > 

<div style={{display: 'inline'}}>

<Router>
        <Navbar />
      
       
        <Switch>
     
          <Route path='/offresCmp/' component={OffresCmp}  />
          <Route path='/employees' component={Employee}  />
         
          <Route path='/ratings/:idCompany' component={RatingCmp}  /> 
         
        </Switch>
      </Router>
 

      </div>
  

    
        
 
    
  
</div>
<img style={{width:'850px' , height:'0px'}} src={logo} ></img>

       </Auxiliary>
   </div>
  
 




 </div>   
        </div>

)
}

export default List