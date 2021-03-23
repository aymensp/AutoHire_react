import React from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import List from './List'
function PostedJob() {

return(


    <div className="app">
    <Header />
       
     <div className="app__body">
     <Sidebar/>
     <List/>
     <Widgets/>
   </div>
     
 </div>
)


}

export default PostedJob