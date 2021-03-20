import { Avatar } from '@material-ui/core'
import React ,{ forwardRef ,useEffect,useState}  from 'react'
import logo from './assets/offre.jpeg'
import Auxiliary from './Auxiliary'
import './offreCardRight.css'
import  timeago from './time'


const offreCardRight = forwardRef(({ title, company, addresse, date , description , salary , poste , jobTime , type   }, ref) => {
  
    const [dateNow, setDate] = useState(date)

    useEffect(() => {
      
        var timeStampDiffInSeconds = null;
    
        
            const currentTimeStampInSeconds = parseInt(new Date().getTime()/1000);
            const postedDateTimeStampInSeconds = parseInt(new Date(date).getTime()/1000);
            timeStampDiffInSeconds = currentTimeStampInSeconds-postedDateTimeStampInSeconds;
         
        
            if  (timeStampDiffInSeconds>=0 && timeStampDiffInSeconds<60*3) {
                setDate("A few seconds ago") ;
              }
                 // between 0 to 180 seconds
               
               
              else if (timeStampDiffInSeconds>=60*3 && timeStampDiffInSeconds<60*60)
                 //between 180 seconds to 60 minutes
                 {setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*3)) + "minutes ago")  ;}
                 
            
             else if  ( timeStampDiffInSeconds>=60*60 && timeStampDiffInSeconds<60*60*24)
                 //between 60 minutes to 24 hours
                 {setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*60)) + "hours ago") ; }               
                 
             else if  ( timeStampDiffInSeconds>=60*60*24 && timeStampDiffInSeconds<60*60*24*7)
                 // between 24 hours to 30 days
             {    setDate( "Posted "+parseInt(timeStampDiffInSeconds/(60*60*24)) + " days ago") ;}
                
             else if  ( timeStampDiffInSeconds>=60*60*24*7 && timeStampDiffInSeconds<60*60*24*30)
             // between 24 hours to 30 days
         {    setDate( "Posted "+parseInt(timeStampDiffInSeconds/(60*60*24*7)) + " weeks ago") ;}
             else if ( timeStampDiffInSeconds>=60*60*24*30 && timeStampDiffInSeconds<60*60*24*30*365)
                 // between 30 days to 365 days
                { setDate("Posted "+parseInt(timeStampDiffInSeconds/(60*60*24*30)) + "months ago")  ;}
            
              
        }
        

        
            
           
   ,[])
    return (
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">

<div className="offre_card_header">
     <img style={{width:'120px' , height:'120px'}} src={logo} alt='hamma'></img>
     <div className="offre_card_info">
         <h2>{title}</h2>
         <p >{company}</p>
         <p >{addresse}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
             <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' ,lineHeight:'1.7',marginRight:'8px'}}>
              {dateNow}
             </p>
             <p style={{ color : '#eb0392' , fontSize:'13px',lineHeight:'1.7' }}> 14 candidats</p>
         </div>
         <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px'}}> 
        <button className="btn" > Apply now</button>
        <button className="btn2" > Save</button>
         </div>
     </div>
 </div>
</div>
<div className="offre_card_footer">
    <h2 style={{ fontSize:'15px' ,fontWeight:'normal' , color:'gray' , lineHeight:'1.7'}}> Posted by</h2>
<div style={{ display:'flex'}}>
<Avatar style={{height:'50px' ,width:'50px'}}> A </Avatar>
<h3 style={{margin:'8px',fontWeight:'600'}}>Aymen Smati</h3>
</div>
</div >
<div className='offre_description'> 
    <h5 >Job Description</h5>
    <p>
   {description}
    </p>
    <div className='offre_description_details'>
<div className ='offre_box'>
    <h3> Seniority Level</h3>
    <p> {poste}</p>
</div>
<div className ='offre_box'>
    <h3> Employement Type</h3>
    <p> {jobTime}</p>
</div>
<div className ='offre_box'>
    <h3> Industry</h3>
    <p> Information Technology & Services</p>
</div>
<div className ='offre_box'>
    <h3> Job Functions</h3>
    <p> {type}</p>
</div>

    </div>
</div>
       </Auxiliary>
        

    )

})


export default offreCardRight