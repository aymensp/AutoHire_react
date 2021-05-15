
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
function Applicants(props) {

  const [rh,setRh] = useState('applied')
    let idOffre=props.location.search.split('=')[1];
    const useStyles = makeStyles({
      gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
      
      }
    });
    const [data, setData] = useState({ hits: [] });
    const [buttonPopup,setButtonPopup] = useState(false);
    const [buttonPopup2,setButtonPopup2] = useState(false);
 const classes = useStyles();
  const [posts, setPosts] = useState(null)
  const [posts2, setPosts2] = useState(null)
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

      axios2.get(`${url}offre/selectId/${idOffre}`).then( res2 => {

        setPosts2(res2.data)  
       } )
}     
,[])
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      `${url}offre/ApplicantsForOffer/${idOffre}`,
    );
const secondResponse = axios(`${url}offre/selectId/${idOffre}`)
    setData(result.data);
  
  };

  fetchData();
}, []);

return(


    <div className="app">
    <Header />
      
    <div className="myjobs__body">
       <aside>
       {posts ?
        <div>
        <h2>    <BookmarkIcon style={{color:'#eb0392',paddingRight:'5px'}}/>Job Details</h2>
       {posts.map(({ id,  position  }) => (
         <div>
   
    <h2> My Jobs {position}</h2>
    </div>
       ))} </div>
       :
<div >

</div>
       }
      
    
     
     </aside>
     <div className='list'>
     <h3>Candidates</h3>


<MailCandidatPopup 
 trigger={buttonPopup2} setTrigger = {setButtonPopup2}  >
   
   

   <div class="cn mailUs">
        <h2 class="inp-head">Send an Email to the Candidate</h2>
       <br></br>
        <input class="inp mail" type="email" value={email} disabled></input>

        <br></br>
        <br></br>
        <textarea placeholder=" Votre message" name="content" id="mailUs" cursor="0"> 
      


        
          Hello, [firstane , lastname]

Thank you for your interest in . 
We have received your application for the open [JOB TITLE] position and will review your materials thoroughly.
If you are interested to keep going with this process, here is the technical test that you should pass :,and the interview 
link:
In the meantime, please visit [LINK TO RELEVANT WEB PAGE] to learn more about our company.

Best, [entreprise]
Recruiting Team   </textarea>
        <br></br>
        <br></br>
        <center>  <button class="btn">Send</button></center>
      
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
  {posts.map(({ id,  username, firstname, lastname  }) => (
    
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
                        <Card className='root'style={{borderRadius:'25px',border:'1px solid grey',width:'330px'}}  >
                        <CardContent>
                          <Typography
                            className='title'
                            color="textSecondary"
                            gutterBottom
                          >
                             
                             
                             <img className='imgCircle' src={logo} ></img>
                          </Typography>
                 
                          <Typography variant="h5" component="h2">
                          {firstName} | {lastName}
                          </Typography>
                          <br></br>
                          <Typography className='pos' color="textSecondary">
                        <BsGeoAlt/> &nbsp;  {address} 
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
                           onClick={()=>{setButtonPopup2(true);
                          setButtonPopup(false);
                          setEmail(email);
                          setFirstName(firstName);
                          setLastName(lastName);
                        
                        
                        
                        }}> Contact </button> 
                        </div>
                          
                          </Typography>
                      
                        </CardContent>
                        <CardActions>
                      
       
                    </CardActions>
                      </Card>
                           
                          
                </Grid>       


    );})  }
      </Grid>
     
    
    

    
  
    
        
      
      ))}
  </div>
:
<div >

</div>
       }
      
    </div>
     <section type="hidden">
       
      <h2 type="hidden">Aymen, learn what hiring managers look for in answers to top interview questions</h2>
      
     </section>
    
   </div>
   
 </div>
)


}

export default Applicants