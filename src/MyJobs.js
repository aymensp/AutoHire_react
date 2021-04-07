import React, { useEffect, useState } from 'react'
import  './MyJobs.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Auxiliary from './Auxiliary';
import List from './List'
import BookmarkIcon from '@material-ui/icons/Bookmark';
function MyJobs() {
const [rh,setRh] = useState('applied')
const [hamma,setHamma] = useState(<List  rh={rh}/>) 

useEffect(()=>{
setHamma(<List  rh={rh}/>);
console.log(hamma);
console.log(rh);
},[rh])
return(
    
  

    <div className="app">
    <Header />
       
     <div className="myjobs__body">
       <aside>
     
      <h2>
        <BookmarkIcon style={{color:'#eb0392',paddingRight:'5px'}}/>

        
        My Jobs</h2>
       
      { rh==='saved' ? 

      <Auxiliary>
      <div onClick={()=>setRh('applied')}>
      <a>Applied Jobs</a>
      </div>
     < div onClick={()=>setRh('saved')} style={{color:'#eb0392',borderLeft:'3px solid #eb0392'}}>
      <a style={{color:'#eb0392'}} >Saved Jobs</a>
    </div> 
    
    </Auxiliary> :
     <Auxiliary> < div onClick={()=>setRh('applied')} style={{color:'#eb0392',borderLeft:'3px solid #eb0392'}}>
     <a style={{color:'#eb0392'}} >Applied Jobs</a>
   </div> 
   
   <div onClick={()=>setRh('saved')}>
     <a>Saved Jobs</a>
   </div></Auxiliary>
      }
     
     </aside>
    {hamma}
     <section >
      <h2>Aymen, learn what hiring managers look for in answers to top interview questions</h2>
      
     </section>
    
   </div>
     
 </div>
)


}

export default MyJobs