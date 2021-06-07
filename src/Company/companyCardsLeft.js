import React ,{ forwardRef ,useEffect,useState}  from 'react'
import logo from '../assets/offre.jpeg'
import './companyCardLeft.css'
import './company.css'
import  timeago from '../time'


const CompanyCardsLeft = forwardRef(({ nom, industry,about,adresse}, ref) => {
  

    useEffect(() => {
      
        
              
        }
        

        
            
           
   ,[])
    return (

        <div  className="widgets__articleC">

        
               
                <div className="widgets__articleRightC">
                <img style={{width:'50px' , height:'50px'}} src={logo} alt='hamma'></img>
                    <h4>{nom}</h4>
                    <p >{industry}</p>
                    <p >{about}</p>
                    <p >{adresse}</p>
                </div>
            </div>
       
    )

})


export default CompanyCardsLeft