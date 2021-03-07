import React from 'react'
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
function Acceuil() {

return (


    <div className="app">
       <Header />
          
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
        
    </div>
);


}

export default Acceuil