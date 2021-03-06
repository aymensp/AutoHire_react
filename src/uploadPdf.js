import React, { useEffect, useState } from 'react';
import Auxiliary from './Auxiliary';
import Backdrop from './Backdrop';
import './uploadPdf.css';
import {url} from './BaseUrl'

import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/dom';
function Modal (props) {


const [experience , setExperience] = useState(props.experience);
const [education , setEducation] = useState(props.experience);
const [skills , setSkills] = useState(props.experience);


const getData =() => {

    axios.get(`${url}user/Info/admin`)
    .then(response=> {
        console.log(response.data)
        setSkills(response.data.skills)
        setExperience(response.data.experience)
        setEducation(response.data.education)
    })
} 
   

const onFileUpload = (event) => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "upl",
      event.target.files[0],
      "admin.pdf",  
      
    );
    formData.append(
        "username",
        "admin"
    )
  
    // Details of the uploaded file
    
  
    // Request made to the backend api
    // Send formData object
    axios.post(`${url}parseCV`, formData )
    .then(res=>{
        console.log('hammaedins')
        setEducation('hammaaaaaaa')
        axios.get(`${url}user/Info/admin`)
        .then(response=> {
            console.log(response.data)
            setSkills(response.data.skills)
            setExperience(response.data.experience)
            setEducation(response.data.education)
        })

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
          
         
          <button className="but" type="submit">Enregistrer</button>
       
      
    </div>
    
    </Auxiliary>
    )

} ;
export default Modal ;
