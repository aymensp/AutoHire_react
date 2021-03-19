import React from 'react';
import Auxiliary from './Auxiliary';
import Backdrop from './Backdrop';
import './uploadPdf.css';
const modal = (props) => (
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
                <input className="butt" type="file"/>
        
           
                <label for="firstname">Experience</label>
                <textarea type="text" id="firstname" value="Sayali" />
        
           
                <label for="lastname">Education</label>
                <textarea type="text" id="lastname" value="Sayali" />
           
         
                <label for="email">Skills</label>
                <textarea type="email" id="email" value="saypatil12345@yahoo.com" />
          
           
              
          
           
          
          
         
       
        

         
          <button className="but" type="submit">Enregistrer</button>
       
          
       
         
         
       
     








    
    </div>
    
    </Auxiliary>
);
export default modal;
