import React ,{ forwardRef ,useEffect,useState}  from 'react'
import logo from './assets/offre.jpeg'
import './offresCardLeft.css'
import  timeago from './time'


const OffreCardsLeft = forwardRef(({ title, company, addresse, date , candidats }, ref) => {
  
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
                 {setDate(""+parseInt(timeStampDiffInSeconds/(60*3)) + "minutes ago")  ;}
                 
            
             else if  ( timeStampDiffInSeconds>=60*60 && timeStampDiffInSeconds<60*60*24)
                 //between 60 minutes to 24 hours
                 {setDate(""+parseInt(timeStampDiffInSeconds/(60*60)) + "hours ago") ; }               
                 
             else if  ( timeStampDiffInSeconds>=60*60*24 && timeStampDiffInSeconds<60*60*24*7)
                 // between 24 hours to 30 days
             {    setDate( ""+parseInt(timeStampDiffInSeconds/(60*60*24)) + " days ago") ;}
                
             else if  ( timeStampDiffInSeconds>=60*60*24*7 && timeStampDiffInSeconds<60*60*24*30)
             // between 24 hours to 30 days
         {    setDate( ""+parseInt(timeStampDiffInSeconds/(60*60*24*7)) + " weeks ago") ;}
             else if ( timeStampDiffInSeconds>=60*60*24*30 && timeStampDiffInSeconds<60*60*24*30*365)
                 // between 30 days to 365 days
                { setDate(""+parseInt(timeStampDiffInSeconds/(60*60*24*30)) + "months ago")  ;}
                console.log(dateNow)
              
        }
        
       

        
        
            
           
   ,[])
    return (

        <div  className="offre">

           <div className="offre__header">
                <img style={{width:'50px' , height:'50px'}} src={logo} alt='hamma'></img>
                <div className="offre__info">
                    <h3>{title}</h3>
                    <p >{company}</p>
                    <p >{addresse}</p>
                    <div style={{   display: 'flex' , marginTop:'2px'}}>
                        <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'12px' ,marginRight:'8px'}}>
                         {dateNow}
                        </p>
                        <p style={{ color : '#eb0392' , fontSize:'13px' }}> 14 candidats</p>
                    </div>
                </div>
            </div>
        </div>
    )

})


export default OffreCardsLeft