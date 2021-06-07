import React ,{useState} from 'react'
import Feed from './Feed';
import Header from './Header';
import Auxiliary from './Auxiliary';
import List from './List'
import BorderColorIcon from '@material-ui/icons/BorderColor';

function PostedJob() {

  const [rh,setRh] = useState('opened')

return(


    <div className="app">
    <Header />
      
    <div className="myjobs__body">
       <aside>
     
      <h2>
        <BorderColorIcon style={{color:'#eb0392',paddingRight:'5px'}}/>

        
        Manage Job Posting</h2>
       
      { rh==='saved' ? 

      <Auxiliary>
      <div onClick={()=>setRh('applied')}>
      <a>Opened Jobs</a>
      </div>
     < div onClick={()=>setRh('saved')} style={{color:'#eb0392',borderLeft:'3px solid #eb0392'}}>
      <a style={{color:'#eb0392'}} >Closed Jobs</a>
    </div> 
    
    </Auxiliary> :
     <Auxiliary> < div onClick={()=>setRh('applied')} style={{color:'#eb0392',borderLeft:'3px solid #eb0392'}}>
     <a style={{color:'#eb0392'}} >Opened Jobs</a>
   </div>  
   <div onClick={()=>setRh('saved')}>
     <a>Closed Jobs</a>
   </div></Auxiliary>
      }
     
     </aside>
   <List/>
     <section >
      <h2>Aymen, learn what hiring managers look for in answers to top interview questions</h2>
      
     </section>
    
   </div>
   
 </div>
)


}

export default PostedJob