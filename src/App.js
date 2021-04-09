import React, { useEffect } from 'react';
import { withRouter ,Redirect,Switch,Route, Router, useHistory,} from 'react-router-dom';
import Acceuil from './Acceuil';
import './App.css';
import Login from './Login'; 
import Profile from './Profile';
import Offres from './offres';
import PostedJob from './PostedJob';
import PostJob from './PostJob';
import MyJobs from './MyJobs';
import Company from './Company/ListC';
import Test from './Test/Test';
import EmployeeRH from './Company/EmployeeRH';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={props => {
    const user = localStorage.getItem('user')
    const currentUser = JSON.parse(user);
      if (!user) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
         // check if route is restricted by role
      if (roles && currentUser.role !=roles) {
          // role not authorised so redirect to home page
          return <Redirect to={{ pathname: '/'}} />
      }
  // authorised so return component
      return <Component {...props} />
  }} />
)
 function App() {
  const user = localStorage.getItem('user')
  let history = useHistory()
 return (
    <div >
     <Switch history={history}>
     <Route exact path ="/login"  component={Login}/>
     <PrivateRoute exact path="/"  component={Acceuil}/>
     <PrivateRoute  path="/jobs"  roles='test' component={Offres}/>
     <PrivateRoute exact path="/profile"  component={Profile}/>
     <PrivateRoute exact path="/jobsSettings" roles='ADMIN' component={PostedJob}/>
     <PrivateRoute exact path="/myJobs"  component={MyJobs}/>
     <PrivateRoute exact path="/postJob" roles='ADMIN' component={PostJob}/>
     <PrivateRoute path="/company" roles='test' component={Company} />
     <PrivateRoute path="/test"  roles='ADMIN'  component={Test} />
     <PrivateRoute exact path="/emp" roles='ADMIN' component={EmployeeRH}/>
     </Switch> 
   </div>
  );
}
export default withRouter(App);
