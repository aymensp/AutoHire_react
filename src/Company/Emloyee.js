import { Avatar, Button } from '@material-ui/core'
import React ,{ forwardRef ,useDebugValue,useEffect,useState}  from 'react'
import logo from '../assets/offre.jpeg'
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
import CompanyCardRight from './companyCardRight'
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
const Employee = forwardRef(({idC, nom, industry ,about }) => {
    const [posts, setPosts] = useState([])
   
    const [buttonPopup,setButtonPopup] = useState(false);
    useEffect(() => {
      
        axios.get(`${url}user/e/Wevioo`).then( res => {
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
<h5>Employees</h5>
<RatingPopup
 trigger={buttonPopup} setTrigger = {setButtonPopup}>
            <h3>Rating</h3>
        </RatingPopup>
<br></br>
<Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >

    {posts.map(
        ({username,email ,entreprise}) =>
                      {
                         



                       
                      
                         
                       return  (
                        <Grid item xs={12} sm={6} md={4}>
                        <Card className='root'style={{borderRadius:'25px',border:'1px solid grey'}}  >
                        <CardContent>
                          <Typography
                            className='title'
                            color="textSecondary"
                            gutterBottom
                          >
                             
                             
                             <img className='imgCircle' src={logo} ></img>
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
                        </CardContent>
                        <CardActions>
                        <main>
        <button  style={{ color : 'white' , fontSize:'13px',lineHeight:'1.7' }} className="btn" onClick={()=> setButtonPopup(true)} > Ratings

        </button>
       
        </main>               </CardActions>
                      </Card>
                           
                          
                </Grid>       


    );})  }
      </Grid>
     
    
    

    
  
    
        
 
  
  
</div>
       </Auxiliary>
        

    )

})


export default  Employee