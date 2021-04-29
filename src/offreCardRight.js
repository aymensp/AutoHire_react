import { Avatar } from '@material-ui/core'
import React ,{ forwardRef ,useEffect,createRef,useState, useRef}  from 'react'
import logo from './assets/company.png'
import Auxiliary from './Auxiliary'
import './offreCardRight.css'
import {url} from './BaseUrl';
import axios from 'axios';
import { useHistory } from 'react-router'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon} from 'react-share'


const offreCardRight = forwardRef(({id, title, company, addresse, date , description  , salary ,longitude,latitude,industry, poste , jobTime , type,creator,users ,link ,selected }) => {
    const userr = localStorage.getItem('user')
    const currentUser = JSON.parse(userr); 
  
    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory()
    const [dateNow, setDate] = useState(date)
    const [candiates, setCandidates] = useState([])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      //close menu
      const handleClose = () => {
        setAnchorEl(null);
      };
    useEffect(() => {

   

  

      

        const hamma =[];
        if(users){
            users.map((item)=>{setCandidates([...hamma,item])})
        }
      
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
  ,[ ])
  const Navigate =(company)=>{
    history.push({pathname:'/company',
     search:  'industry'+'='+company
     });
       }
  const Apply =( ) => {
    axios.post(`${url}offre/apply/new`, {
        idUser:currentUser._id,
        idOffre:id
           })
              .then((response) => {
                
                  setCandidates([...candiates,currentUser._id]);
            
            }, (error) => {
                console.log(error);
              });
 }
 
    return (
       <Auxiliary>
           <div style={{borderBottom:'1px solid rgba(0,0,0,0.08)'}} className="offre_card">

           <div className="offre_card_header">
     <img style={{width:'120px' , height:'120px'}} src={link?
                    logo:
                    `${url}images/${company}.png`} alt='hamma'></img>
     <div className="offre_card_info">
         <h2>{title}</h2>
         <p onClick={()=>Navigate(company)} >{company}</p>
         <p >{addresse}</p>
         <div style={{   display: 'flex' , marginTop:'2px'}}>
             <p style={{ color : 'rgba(0,0,0,0.6)' , fontSize:'13px' ,lineHeight:'1.7',marginRight:'8px'}}>
              {dateNow}
             </p>

            { candiates.length!==0? 
            
            <p style={{ color : '#eb0392' , fontSize:'13px',lineHeight:'1.7' }}> {candiates.length} candidats</p> 
        :
        <p style={{ color : '#eb0392', fontSize:'13px',lineHeight:'1.7' }}> Be the first applicant</p> }
         </div>
       
       {candiates.includes(currentUser._id)?
     <div style={{   display: 'flex',flexWrap:'wrap' ,alignItems:'center', marginTop:'10px'}}> 
     <CheckCircleIcon style={{color:'green',width:'20px',height:'20px'}}/>
     <p style={{fontWeight:'700',color:'green',marginRight:'15px',fontSize:'14px'}}>Already applied    </p>
     <div className='link'>
     <a  href='/myJobs' >See application</a>
     <ChevronRightIcon />
     </div>
      </div>
       :
       <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px'}}> 
      {link? <a href={link} > <button className="btn" >Apply on TanitJobs</button></a>: <button onClick={ Apply} className="btn" > Apply now</button>}
        <button className="btn2" > Save</button>
        </div>
       }
    
     </div>


     <div className="pencil"onClick={(handleClick)}>
<div style={{marginRight:'10px'}}>
     <FacebookShareButton
    url={`autohire.com/jobs/${id}`}
    quote={title +" "+ company +" " + addresse}
    hashtag="#AutoHire #Jobs">
    <FacebookIcon size={40} round={true}/>
</FacebookShareButton>
</div>
<LinkedinShareButton
title={title}
summary={description}
source="AutoHire"
url={`autohire.com/jobs/${id}`}
>
<LinkedinIcon size={40} round={true}/>
</LinkedinShareButton>
                </div>
     {/* <FacebookShareButton
    url="192.168.1.3:3001/jobs"
    quote={title +" "+ company +" " + addresse}
    hashtag="#AutoHire #Jobs">
    <FacebookIcon  />
</FacebookShareButton> */}
     
 </div>
</div>
<div className="offre_card_footer">
    <h2 style={{ fontSize:'15px' ,fontWeight:'normal' , color:'gray' , lineHeight:'1.7'}}> Posted by</h2>
<div style={{ display:'flex'}}>
<Avatar src={`${url}images/${creator}.jpeg`} style={{height:'50px' ,width:'50px'}}> A </Avatar>
<h3 style={{margin:'8px',fontWeight:'600'}}>{creator}</h3>
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
    <p> {industry}</p>
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