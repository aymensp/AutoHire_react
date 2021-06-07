import React, { useState, useEffect } from 'react';
import './GotoT.css';
import Header from "../Header"
import { useHistory, useLocation } from 'react-router';
import axios from 'axios' ;
import '../Login.css';
import logo from '../assets/logo.png';
import Auxiliary from '../Auxiliary'

import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });
const GotoT = () => {
    let history = useHistory();
    const [quizz , setQuizz] = useState([]);
    const [quizzTri , setQuizztri] = useState([]);



    useEffect(() => {

        axios.get(`http://localhost:3000/test/`).then( res => {
            console.log("===================================")
            
          console.log(res.data)
          setQuizz(res.data)


         }) 
        
      }, []);
      const classes = useStyles();


      const groupBy = prop => quizz => {
        return quizz.reduce((dict, item) => {
          const { [prop]: _, ...rest } = item;
          dict[item[prop]] = [...(dict[item[prop]] || []), rest];
          return dict;
        }, {});
      };
      
      const result = Object.entries(groupBy('sujet')(quizz))
        .map(([key, value]) => ({ name: key, children: value }));
        console.log(result);




    const Navigate = (sujet) => {
        history.push({
          pathname: '/test',
          search: 'sujet' + '=' + sujet
        });
      }
    
    
      return (
        
        <Auxiliary>
     
 <div className="app"> 
 <Header />
 
 
 <h1>Choose to pass your test</h1>
 <br>
 </br>
 
 <br></br>
 
 <Grid
       container
       spacing={2}
       className={classes.gridContainer}
       justify="center"

     >
 
     {result.map(
         ({name}) =>
                       {
                          
 
 
 
                        
                       
                          
                        return  (
                         <Grid item xs={12} sm={6} md={4}>
                         <Card className='root'style={{borderRadius:'25px',border:'1px solid grey',height:'300px'}}  >
                         <CardContent>
                         <center>
                           <Typography
                             className='title'
                             color="textSecondary"
                             gutterBottom
                           >
                              
                              
                              <img className='imgCircle' src={logo} ></img>
                           </Typography>
                           <Typography variant="h5" component="h5" style={{ color: '#eb0392'  }}>
                           &#9203; {name} &#9203;
                           <br></br> 
                           ____________________
                           </Typography>
                           
                           </center>
                         </CardContent>
                         <CardActions>
                         
                         <main><center>
         <button  style={{ color : 'white' , fontSize:'20px',lineHeight:'1.7' }} className="btn" onClick={()=> Navigate(name)} > Start test
 
         </button>
         </center> 
         </main>               </CardActions>
                       </Card>
                            
                           
                 </Grid>       
 
 
     );})  }
       </Grid>
      
     
     
 
     
   
     
         
  
   
   
 </div>
        </Auxiliary>
         
 
     )}

    export default GotoT;