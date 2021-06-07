import mail from './assets/logo.png'
import logo from './assets/pdp.png'
import React , { useState, useEffect } from 'react'
import './List.css'
import {url} from './BaseUrl'
import axios from 'axios' ;
import Header from './Header';
import Auxiliary from './Auxiliary';
import axios2 from 'axios' ;
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Grid, withWidth } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CandidatPopup from './CandidatPopup';
import MailCandidatPopup from './MailCandidatPopup';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { AiOutlinePhone } from  "react-icons/ai";
import { AiTwotoneMail } from  "react-icons/ai";
import emailjs from 'emailjs-com';

function Applicants(props) {

  const [rh,setRh] = useState('applied')
    let idOffre=props.location.search.split('=')[1];
    let s=props.location.search.split('s')[1];
    
    let salary=s.split('po')[0];
    let t=props.location.search.split('time')[1];
    let time=t.split('s')[0];
    let p=props.location.search.split('poste')[1];
    let poste=p.split('type')[0];
    let tp=props.location.search.split('type')[1];
    let type=tp.split('description')[0];
    let dp=props.location.search.split('description')[1];
    let description=dp.split('=')[0];
    const useStyles = makeStyles({
      gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
      
      }
    });
    var templateParams = {
      name: 'James',
      notes: 'Check this out!',
      email: 'sloumazaa@gmail.com'
  };
    const [data, setData] = useState({ hits: [] });
    const [buttonPopup,setButtonPopup] = useState(false);
    const [buttonPopup2,setButtonPopup2] = useState(false);
 const classes = useStyles();
  const [posts, setPosts] = useState([])
  const [posts2, setPosts2] = useState([])
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [skills, setSkills] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [education, setEducation] = useState('')
  const user = localStorage.getItem('user')

  
  useEffect(() => {
    {

    
    axios.get(`${url}offre/ApplicantsForOffer/${idOffre}`).then( res => {

        setPosts(res.data)  
       } )
      }

     
}     
,[])
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_8uxeh6b', 'template_7ga6kpb', e.target, 'user_xD7SaAt4v405sYszVM9cX')
    .then((result) => {
     
        console.log("tebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaath"+result.text);
    }, (error) => {
      setButtonPopup2(false);
        console.log("hamdolah"+error.text);
    });
}



return(


    <div className="app">
    <Header />
      
    <div className="myjobs__body" >
       <aside>
      
        <div  style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
        <h2>    <BookmarkIcon style={{paddingRight:'5px'}}/>Job Details</h2>
<h3 style={{color:'#eb0392',paddingRight:'5px'}}>Post : &nbsp; </h3> <h4>{poste} </h4>

<h3 style={{color:'#eb0392',paddingRight:'5px'}}>Type : &nbsp; </h3> <h4>{type} </h4>
<h3 style={{color:'#eb0392',paddingRight:'5px'}}>Job Time : &nbsp; </h3> <h4>{time}</h4>
<h3 style={{color:'#eb0392',paddingRight:'5px'}}>Salary : &nbsp; </h3> <h4>{salary} dt</h4>
      </div>
    
    
    
     
     </aside>
  
     <div  style={{width:'1000px', backgroundColor:'transparent' }}>



<MailCandidatPopup 
 trigger={buttonPopup2} setTrigger = {setButtonPopup2}  >
   
   

   <div class="cn mailUs">
        <h2 class="inp-head">Your Email Has Been send successfully</h2>
       <br></br>
       

       <img style={{ width: '320px', height: '200px' ,borderStyle:'outset'}} src={mail}></img>
        <br></br>
        <br></br>

        <center>  <button class="btn" onClick={()=>{
    setButtonPopup2(false)
  }
    
    }>thank you</button></center>
      
    </div>
  
  
 </MailCandidatPopup>

<CandidatPopup 
 trigger={buttonPopup} setTrigger = {setButtonPopup}   >
   
   <button className ="btn_Cancel" onClick ={ ()=>
     {setButtonPopup(false);
      setExperience('');
      setSkills('');
      setEducation('');
}
}> <h1>X</h1></button>

    <h2 style={{color:'#eb0392'}}>Experience:</h2>
    <br></br>
    <p>{experience}</p>
    <br></br>
    <h2 style={{color:'#eb0392'}}>Skills:</h2>
    <br></br>
    <p>{skills}</p>
    <br></br>
    <h2 style={{color:'#eb0392'}}>Education:</h2>
    <br></br>
    <p>{education}</p>
  
    
        </CandidatPopup>
       {posts ?
  <div>

    
            <Grid
      container
      spacing={2}
      className={classes.gridContainer}
      justify="center"
     
    >

    {posts.map(
        ({username,firstName,lastName,position,entreprise,birthDate,phoneNumber,email,address,picture,experience,skills,education}) =>
                      { 
                       return  (
                        <Grid item xs={12} sm={6} md={6}>
                        <Card className='root'style={{borderRadius:'25px',border:'1px solid grey',width:'330px',height:'520px',boxShadow:'0 15px 10px 0 rgba(0,0,0,0.2)'}}  >
                        <CardContent>
                        <Typography
                           variant="body2" component="p"
                          >
                             
                             
                             <img style={  {borderRadius: '50%',
                             
                             height:'190px',
                             paddingLeft:'50px'
                            }} src={logo} ></img>
                          </Typography>
                 
                          <Typography variant="h5" component="h2">
                          {firstName} | {lastName}
                          </Typography>
                          <br></br>
                          <Typography className='pos' color="textSecondary">
                        <BsGeoAlt/>   {address} 
                          </Typography>         <br></br>
                          <Typography variant="body2" component="p">
                         <BsFillBriefcaseFill/> &nbsp;{position} | {entreprise} 
                          </Typography><br></br>  
                          <Typography variant="body2" component="p">
                        <BsCalendar/> &nbsp; {birthDate}                           
                          
                          </Typography>
                          <br></br>    
                         
                          <Typography variant="body2" component="p">
                         <AiOutlinePhone/>&nbsp; {phoneNumber}                  
                          
                          </Typography> <br></br>
                          <Typography variant="body2" component="p">
                        <AiTwotoneMail/>&nbsp;  {email}                             
                          
                          </Typography>
                          <Typography variant="body2" component="p">
                            
                            <div style={{   display: 'flex',flexWrap:'wrap' , marginTop:'10px',paddingLeft:'60px'}}> 
                          <button
                          className="btn" 
                          onClick={()=>{setButtonPopup(true);
                          setButtonPopup2(false);
                          setExperience(experience);
                          setSkills(skills);
                          setEducation(education);
                        
                        }}> More info </button>  
                        &nbsp;
                        
                          <button 
                           className="btn"
                           onClick={()=>{emailjs.send('service_8uxeh6b', 'template_7ga6kpb', templateParams,'user_xD7SaAt4v405sYszVM9cX')
                           .then(function(response) {
                              console.log('SUCCESS!', response.status, response.text);
                           }, function(error) {
                              console.log('FAILED...', error);
                           })
                           setButtonPopup2(true)
                         }
                           
                           }> Accept </button> 
                        </div>
                          
                          </Typography>
                      
                        </CardContent>
                        <CardActions>
                      
       
                    </CardActions>
                      </Card>
                           
                          
                </Grid>       


    );})  }
      </Grid>
     
    
    

    
  
    
        
      
    
  </div>
:
<div >

</div>
       }
      
    </div>
    </div>
    
   
 </div>
)


}

export default Applicants