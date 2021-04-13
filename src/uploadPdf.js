import React, { useEffect, useState } from 'react';
import Auxiliary from './Auxiliary';
import Backdrop from './Backdrop';
import './uploadPdf.css';
import {url} from './BaseUrl'
import axios from 'axios'
import { useLocation } from 'react-router';

function Modal (props) {
const userr = localStorage.getItem('user')
const currentUser = JSON.parse(userr);
const [experience , setExperience] = useState(props.experience);
const [education , setEducation] = useState(props.education);
const [skills , setSkills] = useState(props.skills);
const saveInfo = ()=>{
   
    axios.post(`${url}user/edit/information`, {
        id: currentUser._id,
        username: currentUser.username,
        education : education,
        skills : skills,
        experience : experience
        
      }).then( res => {
          console.log(res.data);
          window.location.reload()
     })
     .catch(error => {
         console.log(error);
     })  
}
const onFileUpload = (event) => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "upl",
      event.target.files[0],
      `${currentUser.username}.pdf`,  
      
    );
    formData.append(
        "username",
        `${currentUser.username}`
    )
   
    // Details of the uploaded file
   // Request made to the backend api
    // Send formData object
    axios.post(`http://localhost:3000/parseCV`, formData )
    .then(res=>{
        console.log(res.data.experience)
        setEducation(res.data.education);
        setExperience(res.data.experience);
        setSkills(res.data.skills);
        
})
    .catch(error=>{
        console.log(error);
    })
  };
return(

<Auxiliary>
    <Backdrop show = {props.show} clicked={props.modalClosed}/>
    <div 
    
    className='Modal'
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity: props.show ? '1': '0'
    }}
    > 
    <label for="resume">Resume</label>
                <input  className="butt" type="file"  onChange={(event) => onFileUpload(event)} />
                <label for="firstname">Experience</label>
                <textarea onChange={(event)=> setExperience(event.target.value)} type="text" id="experience" defaultValue={props.experience} value={experience} />
        
           
                <label for="lastname">Education</label>
                <textarea onChange={(event)=> setEducation(event.target.value)} type="text" id="education" defaultValue={props.education} value={education} />
           
         
                <label for="email">Skills</label>
                <textarea onChange={(event)=> setSkills(event.target.value)} type="text" id="text" defaultValue={props.skills} value={skills} />
          
         
          <button onClick={()=>saveInfo()} className="but" type="submit">Enregistrer</button>
       
      
    </div>
    
    </Auxiliary>
    )

} ;
export default Modal ;
