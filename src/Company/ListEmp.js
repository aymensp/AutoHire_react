import { Avatar, Button } from '@material-ui/core'
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'
import logo from '../assets/offre.jpeg'
import pdp from '../assets/pdp.png'
import Auxiliary from '../Auxiliary'
import './company.css'
import RatingPopup from './RatingEmpPopup'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './companyCardRight.css'
import '../Company/RatingPopup.css'
import {url} from '../BaseUrl'
import axios from 'axios' ;
import {FaStar} from "react-icons/fa";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
 
const ListEmp = forwardRef((props) => {
    const [posts, setPosts] = useState([])


    const [rating1 ,setRating1] = useState(null);
    const [rating2 ,setRating2] = useState(null);
    const [rating3 ,setRating3] = useState(null);
    const [rating4 ,setRating4] = useState(null);
    const [rating5 ,setRating5] = useState(null);
    const [rating6 ,setRating6] = useState(null);
    const [hover1,setHover1] =useState(null);
    const [hover2,setHover2] =useState(null);
    const [hover3,setHover3] =useState(null);
    const [hover4,setHover4] =useState(null);
    const [hover5,setHover5] =useState(null);
    const [hover6,setHover6] =useState(null);
    const [erreur, setErreur] = useState('');
    const [entreprise, setEntreprise] = useState('');
    const [emp, setEmployee] = useState('');

    const RateFn = (e) => {
      e.preventDefault();
      if((rating1>0)&&(rating2>0)&&(rating3>0)&&(rating4>0)&&(rating5>0)&&(rating6>0))
      {
      axios.post(`${url}evaluation/newEvaluation`, {
          integrity: rating1,
        planification: rating2,
        ponctuality: rating3,
        innovation: rating4,
        motivation: rating5,
        amelioration: rating6,
        commentaire: "test",
        entreprise: nomCmp,
        employee: emp
        })
        .then( (response)=>{
      setButtonPopup(false)
          setRating1(0)
          setRating2(0)
          setRating3(0)
          setRating4(0)
          setRating5(0)
          setRating6(0)
        }
        , (error) => {
          console.log(error);
        });
      }
      else{
        setErreur("empty values !")
      }
  }
    let nomCmp=props.location.pathname.split('/')[2];
    const [buttonPopup,setButtonPopup] = useState(false);
    useEffect(() => {
      
        axios.get(`${url}user/e/${nomCmp}`).then( res => {
            console.log(res.data)
            setPosts(res.data)
           }) 

        
            
    }        
   ,[])
 
   const classes = useStyles();
   
        


    return (
        
       <Auxiliary>
    
<div className='company_description'> 
<br>
</br>
<h1>Rate your Employees !</h1>
<br>
</br>

<RatingPopup

 trigger={buttonPopup} setTrigger = {setButtonPopup}>

    <h1 style={{color:'#eb0392 '}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           gi&nbsp;!</h1>
          
            <br></br> 
           <form>
                  <div className="divP">
         Integrity:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue1 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue1}
                        onClick={()=>(setRating1(ratingValue1))}
                       /> 
                       <FaStar className="star" color ={ratingValue1 <= (hover1 ||rating1) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover1(ratingValue1)}
                       onMouseLeave = {()=> setHover1(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                 Planification:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue2 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue2}
                        onClick={()=>(setRating2(ratingValue2))}
                       /> 
                       <FaStar className="star" color ={ratingValue2 <= (hover2 ||rating2) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover2(ratingValue2)}
                       onMouseLeave = {()=> setHover2(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                        
                    Ponctuality:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue3 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue3}
                        onClick={()=>(setRating3(ratingValue3))}
                       /> 
                       <FaStar className="star" color ={ratingValue3 <= (hover3 ||rating3) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover3(ratingValue3)}
                       onMouseLeave = {()=> setHover3(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                       Innovation :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue4 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue4}
                        onClick={()=>(setRating4(ratingValue4))}
                       /> 
                       <FaStar className="star" color ={ratingValue4 <= (hover4 ||rating4) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover4(ratingValue4)}
                       onMouseLeave = {()=> setHover4(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                    Motivation: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue5 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue5}
                        onClick={()=>(setRating5(ratingValue5))}
                       /> 
                       <FaStar className="star" color ={ratingValue5 <= (hover5 ||rating5) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover5(ratingValue5)}
                       onMouseLeave = {()=> setHover5(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <div className="divP">
                     Amelioration:  &nbsp;&nbsp;&nbsp;&nbsp;
                      {[... Array(5)].map((star,i)=>
                      {
                          const ratingValue6 = i + 1;
                       return  (  <label ><input type="radio" name="rating" hidden="true" value ={ratingValue6}
                        onClick={()=>(setRating6(ratingValue6))}
                       /> 
                       <FaStar className="star" color ={ratingValue6 <= (hover6 ||rating6) ?"#ffc107":"#e4e5e9"}
                       size={18}
                       onMouseEnter={()=>setHover6(ratingValue6)}
                       onMouseLeave = {()=> setHover6(null)}/>
                       </label>


    );}) }   
                    </div>
                    <br></br>
                    <br></br>
                    
                    <br></br>
                    <input value={erreur} onChange={e => setErreur(e.target.value)}  type="text" style ={{border:'none',color:'red'}}disabled/>
                    <br></br>    <br></br>
                    <div className="divP">
                    <button style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',width:'50%'}} className="btn" type="submit" onClick={(e)=>RateFn(e)}>done</button>
                    </div>
                  


                    </form>
        </RatingPopup  >
<br></br>

<Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >

    {posts.map(
        ({id,username,email ,entreprise}) =>
                      {
                         



                       
                      
                         
                       return  (
                        <Grid item xs={12} sm={6} md={4}>
                        <Card className='root'style={{borderRadius:'25px',border:'1px solid grey'}}  >
                        <CardContent>
                        <center>
                          <Typography
                            className='title'
                            color="textSecondary"
                            gutterBottom
                          >
                             
                             
                             <img className='imgCircle' src={pdp} ></img>
                          </Typography>
                          <Typography variant="h5" component="h2">
                          {username} 
                          </Typography>
                          <Typography className='pos' color="textSecondary">
                          {entreprise} 
                          </Typography>
                          <Typography variant="body2" component="p">
                          {email}                             <br />
                          
                          </Typography>
                          </center>
                        </CardContent>
                        <CardActions>
                        
                        <main><center>
        <button  style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7',marginLeft:'115px' }} className="btn"
         onClick={()=>{ setButtonPopup(true);
         setEmployee(username)}} > Ratings

        </button>
        </center> 
        </main>               </CardActions>
                      </Card>
                           
                          
                </Grid>       


    );})  }
      </Grid>
     
    
    

    
  
    
        
 
  
  
</div>
       </Auxiliary>
        

    )

})


export default  ListEmp