import React , { useState, useEffect }from "react"
import pdp from '../assets/pdp.png'
import Auxiliary from '../Auxiliary'
import { Tabs, TabNav, TabNavItem, TabContent, TabPanel } from 'react-smarttab'
import 'react-smarttab/dist/index.css'
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FlipMove from 'react-flip-move'
import Header from "../Header"

import {url} from '../BaseUrl'
import axios from 'axios' ;
const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
function Candidats() {
    const classes = useStyles();

    const [posts, setPosts] = useState([])

    useEffect(() => {
      
        axios.get(`${url}offre/ApplicantsForOffer/60360db27a4d0b03b4321159`).then( res => {
            console.log(res.data)
            setPosts(res.data)
           }) 

        
            
    }        
   ,[])
   return (
        
    <Auxiliary>
        <Header/>

<div className='company_description'> 
<br>
</br>
<h1>Rate your Employees !</h1>
<br>
</br>

<br></br>

<Grid
   container
   spacing={4}
   className={classes.gridContainer}
   justify="center"
 >

 {posts.map(
     ({username,email ,experience}) =>
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
                       {experience} 
                       </Typography>
                       <Typography variant="body2" component="p">
                       {email}                             <br />
                       
                       </Typography>
                       </center>
                     </CardContent>
                     <CardActions>
                                 </CardActions>
                   </Card>
                        
                       
             </Grid>       


 );})  }
   </Grid>
  
 
 

 

 
     



</div>
    </Auxiliary>
     

 )
  
  }
  


export default Candidats ;