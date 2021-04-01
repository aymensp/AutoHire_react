import React, { useEffect } from 'react';
import { withRouter ,Redirect,Switch,Route,} from 'react-router-dom';
import Acceuil from './Acceuil';
import './App.css';
import Login from './Login'; 
import Profile from './Profile';
import Offres from './offres';
import PostedJob from './PostedJob';

function SecuredRoute(props) {
 
  const user = localStorage.getItem('user')
 return(
    <Route path={props.path} render ={data => user ?  (
      <props.component {...data}></props.component> ):
      (<Redirect to={{pathname:'/'}}></Redirect>)
    }>
 </Route>
  )
}
 function App() {
  const user = localStorage.getItem('user')
  
 return (
    <div >
     <Switch>
     <Route exact path ="/"  component={Login}/>
     <SecuredRoute path="/home" component={Acceuil}/>
     <SecuredRoute path="/jobs" component={Offres}/>
     <SecuredRoute path="/profile" component={Profile}/>
     <SecuredRoute path="/jobsSettings" component={PostedJob}/>
     </Switch> 
   </div>
  );
}
export default withRouter(App);
