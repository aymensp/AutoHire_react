import React, { useEffect, useState } from 'react';
import Auxiliary from './Auxiliary';
import Backdrop from './Backdrop';
import './updateProfile.css';
import {url} from './BaseUrl'
import axios from 'axios'
import { useLocation } from 'react-router';
import { InputGroup } from 'react-bootstrap';
import AutocompletePlace from './AutocompletePlace';
import { Avatar, Icon } from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

function Update (props) {
const userr = localStorage.getItem('user')
const currentUser = JSON.parse(userr);
const [name , setName] = useState(props.firstName);
const [lastname , setLastName] = useState(props.lastName);
const [position , setPosition] = useState(props.position);
const [company , setCompany] = useState(props.entreprise);
const [address , setAddress] = useState(props.address);
const [image , setImage] = useState(`${url}images/${currentUser.username}.jpeg`);

const saveInfo = ()=>{
   
    axios.post(`${url}user/edit/headline`, {
          id: currentUser._id,
          username: currentUser.username,
          firstName : name,
          lastName :lastname,
          position : position ,
          entreprise : company,  
          address : address
        
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
      "file",
      event.target.files[0],
      `${currentUser.username}.jpeg`,  
      
    );
    formData.append(
        "name",
        `${currentUser.username}`
    )
   
    // Details of the uploaded file
   // Request made to the backend api
    // Send formData object
    axios.post(`http://localhost:3000/uploadImage`, formData )
    .then(res=>{
      
        setImage(`${url}images/${currentUser.username}.jpeg`)
})
    .catch(error=>{
        console.log(error);
    })
  };
return(

<Auxiliary>
    <Backdrop show = {props.show} clicked={props.modalClosed}/>
    <div 
    
    className='Update'
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
        opacity: props.show ? '1': '0'
    }}
    > 
  
               <img className="img" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWRBMXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/>
               <div style={{display:'flex'}}>
               <Avatar src={image} className="profile__content_top__avatar"/>
               <label for="hamma" className="update__image"  >
               <CreateTwoToneIcon className="pencil__icon_image" /> 
               </label>
               <input onChange={(event) => onFileUpload(event)} type="file" id="hamma" style={{display:'none',visibility:'none'}}></input>  
               </div>
               
               
         <div style={{padding:'20px'}}>    
       <div style={{display:'flex',marginTop:'30px'}}>
      <div style={{display:'flex' ,flex:'1', flexDirection:'column'}}>
          <label className="label">First Name</label>
          <input className="input" onChange={(event)=> setName(event.target.value)} type="text" id="FirstName" defaultValue={name} value={name} /> 
      </div>
      <div style={{display:'flex' ,flex:'1',marginLeft:'15px',marginRight:'3px', flexDirection:'column'}}>
          <label className="label">Last Name</label>
          <input className="input" onChange={(event)=> setLastName(event.target.value)} type="text" id="LastName" defaultValue={lastname} value={lastname} /> 
      </div>
     </div>
     
     <div  >
          <label className="label">Position</label>
          <input className="input" onChange={(event)=> setPosition(event.target.value)} type="text" id="LastName" defaultValue={position} value={position} /> 
      </div>
      <div >
          <label className="label">Company</label>
          <input className="input" onChange={(event)=> setCompany(event.target.value)} type="text" id="LastName" defaultValue={company} value={company} /> 
      </div>
      <div >
          <label className="label">Address</label>
          <AutocompletePlace  onSelect={place => setAddress(place.place_name)} />
          </div>
                
          <button onClick={()=>saveInfo()} className="but" type="submit">Enregistrer</button>
       
      </div>
    </div>
    
    </Auxiliary>
    )

} ;
export default Update ;
