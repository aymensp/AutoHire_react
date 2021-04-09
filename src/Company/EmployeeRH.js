import React from 'react'
import '../App.css';
import Feed from './ListEmp';
import Header from '../Header';
import Sidebar from '../Sidebar';

import Widgets from '../Widgets';
function EmployeeRH() {

return (


    <div className="app">
       <Header />
          
        <div className="app__body">
    
        <Feed/>
      
      </div>
        
    </div>
);


}

export default EmployeeRH